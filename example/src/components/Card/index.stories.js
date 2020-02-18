import React from 'react'
import { Card, TextButton } from '@dailykit/ui'

export default {
   title: 'Card'
}

export const InfoCard = () => {
    return (
        <div className="App">
          <Card>
            <Card.Title>Boiled and Mashed</Card.Title>
            <Card.Img
              src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="Dummy"
            />
            <Card.Body>
              <Card.Text>Description, if any</Card.Text>
              <Card.Text>
                <Card.Stat>
                  <span>Bulk Density:</span>
                  <span>200gm/cm3</span>
                </Card.Stat>
              </Card.Text>
              <Card.Text>
                <Card.Stat>
                  <span>% of yield:</span>
                  <span>15%</span>
                </Card.Stat>
              </Card.Text>
              <Card.Text>
                <Card.Stat>
                  <span>Labour time per unit:</span>
                  <span>30 minutes</span>
                </Card.Stat>
              </Card.Text>
              <Card.Text>
                <Card.Stat>
                  <span>Equipments needed:</span>
                  <span>Utensil 1</span>
                </Card.Stat>
              </Card.Text>
              <Card.Text>
                <Card.Stat>
                  <span>Shelf life:</span>
                  <span>20 days</span>
                </Card.Stat>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <TextButton type="ghost">Requires Ref</TextButton>
            </Card.Footer>
          </Card>
        </div>
      );
}

