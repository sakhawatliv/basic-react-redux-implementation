import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../src/action/CounterAction";

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };
  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };
  render() {
    return (
      <div>
        <div className="container">
          <h1>Counter App</h1>
          <div className="row">
            <div className="col-md-4">
              <Button variant="primary" onClick={this.increment}>
                +
              </Button>
            </div>
            <div className="col-md-4">
              <h1>{this.props.count}</h1>
            </div>
            <div className="col-md-4">
              <Button variant="danger" onClick={this.decrement}>
                -
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default connect(
//   state => ({
//     count: state.count
//   }),
//   dispatch => bindActionCreators({ ...actionCreator }, dispatch)
// )(Counter);

// function mapStateToProps(state) {
//   return {
//     count: state.count
//   };
// }

export default connect(state => {
  return {
    count: state.count
  };
})(Counter);
