import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import App from './App'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
/* 
const Button = (props) => {
  return (<button onClick={props.handleClick}>{props.value}</button>);
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
          <h1>{this.state.acornAmount}</h1>
        </Display>
        <Button value="Eat one" handleClick={this.eatAcorn} />
      </div>
    );
  }
} */
/* 
ReactDOM.render(
  <SimpleGoldenAcornApp />,
  document.getElementById('root'),
); */
