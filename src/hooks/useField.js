import React from 'react'

export const useField = (
   initial = undefined,
   { validator = null, invokeOnBlur = null, type = null } = {}
) => {
   const [value, setValue] = React.useState(initial)
   const [meta, setMeta] = React.useState({
      isValid: false,
      isTouched: false,
      isFocused: false
   })

   const setDefaultValue = React.useCallback(
      value => {
         setValue(value)
      },
      [setValue]
   )

   return {
      meta,
      setDefaultValue,
      inputProps: {
         value,
         onChange: e => {
            if (type === 'number') {
               return setValue(parseFloat(e.target.value))
            } else if (type === 'boolean') {
               return setValue(!value)
            }
            return setValue(e.target.value)
         },
         onFocus: () =>
            setMeta(meta => ({
               ...meta,
               isFocused: true
            })),
         onBlur: e => {
            const { value } = e.target
            setMeta(meta => ({
               ...meta,
               isTouched: true,
               isFocused: false,
               ...(validator && { isValid: validator(value) })
            }))
            if (invokeOnBlur) {
               invokeOnBlur(e)
            }
         }
      }
   }
}
