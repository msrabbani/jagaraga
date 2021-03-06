import React, { Component } from 'react'
import {Welcome, Main} from './containers/'
import {Provider} from 'react-redux'
import {store} from './store'

export default class Root extends Component <{}> {
  constructor() {
    super();
    this.state = {
      started: false,
    };
  }

  startWorkout = () => {
    this.setState({started: true});
  };

  renderRoot(ComponentRender) {
    return (
        <Provider store={store}>
            <ComponentRender StartWorkout={this.startWorkout} />
        </Provider>
    );
  }

  render() {
    const {started} = this.state;
    return started ? this.renderRoot(Main) : this.renderRoot(Welcome);
  }

}

