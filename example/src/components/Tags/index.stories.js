import React from 'react'
import { storiesOf } from '@storybook/react'

import { TagGroup, Tag } from '@dailykit/ui'

storiesOf('Tag', module).add('Tags', () => (
   <TagGroup>
      <Tag>Recipes</Tag>
      <Tag>Ingredients</Tag>
      <Tag>Inventories</Tag>
   </TagGroup>
))
