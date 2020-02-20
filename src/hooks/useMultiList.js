import React from 'react'

const useMultiList = initial => {
   const [selected, setSelected] = React.useState([])
   const [list] = React.useState(initial)

   const selectOption = (key, value) => {
      const option = list.find(option => option[key] === value)
      if (selected.find(item => item[key] === option[key])) {
         setSelected(selected =>
            selected.filter(option => option[key] !== value)
         )
      } else {
         setSelected(selected => [...selected, { ...option }])
      }
   }

   return [list, selected, selectOption]
}

export default useMultiList
