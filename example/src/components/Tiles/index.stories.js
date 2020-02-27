import React from 'react'
import { DashboardTile, ButtonTile } from '@dailykit/ui'

export default {
   title: 'Tiles'
}

export const DashboardTileVariant = () => (
    <DashboardTile
        title="Ingredients"
        count="29"
        conf="All available"
        onClick={() => console.log("Navigate")}
    />
)

export const ButtonTileVariant = () => (
    <>
        <ButtonTile
            type="primary"
            size="lg"
            text="Add Title"
            onClick={ e => console.log('Tile clicked') }
        />
        <ButtonTile
            type="primary"
            size="sm"
            text="Add an App"
            onClick={ e => console.log('Tile clicked') }
        />
        <ButtonTile
            type="primary"
            size="sm"
            text="Add a Photo"
            helper="add some text maybe"
            onClick={ e => console.log('Tile clicked') }
        />
        <ButtonTile
            type="secondary"
            text="Add Sub Title"
            onClick={ e => console.log('Tile clicked') }
        />
        <ButtonTile
            noIcon
            type="secondary"
            text="Select Sub Title"
            onClick={ e => console.log('Tile clicked') }
        />
    </>
)