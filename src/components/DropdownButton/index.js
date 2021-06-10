import React from 'react'

import * as Styles from './styles'
import { ArrowDownIcon, ArrowUpIcon } from '../../assets/icons'
import { useOnClickOutside } from '../../hooks'

const initialState = {
   isOpen: false
}

const DropdownContext = React.createContext()

const reducers = (state, { type, payload }) => {
   switch (type) {
      case 'TOGGLE_DROPDOWN':
         return { ...state, isOpen: payload }
      default:
         return state
   }
}

const useDropdown = () => React.useContext(DropdownContext)

export const DropdownButton = ({ title, children, width, ...props }) => {
   const ref = React.useRef()
   const [state, dispatch] = React.useReducer(reducers, initialState)

   useOnClickOutside(ref, () => toggle(false))

   const toggle = value => {
      dispatch({ type: 'TOGGLE_DROPDOWN', payload: value })
   }

   return (
      <DropdownContext.Provider value={{ state, dispatch, toggle }}>
         <Styles.Section {...props} ref={ref} width={width}>
            <Styles.Header>
               <span>{title}</span>
               <button onClick={() => toggle(!state.isOpen)}>
                  {state.isOpen ? (
                     <ArrowUpIcon color='#fff' />
                  ) : (
                     <ArrowDownIcon color='#fff' />
                  )}
               </button>
            </Styles.Header>
            {children}
         </Styles.Section>
      </DropdownContext.Provider>
   )
}

const Options = ({ children, ...props }) => {
   const { state, toggle } = useDropdown()

   if (!state.isOpen) return null
   return (
      <Styles.List onClick={() => toggle(false)} {...props}>
         {children.map((node, index) => (
            <li key={index}>{node}</li>
         ))}
      </Styles.List>
   )
}

DropdownButton.Option = ({ children, ...props }) => {
   return <Styles.Button {...props}>{children}</Styles.Button>
}
DropdownButton.Options = Options
