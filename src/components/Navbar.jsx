import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = { drawer: false, error: false };

  handleDrawer = () => {
    this.setState({ drawer: !this.state.drawer });
  };

  handleErrorDisplay = () => {
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
          <div className={this.state.drawer ? "items items-click" : "items"}>
            <select
              name=""
              id="algos"
              defaultValue={this.props.algorithm}
              onChange={this.props.handleAlgorithmChange}
              disabled={!this.props.start}
            >
              <option value="Sort Algorithm" disabled hidden>
                Sort Algorithm
              </option>
              <option value="Bubble Sort">Bubble Sort</option>
              <option value="Selection Sort">Selection Sort</option>
              <option value="Insertion Sort">Insertion Sort</option>
              <option value="Merge Sort">Merge Sort</option>
            </select>
            <div className="size-group">
              <label htmlFor="size" id="size-label">
                Size:
              </label>
              <input
                name="size"
                type="text"
                autoComplete="off"
                value={this.props.size}
                id="size"
                minLength="1"
                maxLength="3"
                disabled={!this.props.start}
                onChange={(e) => {
                  this.props.handleSize(e.target.value);
                  if (e.target.value < 1 || e.target.value > 100) {
                    this.setState({ error: true });
                  } else {
                    this.setState({ error: false });
                  }
                }}
              />
            </div>
            <button
              className="random"
              onClick={this.props.randomize}
              disabled={!this.props.start}
            >
              Randomize
            </button>
          </div>
        </nav>
        {this.state.error && (
          <div className="alert">
            <span className="closebtn" onClick={this.handleErrorDisplay}>
              &times;
            </span>
            The number must be between 1 and 100.
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Navbar;
