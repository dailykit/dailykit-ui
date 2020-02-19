import React from 'react'
import { DashboardTile } from '@dailykit/ui'

export default {
   title: 'Tiles'
}

export const DashboardTileVariant = () => {
    return (
      <div className="App">
        <DashboardTile
          title="Ingredients"
          count="29"
          conf="All available"
          onClick={() => console.log("Navigate")}
        />
      </div>
    );
} 