import React from 'react'
import { CheckCircleIcon } from '../../assets/icons'
import Loading from './Loading'

const Spinner = ({ loading, updatedField, updated, setUpdated }) => {
   React.useEffect(() => {
      const timeId = setTimeout(() => {
         setUpdated(null)
      }, 1800)
      return () => {
         clearTimeout(timeId)
      }
   }, [updated])

   return (
      <div style={{ width: '24px', height: '24px' }}>
         {!loading && updated === updatedField && <CheckCircleIcon />}
         {loading && <Loading />}
      </div>
   )
}

export default Spinner
