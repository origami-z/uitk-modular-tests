import * as React from 'react';
import { Button } from '@jpmorganchase/uitk-core';
import { AddIcon } from '@jpmorganchase/uitk-icons';
import { Card, Panel } from '@jpmorganchase/uitk-lab';

const App = () => {
  return (
    <div>
      <Panel>
        <Card>
          <h1>Is the button at the top left?</h1>
        </Card>
      </Panel>
      <Panel>
        <h1>
          <Button className="AbsoluteButton">
            <AddIcon />
          </Button>
        </h1>
      </Panel>
    </div>
  );
};

export default App;
