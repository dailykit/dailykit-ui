import React from 'react'

const useMultiList = data => {
   const [selected, setSelected] = React.useState([])
   const [list, setList] = React.useState([])

   React.useEffect(() => {
      if (data.length > 0) {
         setList(data)
      }
   }, [data])

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
