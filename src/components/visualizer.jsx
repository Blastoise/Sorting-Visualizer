import React, { Component } from "react";
import "./visualizer.css";
// import bubbleSort from "../sortingAlgorithms/bubbleSort";
import Navigation from "./Navigation";

// Change this value for the speed of the animations.
// const this.state.sliderValue = 500;

// function randomIntFromInterval(min, max) {
//   // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

function shuffle(numbered) {
  var ctr = numbered.length,
    temp,
    index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = numbered[ctr];
    numbered[ctr] = numbered[index];
    numbered[index] = temp;
  }
  return numbered;
}

class Visualizer extends Component {
  state = {
    array: [],
    compareElements: [],
    swapped: [],
    size: 10,
    selectValue: "Sort Algorithm",
    sliderValue: 1,
  };

  // delay = this.state.sliderValue;
  randomArrayGenerator = () => {
    let array = [];
    if (this.state.size > 0 && this.state.size < 100) {
      for (let i = 1; i <= this.state.size; i++) {
        array.push(i);
      }
    }

    array = shuffle(array);
    console.log(array);
    this.setState({ array });
  };

  bubbleSort = () => {
    // console.log("Value of speed: " + this.state.sliderValue);
    let array = [...this.state.array];
    let delay = this.state.sliderValue;
    // console.log("Delay: " + delay);
    // let doneElements = [];

    for (let i = 0; i < array.length - 1; i++) {
      // swapped = false;
      for (let j = 0; j < array.length - 1 - i; j++) {
        this.createColor([j, j + 1], delay, "COMPARE");
        delay += this.state.sliderValue;
        // console.log("Delay: " + delay);

        if (array[j] > array[j + 1]) {
          this.createColor([j, j + 1], delay, "SWAP");
          this.createAnimation(array, j, j + 1, delay);
          delay += this.state.sliderValue;
          // swapped = true;
          // console.log("Delay: " + delay);
        }

        this.createColor([], delay, "NONE");
        delay += this.state.sliderValue;
        // console.log("Delay: " + delay);
      }
      // this.createColor(tempDoneElements, delay, "DONE");
      // delay += 100;
    }
    // console.log("ENDED");
    //   const isColorChange = i % 3 !== 2;
  };

  selectionSort = () => {
    let array = [...this.state.array];
    let delay = this.state.sliderValue;

    for (let i = 0; i < this.state.size - 1; i++) {
      let min = i;
      for (let j = i + 1; j < this.state.size; j++) {
        this.createColor([min, j], delay, "COMPARE");
        delay += this.state.sliderValue;
        if (array[min] > array[j]) {
          min = j;
        }
        this.createColor([], delay, "NONE");
        delay += this.state.sliderValue;
      }

      if (min !== i) {
        this.createColor([min, i], delay, "SWAP");
        this.createAnimation(array, min, i, delay);
        delay += this.state.sliderValue;
      }
      this.createColor([], delay, "NONE");
      delay += this.state.sliderValue;
    }
  };

  insertionSort = () => {
    let array = [...this.state.array];
    let delay = this.state.sliderValue;

    let length = array.length;
    for (let i = 1; i < length; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        this.createColor([j, j + 1], delay, "COMPARE");
        delay += this.state.sliderValue;

        this.createColor([j, j + 1], delay, "SWAP");
        this.createAnimation(array, j, j + 1, delay);
        delay += this.state.sliderValue;

        this.createColor([], delay, "NONE");
        delay += this.state.sliderValue;

        // array[j + 1] = array[j];
        // animations.push([j, j + 1, "red"]);
        // animations.push([j, j + 1, "green"]);
        // animations.push([j, j + 1, "blue"]);
        j = j - 1;
      }
      if (j !== -1) {
        this.createColor([j, j + 1], delay, "COMPARE");
        delay += this.state.sliderValue;
        this.createColor([], delay, "NONE");
        delay += this.state.sliderValue;
      }
    }
  };

  merge = (array, l, middle, r, delay) => {
    let left = [];
    let right = [];

    for (let i = l; i <= middle; i++) {
      left.push(array[i]);
    }
    for (let i = middle + 1; i <= r; i++) {
      right.push(array[i]);
    }

    let i, j, k;
    i = 0;
    j = 0;
    k = l;
    while (i < left.length && j < right.length) {
      console.log([i + l, j + middle + 1]);
      this.createColor([i + l, j + middle + 1], delay, "COMPARE");
      delay += this.state.sliderValue;
      if (left[i] < right[j]) {
        array[k] = left[i];
        this.createAnimationMergeSort(array, delay);
        delay += this.state.sliderValue;
        this.createColor([], delay, "NONE");
        delay += this.state.sliderValue;
        k++;
        i++;
      } else {
        array[k] = right[j];
        this.createAnimationMergeSort(array, delay);
        delay += this.state.sliderValue;
        this.createColor([], delay, "NONE");
        delay += this.state.sliderValue;
        k++;
        j++;
      }
    }

    while (i < left.length) {
      console.log([i + l, i + l]);
      this.createColor([i + l, i + l], delay, "COMPARE");
      delay += this.state.sliderValue;
      array[k] = left[i];
      this.createAnimationMergeSort(array, delay);
      delay += this.state.sliderValue;
      this.createColor([], delay, "NONE");
      delay += this.state.sliderValue;
      k++;
      i++;
    }

    while (j < right.length) {
      console.log([j + middle + 1, j + middle + 1]);
      this.createColor([j + middle + 1, j + middle + 1], delay, "COMPARE");
      delay += this.state.sliderValue;
      array[k] = right[j];
      this.createAnimationMergeSort(array, delay);
      delay += this.state.sliderValue;
      this.createColor([], delay, "NONE");
      delay += this.state.sliderValue;
      k++;
      j++;
    }
    return delay;
  };

  mergeSort = (array, l, r, delay) => {
    let newDelay = delay;
    console.log(["merge sort", l, r]);
    if (r > l) {
      let middle = Math.floor((r + l) / 2);
      newDelay = this.mergeSort(array, l, middle, newDelay);
      newDelay = this.mergeSort(array, middle + 1, r, newDelay);
      newDelay = this.merge(array, l, middle, r, newDelay);
    }
    return newDelay;
  };

  mergeSortVisualizer = () => {
    let array = [...this.state.array];
    let delay = this.state.sliderValue;
    let length = array.length;
    this.mergeSort(array, 0, length - 1, delay);
  };

  createAnimationMergeSort = (tempArr, delay) => {
    const array = [...tempArr];
    setTimeout(() => {
      this.setState({ array });
    }, delay);
  };

  createAnimation = (tempArr, indexOne, indexTwo, delay) => {
    // Swapping of elements and setting arr to tempArr
    const temp = tempArr[indexOne];
    tempArr[indexOne] = tempArr[indexTwo];
    tempArr[indexTwo] = temp;
    const array = [...tempArr];
    // console.log(arr);

    setTimeout(() => {
      this.setState({ array });
    }, delay);
  };

  createColor = (tempElements, delay, action) => {
    switch (action) {
      case "SWAP":
        setTimeout(() => {
          this.setState({ swapped: [...tempElements] });
          // setCompareElements([...tempElements]);
        }, delay);
        break;

      // case "DONE":
      //   const newDoneElements = [...tempElements];
      //   setTimeout(() => {
      //     setDoneElements([...newDoneElements]);
      //   }, delay);
      //   break;
      case "COMPARE":
        setTimeout(() => {
          this.setState({ compareElements: [...tempElements] });
          // setCompareElements([...tempElements]);
        }, delay);
        break;
      default:
        setTimeout(() => {
          this.setState({ compareElements: [], swapped: [] });
        }, delay);
    }
  };
  selectChange = (e) => {
    console.log(e.target.value);
    this.setState({ selectValue: e.target.value });
  };

  sliderChange = (e) => {
    console.log(e.target.value);
    this.setState({ sliderValue: parseInt(e.target.value) });
  };

  increase = (size) => {
    // console.log("Working");
    console.log(size);
    // console.log(e.target.value);

    this.setState({ size });

    // this.setState({ size });
  };

  sort = () => {
    if (this.state.selectValue === "Sort Algorithm") {
      alert("Select an algorithm");
    } else if (this.state.selectValue === "Bubble Sort") {
      // console.log("HERE");
      this.bubbleSort();
    } else if (this.state.selectValue === "Selection Sort") {
      this.selectionSort();
    } else if (this.state.selectValue === "Insertion Sort") {
      this.insertionSort();
    } else if (this.state.selectValue === "Merge Sort") {
      this.mergeSortVisualizer();
    }
  };

  // sort = () => {
  //   this.bubbleSortVisual();
  // };

  componentDidMount() {
    this.randomArrayGenerator();
  }
  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    // console.log("Here updated");
    if (this.state.size !== prevState.size) {
      this.randomArrayGenerator();
    }
  }

  render() {
    return (
      <div>
        <Navigation
          randomize={this.randomArrayGenerator}
          increase={this.increase}
          selectChange={this.selectChange}
          sliderChange={this.sliderChange}
          selectValue={this.state.selectValue}
          sliderValue={this.state.sliderValue}
          size={this.state.size}
          sort={this.sort}
        />
        <div className="cont">
          {this.state.array.map((number, index) => (
            <div
              className="data"
              key={index}
              style={{
                height: `${number * 50}px`,
                backgroundColor: this.state.swapped.includes(index)
                  ? "green"
                  : this.state.compareElements.includes(index)
                  ? "red"
                  : "turquoise",
                color: "white",
              }}
            ></div>
          ))}
        </div>
        <div className="play-pause">
          <button className="btn-start-reset" onClick={this.sort}>
            Start
          </button>
          <button className="btn-start-reset">Reset</button>
          <div className="speed-group">
            <label htmlFor="range" id="speed-label">
              Speed:
            </label>
            <input
              type="range"
              id="range"
              min="1"
              max="3000"
              value={this.state.sliderValue}
              onChange={this.sliderChange}
            />
          </div>
        </div>

        {/* <button
          className="btne"
          onClick={() => {
            this.increase();
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            this.mergeSortVisualizer();
          }}
        >
          Sort
        </button> */}
      </div>
    );
  }
}

export default Visualizer;
