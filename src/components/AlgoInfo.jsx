import React from "react";
import "./AlgoInfo.css";

const AlgoInfo = () => {
  let val = "s";
  return (
    <div className="container algo-container">
      <div className="row heading-container">
        <h1 className="col-lg">{val ? "Bubble Sort" : "Select Algorithm"}</h1>
      </div>
      <div className="row">
        <div className="col-lg info-container">
          <p>
            {val
              ? 'Bubble Sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. This simple algorithm performs poorly in real world use and is used primarily as an educational tool.'
              : "You must select an algorithm before you can visualize it's execution on an array of numbers."}
          </p>
        </div>
        <div className="info-separator"></div>
        <div className="col-lg algo-performance">
          <h2>Performance</h2>
          <table>
            <tbody>
              <tr>
                <td>Worst-case time complexity </td>
                <td> &nbsp; &nbsp; &nbsp;</td>
                <td>
                  <code>
                    <span>
                      O(n<sup>2</sup>)
                    </span>
                  </code>
                </td>
              </tr>
              <tr>
                <td>Average time complexity </td>
                <td> &nbsp; &nbsp; &nbsp;</td>
                <td>
                  <code>
                    <span>
                      O(n<sup>2</sup>)
                    </span>
                  </code>
                </td>
              </tr>
              <tr>
                <td>Best-case time complexity </td>
                <td> &nbsp; &nbsp; &nbsp;</td>
                <td>
                  <code>
                    <span>O(n)</span>
                  </code>
                </td>
              </tr>
              <tr>
                <td>Worst-case space complexity </td>
                <td> &nbsp; &nbsp; &nbsp;</td>
                <td>
                  <code>
                    <span>O(1)</span>
                  </code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AlgoInfo;
