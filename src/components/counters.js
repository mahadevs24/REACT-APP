import React, { Component } from "react";

import Counter from "./counter";

class Counters extends React.Component {
  render() {
    return (
      <div>
        <button
          className=" btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        <br />
        {this.props.counters.map((cou) => (
          <Counter
            key={cou.id}
            count={cou.count}
            selected={cou.selected}
            onDelete={this.props.onDelete}
            cd={cou}
            onIncrement={this.props.onIncrement}
            onReset={this.props.onReset}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
