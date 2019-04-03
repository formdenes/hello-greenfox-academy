import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (<button onClick={props.handleClick}>{props.label}</button>);
}

const Display = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

class SimpleGoldenAcornApp extends React.Component {
  state = {
    acornAmount: 0,
  }

  increaseAcorns = (e) => {
    this.setState(prevState => { return {
      acornAmount: prevState.acornAmount + 1};
    });
  }

  decreaseAcorns = (e) => {
    this.setState(prevState => { return {
      acornAmount: Math.max(prevState.acornAmount - 1, 0)};
    });
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 38) {
      this.increaseAcorns();
    } else if (e.keyCode === 40) {
      this.decreaseAcorns();
    }
  }

  render() {
    return (
      <div tabIndex="0" onKeyDown={this.handleKeyDown}>
        <Button label="Buy one" handleClick={this.increaseAcorns} />
        <Display>
          <h1>{this.state.acornAmount}</h1>
        </Display>
        <Button label="Eat one" handleClick={this.decreaseAcorns} />
      </div>
    );
  }
}

ReactDOM.render(
  <SimpleGoldenAcornApp />,
  document.getElementById('root'),
);
