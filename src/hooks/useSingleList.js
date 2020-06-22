import React from 'react'

const useSingleList = data => {
   const [current, setCurrent] = React.useState({})
   const [list, setList] = React.useState([])

   React.useEffect(() => {
      if (data.length > 0) {
         setList(data)
      }
   }, [data])

   const selectOption = (key, value) => {
      const index = list.findIndex(option => option[key] === value)
      if (current.id === list[index].id) {
         setCurrent({})
      } else {
         setCurrent(list[index])
      }
   }

   return [list, current, selectOption]
}

export default useSingleList
