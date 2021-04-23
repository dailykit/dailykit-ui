import React from 'react'
import { defaultToast, TextButton } from '@dailykit/ui'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default {
   title: 'Toasts'
}
export const ToastVariant = () => (
   <div>
      <TextButton type='solid' onClick={defaultToast}>
         Toast
      </TextButton>
      <ToastContainer />
   </div>
)
