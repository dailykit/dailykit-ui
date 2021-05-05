import React from 'react'
import { Link } from 'react-scroll'
import Styles from './style'

const AnchorNav = ({ children }) => {
   return <Styles.AnchorNav>{children}</Styles.AnchorNav>
}
const AnchorNavItem = ({ targetElement, label, containerId }) => {
   return (
      <Link
         activeClass='active'
         to={targetElement}
         spy={true}
         smooth={true}
         duration={250}
         containerId={containerId}
      >
         {label}
      </Link>
   )
}

export { AnchorNav, AnchorNavItem }
