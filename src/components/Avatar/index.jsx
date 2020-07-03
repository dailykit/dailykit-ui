import React from 'react'

// Styled
import { StyledAvatarGroup, StyledAvatar, StyledWrapper } from './styled'

const AvatarGroup = ({ children, ...props }) => (
   <StyledAvatarGroup {...props}>{children}</StyledAvatarGroup>
)

const getInitials = input => {
   let title = input.trim()

   if (!title) {
      console.log('--- Error(Avatar): Provided title is empty! ---')
      throw Error('Provided title is empty!')
   }

   const { length } = title.split(' ')

   const [first] = title
   const [last] = length > 1 ? title.split(' ')[length - 1] : ['']
   return `${first}${last}`.toUpperCase()
}

const Avatar = ({ title, url, withName, ...props }) => {
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
