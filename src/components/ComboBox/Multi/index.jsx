import React from "react";
import { useClickAway } from "react-use";

import {
  StyledSelect,
  StyledOptions,
  StyledOption,
  StyledSelected,
  SelectedOptions,
  HiddenOptions
} from "./styles";

import {
  ClearIcon,
  SearchIcon,
  ArrowDownIcon,
  ArrowUpIcon
} from "../../../assets/icons";

const optionExists = (options, item) => {
  for (let option of options) {
    if (option.id === item) {
      return true;
    }
  }
  return false;
};

const MultiSelect = ({ options, placeholder, selectedOption }) => {
  const ref = React.useRef(null);
  const [keyword, setKeyword] = React.useState("");
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [isOptionsVisible, setIsOptionsVisible] = React.useState(false);
  const [hiddenOptions, setHiddenOptions] = React.useState(false);

  useClickAway(ref, () => {
    setIsOptionsVisible(false);
    setHiddenOptions(false);
  });

  const selectOption = option => {
    setKeyword("");

    const exists = optionExists(selectedOptions, option.id);
    const withRemoved = selectedOptions.filter(opt => opt.id !== option.id);
    const withAdded = [...selectedOptions, option];

    // Pass to parent
    selectedOption(withAdded);

    // Update selected options
    setSelectedOptions(() => (exists ? withRemoved : withAdded));
  };

  const removeOption = option => {
    let withRemoved = selectedOptions.filter(opt => opt.id !== option.id);

    // Pass to parent
    selectedOption(withRemoved);

    // Update selected options
    setSelectedOptions([...withRemoved]);
  };

  return (
    <StyledSelect ref={ref}>
      <StyledSelected>
        <div onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
          <span>
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder={placeholder}
            value={keyword}
            onChange={e => setKeyword(e.target.value.toLowerCase())}
            onClick={() => setIsOptionsVisible(!isOptionsVisible)}
          />
        </div>
        <span onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
          {isOptionsVisible ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </span>
      </StyledSelected>
      {selectedOptions.length > 0 && (
        <SelectedOptions>
          {selectedOptions.slice(0, 2).map(option => (
            <li key={option.id}>
              <span title={option.value}>{option.value}</span>
              <span onClick={() => removeOption(option)}>
                <ClearIcon />
              </span>
            </li>
          ))}
          {selectedOptions.length > 2 && (
            <button onClick={() => setHiddenOptions(!hiddenOptions)}>
              +{selectedOptions.length - 2}
            </button>
          )}
          {hiddenOptions && (
            <HiddenOptions>
              {selectedOptions.slice(2).map(option => (
                <li key={option.id}>
                  <span title={option.value}>{option.value}</span>
                  <span onClick={() => removeOption(option)}>
                    <ClearIcon />
                  </span>
                </li>
              ))}
            </HiddenOptions>
          )}
        </SelectedOptions>
      )}
      {isOptionsVisible && (
        <StyledOptions moveDown={selectedOptions.length > 0}>
          {options
            .filter(option => option.value.toLowerCase().includes(keyword))
            .map(option => (
              <StyledOption
                key={option.id}
                title={option.value}
                onClick={() => selectOption(option)}
                isSelected={optionExists(selectedOptions, option.id)}
              >
                <div>
                  <input
                    type="checkbox"
                    checked={optionExists(selectedOptions, option.id)}
                  />
                  <span>{option.value}</span>
                </div>
                {option.description && <p>{option.description}</p>}
              </StyledOption>
            ))}
        </StyledOptions>
      )}
    </StyledSelect>
  );
};

export default MultiSelect;
