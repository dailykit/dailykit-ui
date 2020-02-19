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
        <ButtonTile type="primary" size="lg" text="Add Title" />
        <ButtonTile type="primary" size="sm" text="Add an App" />
        <ButtonTile type="secondary" text="Add Sub Title" />
        <ButtonTile type="secondary" noIcon text="Select Sub Title" />
    </>
)