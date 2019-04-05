import React from 'react';
import BuyAcorn from '../containers/BuyAcorn';
import EatAcorn from '../containers/EatAcorn';
import DisplayAcorn from '../containers/DisplayAcorn';

const ReduxGoldenAcornApp = (props) => (
  <main tabIndex="0" onKeyDown={props.onKeyDown}>
    <BuyAcorn />
    <DisplayAcorn>
      <div>{props.value}</div>
    </DisplayAcorn>
    <EatAcorn />
  </main>
);

export default ReduxGoldenAcornApp;