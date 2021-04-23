import { toast } from 'react-toastify'

export const fn = () => console.log('This is a function')
export const defaultToast = () => {
   console.log('Default')
   console.log(toast)
   toast.success('S')
}
