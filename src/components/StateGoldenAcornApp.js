import React from 'react';
import Button from './Button'
import Display from './DisplayAcorn'

class StateGoldenAcornApp extends React.Component {
  state = {
    acornAmount: 0,
  }

  buyAcorn = (e) => {
    this.setState(prevState => { return {
      acornAmount: prevState.acornAmount + 1};
    });
  }

  eatAcorn = (e) => {
    this.setState(prevState => { return {
      acornAmount: Math.max(prevState.acornAmount - 1, 0)};
    });
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 38) {
      this.buyAcorn();
    } else if (e.keyCode === 40) {
      this.eatAcorn();
    }
  }

  render() {
    return (
      <div tabIndex="0" onKeyDown={this.handleKeyDown}>
        <Button value="Buy one" handleClick={this.buyAcorn} />
        <Display>
          <div>{this.state.acornAmount}</div>
        </Display>
        <Button value="Eat one" handleClick={this.eatAcorn} />
      </div>
    );
  }
}

export default StateGoldenAcornApp;