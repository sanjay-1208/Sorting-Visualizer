import React from 'react'
import "./Navbar.css";

function Navbar({
  handleLength,
  handleSpeed,
  handleAlgo,
  generateRandomArray,
  handleSort,
  sorting,
  completed,
  len,
  speed,
  algo,
}) {
  return (
    <nav>
      <div className="nav-brand">Sorting Visualizer</div>

      <div className="toolbox">
        <div>
           <div className="group speed">
             <label>Speed</label>
            <select onChange={handleSpeed} disabled={sorting} value={Math.ceil(500 / speed)}>
            <option value={1}>1x</option>
            <option value={2}>2x</option>
            <option value={3}>3x</option>
            <option value={4}>4x</option>
            <option value={5}>5x</option>
          </select>
          </div>
          

          <div className="group length">
            <label>Length</label>
            <input
              type="range"
              onChange={handleLength}
              min="5"
              max={30}
              step="1"
              disabled={sorting}
              value={len}
            />
          </div>

          <select onChange={handleAlgo} disabled={sorting} value={algo}>
            <option value="BubbleSort">Bubble Sort</option>
            <option value="SelectionSort">Selection Sort</option>
            <option value="InsertionSort">Insertion Sort</option>
            <option value="MergeSort">Merge Sort</option>
            <option value="QuickSort">Quick Sort</option>
          </select>
        </div>

        <div>
          <button onClick={generateRandomArray} disabled={sorting}>
            New Array
          </button>
          <button onClick={handleSort} disabled={sorting || completed}>
            Sort
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
