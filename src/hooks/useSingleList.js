import React from 'react'

const useSingleList = initial => {
   const [current, setCurrent] = React.useState({})
   const [list] = React.useState(initial)

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
