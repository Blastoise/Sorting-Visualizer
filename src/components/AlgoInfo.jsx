import React from "react";
import "./AlgoInfo.css";

const AlgoInfo = (props) => {
  return (
    <div className="container algo-container">
      <div className="row heading-container">
        <h1 className="col-lg">
          {props.algoInfo ? props.algoInfo.name : "Select Algorithm"}
        </h1>
      </div>
      <div className="row">
        <div className="col-lg info-container">
          <p>
            {props.algoInfo
              ? props.algoInfo.description
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
                    {props.algoInfo
                      ? props.algoInfo.performance.worstTime
                      : "-"}
                  </code>
                </td>
              </tr>
              <tr>
                <td>Average time complexity </td>
                <td> &nbsp; &nbsp; &nbsp;</td>
                <td>
                  <code>
                    {props.algoInfo
                      ? props.algoInfo.performance.averageTime
                      : "-"}
                  </code>
                </td>
              </tr>
              <tr>
                <td>Best-case time complexity </td>
                <td> &nbsp; &nbsp; &nbsp;</td>
                <td>
                  <code>
                    {props.algoInfo ? props.algoInfo.performance.bestTime : "-"}
                  </code>
                </td>
              </tr>
              <tr>
                <td>Worst-case space complexity </td>
                <td> &nbsp; &nbsp; &nbsp;</td>
                <td>
                  <code>
                    {props.algoInfo
                      ? props.algoInfo.performance.worstSpace
                      : "-"}
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
