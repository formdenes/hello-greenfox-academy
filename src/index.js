import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Button (props) {
  return <button onClick={props.handleClick}>{props.label}</button>;
}

function Display (props) {
  return (
  <div>
    {props.children}
  </div>
  );
}

class SimpleGoldenAcornApp extends React.Component {
  state = {
    acornAmount: 0
  }
  increaseAcorns = (e) => {
    this.setState({
      acornAmount: this.state.acornAmount+1
    })
  }
  decreaseAcorns = (e) => {
    this.setState({
      acornAmount: Math.max(this.state.acornAmount-1,0)
    })
  }
  render() {
    return (
      <div>
        <Button label='Buy one' handleClick={this.increaseAcorns} />
        <Display>
          <p>{this.state.acornAmount}</p>
        </Display>
        <Button label='Eat one' handleClick={decreaseAcorns} />
      </div>
    )
  }
}

ReactDOM.render(
  <SimpleGoldenAcornApp/>,
  document.getElementById('root'),
);
