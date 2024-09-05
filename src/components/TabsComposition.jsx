import React from 'react';
import { Tabs, Tab } from './Tabs';

const TabsComposition = () => {
  return (
    <div>
      <Tabs>
        <Tab label="Tab 1">
          <h2>Content for Tab 1</h2>
          <p>This is the first tab's content.</p>
        </Tab>
        <Tab label="Tab 2">
          <h2>Content for Tab 2</h2>
          <p>This is the second tab's content.</p>
        </Tab>
        <Tab label="Tab 3">
          <h2>Content for Tab 3</h2>
          <p>This is the third tab's content.</p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsComposition;
