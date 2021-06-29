import React from 'react'

import { TagGroup, Tag } from '../../Tags'
import { Avatar } from '../../Avatar'
import Checkbox from '../../Checkbox'

import {
   StyledMSL1,
   StyledMSL1101,
   StyledMSL2,
   StyledSSL1,
   StyledSSL2,
   StyledSSL22,
   StyledMSL31,
   StyledMSL111
} from './styled'

export const ListItem = ({ type, children, ...props }) => {
   switch (type) {
      case 'SSL1':
         return (
            <StyledSSL1
               title={props.title}
               onClick={props.onClick}
               isActive={props.isActive}
            >
               <h3>{props.title}</h3>
            </StyledSSL1>
         )
      case 'SSL2':
         return (
            <StyledSSL2
               onClick={props.onClick}
               isActive={props.isActive}
               title={props.content.title}
            >
               <h3>{props.content.title}</h3>
               <p>{props.content.description}</p>
            </StyledSSL2>
         )
      case 'SSL22':
         return (
            <StyledSSL22
               onClick={props.onClick}
               isActive={props.isActive}
               title={props.content.contact.title}
            >
               <Avatar
                  withName
                  type='round'
                  url={props.content.contact.icon}
                  title={props.content.contact.title}
               />
               <Avatar
                  withName
                  url={props.content.supplier.icon}
                  title={props.content.supplier.title}
               />
            </StyledSSL22>
         )
      case 'MSL1':
         return (
            <StyledMSL1
               title={props.title}
               onClick={props.onClick}
               isActive={props.isActive}
            >
               <span data-type='checkbox'>
                  <Checkbox
                     id='label'
                     checked={!!props.isActive}
                     onChange={e => (e.target.checked = props.isActive)}
                  />
               </span>
               <h3>{props.title}</h3>
            </StyledMSL1>
         )
      case 'MSL2':
         return (
            <StyledMSL2
               onClick={props.onClick}
               isActive={props.isActive}
               title={props.content.title}
            >
               <span data-type='checkbox'>
                  <Checkbox
                     id='label'
                     checked={!!props.isActive}
                     onChange={e => (e.target.checked = props.isActive)}
                  />
               </span>
               <div>
                  <h3>{props.content.title}</h3>
                  <p>{props.content.description}</p>
               </div>
            </StyledMSL2>
         )
      case 'MSL31':
         return (
            <StyledMSL31
               onClick={props.onClick}
               isActive={props.isActive}
               title={props.content.title}
            >
               <span data-type='checkbox'>
                  <Checkbox
                     id='label'
                     checked={!!props.isActive}
                     onChange={e => (e.target.checked = props.isActive)}
                  />
               </span>
               <Avatar
                  type='round'
                  url={props.content.img}
                  title={props.content.title}
               />
               <section>
                  <h3>{props.content.title}</h3>
                  <div>
                     <p>Servings: {props.content.servings.join(', ')}</p>
                     <p>
                        {props.content.cost.currency}
                        {props.content.cost.amount}/{props.content.cost.unit}
                     </p>
                  </div>
               </section>
            </StyledMSL31>
         )

      case 'MSL111':
         return (
            <StyledMSL111
               onClick={props.onClick}
               isActive={props.isActive}
               title={props.content.title}
            >
               <span data-type='checkbox'>
                  <Checkbox
                     id='label'
                     checked={!!props.isActive}
                     onChange={e => (e.target.checked = props.isActive)}
                  />
               </span>
               <section>
                  <Avatar
                     withName
                     url={props.content.img}
                     title={props.content.title}
                  />
                  {props.content.roles.length > 0 && (
                     <TagGroup>
                        {props.content.roles.map(role => (
                           <Tag>{role}</Tag>
                        ))}
                     </TagGroup>
                  )}
               </section>
            </StyledMSL111>
         )
      case 'MSL1101':
         return (
            <StyledMSL1101
               onClick={props.onClick}
               isActive={props.isActive}
               title={props.content.title}
            >
               <span data-type='checkbox'>
                  <Checkbox
                     id='label'
                     checked={!!props.isActive}
                     onChange={e => (e.target.checked = props.isActive)}
                  />
               </span>
               <aside>
                  <Avatar
                     withName
                     type='round'
                     url={props.content.icon}
                     title={props.content.title}
                  />
                  {children}
               </aside>
            </StyledMSL1101>
         )
      default:
         return (
            <StyledSSL1
               title={props.title}
               onClick={props.onClick}
               isActive={props.isActive}
            >
               <h3>{props.title}</h3>
            </StyledSSL1>
         )
   }
}
