import React from 'react'
import { storiesOf } from '@storybook/react'

import { AvatarGroup, Avatar } from '@dailykit/ui'

storiesOf('Avatar', module)
   .add('Variant', () => <Avatar title='Jack Middle Jones' type='round' />)
   .add('With Initials', () => <Avatar title='Jack Middle Jones' />)
   .add('With Image', () => (
      <Avatar
         title='Jack Middle Jones'
         url='https://randomuser.me/api/portraits/men/61.jpg'
      />
   ))
   .add('With Name', () => (
      <Avatar
         withName
         title='Jack Middle Jones'
         url='https://randomuser.me/api/portraits/men/61.jpg'
      />
   ))
   .add('Multiple Avatars', () => (
      <div>
         <AvatarGroup>
            <Avatar title='Mary' />
            <Avatar
               title='Jack Middle Jones'
               url='https://randomuser.me/api/portraits/men/61.jpg'
            />
            <Avatar title='James Arthur' />
         </AvatarGroup>
         <AvatarGroup>
            <Avatar title='Mary' type='round' />
            <Avatar
               type='round'
               title='Jack Middle Jones'
               url='https://randomuser.me/api/portraits/men/61.jpg'
            />
            <Avatar title='James Arthur' type='round' />
         </AvatarGroup>
      </div>
   ))
