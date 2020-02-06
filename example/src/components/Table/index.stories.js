import React from 'react'
import { storiesOf } from '@storybook/react'

import {
   Table,
   TableHead,
   TableBody,
   TableRow,
   TableCell,
   AvatarGroup,
   Avatar,
   TagGroup,
   Tag
} from '@dailykit/ui'

storiesOf('Table', module).add('With Texts', () => (
   <Table>
      <TableHead>
         <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Authors</TableCell>
            <TableCell align='right'>Cooking Time</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell align='right'>Price</TableCell>
         </TableRow>
      </TableHead>
      <TableBody>
         <TableRow>
            <TableCell>Aussie Chicken</TableCell>
            <TableCell>Non-Vegetarian</TableCell>
            <TableCell>
               <AvatarGroup>
                  <Avatar
                     title='Jack Middle Jones'
                     url='https://randomuser.me/api/portraits/men/61.jpg'
                  />
                  <Avatar title='James Arthur' />
               </AvatarGroup>
            </TableCell>
            <TableCell align='right'>1hr 25mins</TableCell>
            <TableCell>
               <TagGroup>
                  <Tag>Chicken</Tag>
                  <Tag>Advance</Tag>
               </TagGroup>
            </TableCell>
            <TableCell align='right'>$14.67</TableCell>
         </TableRow>
         <TableRow>
            <TableCell>Tilapia Parmesan</TableCell>
            <TableCell>Vegetarian</TableCell>
            <TableCell>
               <AvatarGroup>
                  <Avatar title='Mary' />
               </AvatarGroup>
            </TableCell>
            <TableCell align='right'>15mins</TableCell>
            <TableCell>
               <TagGroup>
                  <Tag>Cheese</Tag>
                  <Tag>Beginner</Tag>
               </TagGroup>
            </TableCell>
            <TableCell align='right'>$8.50</TableCell>
         </TableRow>
      </TableBody>
   </Table>
))
