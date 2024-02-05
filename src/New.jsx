import React, { useState } from "react";
function New() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      setMessage("Enter valid data");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("you are a  healthy weight");
      } else {
        setMessage("overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="New">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label>Height</label>
            <input
              type="text"
              placeholder="Enter Value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <label>Weight</label>
            <input
              type="text"
              placeholder="Enter Value"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn-out" onClick={reload} type="submit">
              <svg
                class="svg-icon"
                fill="none"
                height="20"
                viewBox="0 0 20 20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#ff342b" stroke-linecap="round" stroke-width="1.5">
                  <path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"></path>
                  <path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"></path>
                </g>
              </svg>
              Reset
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi} </h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default New;
