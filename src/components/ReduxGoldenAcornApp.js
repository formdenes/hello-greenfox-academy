import React from 'react';
import BuyAcorn from '../containers/BuyAcorn';
import EatAcorn from '../containers/EatAcorn';
import DisplayAcorn from '../containers/DisplayAcorn';

const ReduxGoldenAcornApp = (props) => (
  <main>
    <BuyAcorn />
    <DisplayAcorn />
    <EatAcorn />
  </main>
);

export default ReduxGoldenAcornApp;