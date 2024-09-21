import React, { useState, useEffect } from "react";
import { SiCounterstrike } from "react-icons/si";

const Counter = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count value: ", count);

    if (showCounter) {
      document.title = `You clicked ${count} times`;
    } else {
      document.title = "Counter Hidden";
    }

    setSecondCounter(firstCounter * 2);
  }, [showCounter, count, firstCounter]);

  const incrementFirstCounter = () => {
    setFirstCounter(firstCounter + 1);
    setCount(count + 1);
  };

  const decrementFirstCounter = () => {
    setFirstCounter(firstCounter - 1);
    setCount(count - 1);
  };

  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  return (
    <div>
      <div>
        <button onClick={toggleCounter}>
          {showCounter ? "Hide Counter" : "Show Counter"}
        </button>
      </div>

      {showCounter && (
        <div>
          <div>
            <h3>
              {" "}
              <SiCounterstrike />:{firstCounter}
            </h3>
            <button onClick={decrementFirstCounter}>-1</button>
            <button onClick={incrementFirstCounter}>+1</button>
          </div>

          <div>
            <h3>
              <SiCounterstrike /> <SiCounterstrike />: {secondCounter}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Counter;
