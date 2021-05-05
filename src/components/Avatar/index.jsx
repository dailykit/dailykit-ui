import React from 'react'

// Styled
import { StyledAvatarGroup, StyledAvatar, StyledWrapper } from './styled'

const AvatarGroup = ({ children, ...props }) => (
   <StyledAvatarGroup {...props}>{children}</StyledAvatarGroup>
)

const getInitials = (input = '') => {
   let names = input.split(' '),
      initials = names[0].substring(0, 1).toUpperCase()

   if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase()
   }
   return initials
}

const Avatar = ({ title = '', url = '', withName, ...props }) => {
   return (
      <StyledWrapper withName={withName}>
         <StyledAvatar title={title} {...props}>
            {url ? <img src={url} alt={title} /> : getInitials(title)}
         </StyledAvatar>
         {withName && <span title={title}>{title}</span>}
      </StyledWrapper>
   )
}

export { AvatarGroup, Avatar }
