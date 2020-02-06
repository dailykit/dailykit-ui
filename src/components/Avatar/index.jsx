import React from 'react'

// Styled
import { StyledAvatarGroup, StyledAvatar, StyledWrapper } from './styled'

const AvatarGroup = ({ children, ...props }) => (
   <StyledAvatarGroup {...props}>{children}</StyledAvatarGroup>
)

const Avatar = ({ title, url, withName, ...props }) => {
   const getInitials = title => {
      const length = title.split(' ').length
      const first = title.split(' ')[0][0]
      const last = length > 1 ? title.split(' ')[length - 1][0] : ''
      return `${first}${last}`
   }
   return (
      <StyledWrapper withName={withName}>
         <StyledAvatar title={title} {...props}>
            {url ? <img src={url} alt={title} /> : `${getInitials(title)}`}
         </StyledAvatar>
         {withName && <span title={title}>{title}</span>}
      </StyledWrapper>
   )
}

export { AvatarGroup, Avatar }
