import react from "react";
import React, { Component } from "react";
class Counter extends React.Component {
  state = {
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 25,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>THere are No tags!!!</p>;
    return (
      <ul>
        {this.state.tags.map((tag, i) => (
          <li>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <react.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <br />

        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()} style={this.styles}>
              {this.formatCount()}
            </span>
          </div>

          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.cd)}
              className="btn-secondary btn-md m-2 "
            >
              +
            </button>

            <button
              onClick={() => this.props.onDecrement(this.props.cd)}
              className="btn-secondary btn-md m-2 "
              disabled={this.props.cd.count > 0 ? "" : "Disabled"}
            >
              -
            </button>

            <button
              className="btn-sm btn-danger btn-p"
              onClick={() => this.props.onDelete(this.props.cd.id)}
            >
              Delete
            </button>
          </div>
        </div>

        <br />
        <div>{this.renderTags()}</div>
      </react.Fragment>
    );
  }

  getBadgeClasses() {
    let classess = "badge m-2 badge-";
    classess += this.props.count === 0 ? "warning" : "primary";
    return classess;
  }
  formatCount() {
    return this.props.count === 0 ? "Zero" : this.props.count;
  }
}

export default Counter;
