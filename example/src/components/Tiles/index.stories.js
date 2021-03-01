import React from 'react'
import { DashboardTile, ButtonTile, OptionTile, Spacer } from '@dailykit/ui'

export default {
   title: 'Tiles'
}

export const OptionTileVariant = () => (
   <>
      <OptionTile
         title='Simple Product'
         description='Product that is not Customizable or Combo'
         onClick={() => console.log('onClick called')}
      />
      <Spacer size='16px' />
      <OptionTile
         title='Customizable Product'
         description='Product that is not Simple or Combo'
         onClick={() => console.log('onClick called')}
      />
      <Spacer size='16px' />
      <OptionTile
         title='Combo Product'
         description='Product that is not Simple or Customizable'
         onClick={() => console.log('onClick called')}
      />
   </>
)

export const DashboardTileVariant = () => (
   <DashboardTile
      title='Ingredients'
      count='29'
      conf='All available'
      onClick={() => console.log('Navigate')}
   />
)

export const ButtonTileVariant = () => (
   <>
      <ButtonTile
         type='primary'
         size='lg'
         text='Add Title'
         onClick={e => console.log('Tile clicked')}
         style={{ margin: '20px 0' }}
      />
      <ButtonTile
         type='primary'
         size='sm'
         text='Add an App'
         onClick={e => console.log('Tile clicked')}
         style={{ margin: '20px 0' }}
      />
      <ButtonTile
         type='primary'
         size='sm'
         text='Add a Photo'
         helper='add some text maybe'
         onClick={e => console.log('Tile clicked')}
         style={{ margin: '20px 0' }}
      />
      <ButtonTile
         type='secondary'
         text='Add Sub Title'
         onClick={e => console.log('Tile clicked')}
         style={{ margin: '20px 0' }}
      />
      <ButtonTile
         noIcon
         type='secondary'
         text='Select Sub Title'
         onClick={e => console.log('Tile clicked')}
         style={{ margin: '20px 0' }}
      />
   </>
)
