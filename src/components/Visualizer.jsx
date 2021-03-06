import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AlgoInfo from "./AlgoInfo";
import { bubbleSort, bubbleSortInfo } from "../Algorithms/bubbleSort";
import { selectionSort, selectionSortInfo } from "../Algorithms/selectionSort";
import { insertionSort, insertionSortInfo } from "../Algorithms/insertionSort";
import { mergeSort, mergeSortInfo } from "../Algorithms/mergeSort";
import { createColor } from "../Actions/createColor";
import {
  createAnimation,
  createAnimationMergeSort,
} from "../Actions/createAnimation";
import { shuffleArray } from "../utils/shuffleArray";
import { lineEquation } from "../utils/lineEquation";

import "./Visualizer.css";

class Visualizer extends Component {
  state = {
    array: [],
    compareElements: [],
    swapped: [],
    size: 25,
    algorithm: "Sort Algorithm",
    speed: 1000,
    start: true,
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Used for saving timeouts
  timeout = [];

  // Actions on the array
  createColor = createColor.bind(this);
  createAnimation = createAnimation.bind(this);
  createAnimationMergeSort = createAnimationMergeSort.bind(this);

  // Clearing all the timeouts
  reset = () => {
    this.timeout.forEach((element) => {
      clearTimeout(element);
    });
    this.timeout = [];
    this.setState({ start: true, swapped: [], compareElements: [] });
  };

  // Random Array Generator
  randomArrayGenerator = () => {
    let array = [];
    if (this.state.size > 0 && this.state.size <= 100) {
      for (let i = 1; i <= this.state.size; i++) {
        array.push(i);
      }
    }

    array = shuffleArray(array);
    this.setState({ array });
  };

  handleAlgorithmChange = (e) => {
    this.setState({ algorithm: e.target.value });
  };

  handleSpeed = (e) => {
    this.setState({ speed: parseInt(e.target.value) });
  };

  handleSize = (size) => {
    this.setState({ size });
  };

  sort = () => {
    const algorithm = this.state.algorithm;
    if (algorithm === "Sort Algorithm") {
      alert("Select an algorithm");
    } else {
      this.setState({ start: false });

      let array = [...this.state.array];
      let speed = this.state.speed;

      let resetTime;

      if (algorithm === "Bubble Sort") {
        resetTime = bubbleSort(
          array,
          speed,
          this.createColor,
          this.createAnimation
        );
      } else if (algorithm === "Selection Sort") {
        resetTime = selectionSort(
          array,
          speed,
          this.createColor,
          this.createAnimation
        );
      } else if (algorithm === "Insertion Sort") {
        resetTime = insertionSort(
          array,
          speed,
          this.createColor,
          this.createAnimation
        );
      } else if (algorithm === "Merge Sort") {
        resetTime = mergeSort(
          array,
          0,
          array.length - 1,
          speed,
          speed,
          this.createColor,
          this.createAnimationMergeSort
        );
      }

      // For changing the state from RESET to START
      this.timeout.push(
        setTimeout(() => {
          this.reset();
        }, resetTime)
      );
    }
  };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.randomArrayGenerator();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.size !== prevState.size) {
      this.randomArrayGenerator();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    let size = parseInt(this.state.size);

    let { slope, intercept } = lineEquation(this.state.height, size, 1);

    let widthEle = (this.state.width - 33 - (size + 1) * 5) / size;

    // Setting algoInfo object according to currently selected algorithm
    let algoInfo;
    if (this.state.algorithm === "Bubble Sort") algoInfo = bubbleSortInfo;
    else if (this.state.algorithm === "Insertion Sort")
      algoInfo = insertionSortInfo;
    else if (this.state.algorithm === "Selection Sort")
      algoInfo = selectionSortInfo;
    else if (this.state.algorithm === "Merge Sort") algoInfo = mergeSortInfo;

    return (
      <div className="app-container">
        <div className="app-content">
          <Navbar
            randomize={this.randomArrayGenerator}
            algorithm={this.state.algorithm}
            size={this.state.size}
            handleAlgorithmChange={this.handleAlgorithmChange}
            handleSize={this.handleSize}
            start={this.state.start}
          />
          <div className="cont">
            {this.state.array.map((number, index) => (
              <div
                className="data"
                key={index}
                style={{
                  height: `${number * slope + intercept}px`,
                  width: `${Math.max(1, parseInt(widthEle))}px`,
                  backgroundColor: this.state.swapped.includes(index)
                    ? "royalblue"
                    : this.state.compareElements.includes(index)
                    ? "#8349c3"
                    : "turquoise",
                  color: "white",
                }}
              ></div>
            ))}
          </div>
          <div className="play-pause">
            <button
              className="btn-start-reset"
              onClick={this.state.start === true ? this.sort : this.reset}
            >
              {this.state.start === true ? "Start" : "Reset"}
            </button>
            <div className="speed-group">
              <label htmlFor="range" id="speed-label">
                Speed:
              </label>
              <input
                type="range"
                id="range"
                min="1"
                max="2000"
                disabled={!this.state.start}
                value={this.state.speed}
                onChange={this.handleSpeed}
              />
            </div>
          </div>
          <AlgoInfo algoInfo={algoInfo} />
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Visualizer;
