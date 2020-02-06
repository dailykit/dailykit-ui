import React from 'react'
import { storiesOf } from '@storybook/react'

import { TagGroup, Tag } from '@dailykit/ui'

storiesOf('Tag', module).add('Tags', () => (
   <TagGroup>
      <Tag color='primary'>Primary</Tag>
      <Tag color='success'>Success</Tag>
      <Tag color='danger'>Danger</Tag>
      <Tag>Default</Tag>
   </TagGroup>
))
