import React, { Component } from "react";
import "./navigation.css";

class Navigation extends Component {
  state = { drawer: false, error: false };

  handleDrawer = () => {
    console.log("Working");
    this.setState({ drawer: !this.state.drawer });
  };

  handleDisplay = () => {
    this.setState({ error: !this.state.error });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="nav-group">
          <h2>Sorting Visualizer</h2>
          <div className="drawer">
            <i
              onClick={this.handleDrawer}
              className={this.state.drawer ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <div className={this.state.drawer ? "resp" : "items"}>
            <select
              name=""
              id="algos"
              defaultValue="Sort Algorithm"
              onChange={this.props.selectChange}
            >
              <option value="Sort Algorithm" disabled hidden>
                Sort Algorithm
              </option>
              <option value="Bubble Sort">Bubble Sort</option>
              <option value="Selection Sort">Selection Sort</option>
              <option value="Insertion Sort">Insertion Sort</option>
              <option value="Merge Sort">Merge Sort</option>
              <option value="Quick Sort">Quick Sort</option>
            </select>
            <div className="size-group">
              <label htmlFor="size" id="size-label">
                Size:
              </label>
              <input
                type="text"
                name="size"
                autoComplete="off"
                value={this.props.size}
                id="size"
                min="1"
                max="100"
                onChange={(e) => {
                  this.props.increase(e.target.value);
                  if (e.target.value < 1 || e.target.value > 100) {
                    this.setState({ error: true });
                  } else {
                    this.setState({ error: false });
                  }
                }}
              />
            </div>
            <button className="random" onClick={this.props.randomize}>
              Randomize
            </button>
          </div>
        </nav>
        {this.state.error && (
          <div className="alert">
            <span className="closebtn" onClick={this.handleDisplay}>
              &times;
            </span>
            The number must be between 1 and 100.
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Navigation;
