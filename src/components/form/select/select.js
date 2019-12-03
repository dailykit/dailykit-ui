import React from 'react';
import styled, { css } from 'styled-components';

const Select = ({ variant, title, optional, options, ...props }) => {
    
    const [selected, setSelected] = React.useState({ id : null, image : '/assets/icons/n_sample_img.svg', value : 'select' });
    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    const selectOption = (option) => {
        setSelected(option);
        toggleOpen();
    }

    return (
        <Container>
            <StyledLabel>{ title } <span hidden={ !optional }>(optional)</span> </StyledLabel>
            <StyledSelect variant={ variant } { ...props } onClick={ toggleOpen }>
                <img className="template-img" src={ selected.image } style={ { display : variant === 'template' ? 'inline' : 'none' } }/>
                { selected.value }
                <span>
                    <img src="/assets/icons/n_dropdown.svg" style={ { transform : open ? 'rotateZ(180deg)' : 'rotateZ(0deg)' } } />
                </span>
            </StyledSelect>
            <StyleList style={ { display : open ? 'block' : 'none' } }>
                {
                    options.map(option => 
                        <li key={ option.id } onClick={ () => selectOption(option) }>
                            <img src={ option.image } style={ { display : variant === 'template' ? 'inline' : 'none' } }/>
                            { option.value }
                        </li>
                    )
                }
            </StyleList>
        </Container>
    );
};

export default Select;

// Functions for handling variants
const handleSelectVariant = variant => {
    switch (variant) {
        case 'normal':
            return normalVariant();
        case 'template':
            return templateVariant();
        default:
            return normalVariant();
    }
};

const handleListVariant = variant => {
    switch (variant) {
        case 'normal':
            return normalListVariant();
        case 'template':
            return templateListVariant();
        default:
            return normalListVariant();
    }
};

// Styling for Container
const Container = styled.div`
    position: relative;
`

// Styling for Label
const StyledLabel = styled.label`
    color: #555B6E;
    font-size: 14px;
    line-height: 14px;
    display: block;
    margin-bottom: 8px;

    span {
        font-style: italic;
    }
`

// Styling for Select Box
const baseVariant = styled.div`
    width: inherit;
    border: 1px solid #CACEDC;
    background: #fff;
    color: #555B6E;
    padding: 9px 11px;
    font-weight: 500;

    img.template-img {
        width: 26px;
        height: 26px;
        margin-right: 11px;
    }

    span {
        float: right;
    }
`

const normalVariant = () => css`

`

const templateVariant = () => css`
    padding: 4px 6px;
`

const StyledSelect = styled(baseVariant)(
    ({ variant }) => css`
        ${ handleSelectVariant(variant) };
    `
);

// Styling for Select List
const baseList = styled.ul`
    border: 1px solid #CACEDC;
    margin: 0;
    list-style-type: none;
    padding-inline-start: 11px;
    padding-inline-end: 11px;
    color: #555B6E;
    position: absolute;
    left: 0; right: 0;
    z-index: 1000;
    background: #fff;

    li {
        padding: 9px 0;

        img {
            width: 26px;
            height: 26px;
            margin-right: 11px;
        }

        &:hover {
            cursor: pointer;
        }
    }
`

const normalListVariant = () => css`
    
`

const templateListVariant = () => css`
   li {
        padding: 4px 0;
   }
`

const StyleList = styled(baseList)(
    ({ variant }) => css`
        ${ handleListVariant(variant) };
    `
)
