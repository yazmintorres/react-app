import React from "react";

export default function Message(props) {
 
  return (
    <>
      <p>Message: too high or too low</p>
      <div id="container">
        <div className="user-cards">
          <p>Guess Number</p>
          <form>
            <input type="text"></input>
            <button id="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="user-cards">
          <p>Chances Left</p>
          <div id="chances">5</div>
        </div>
      </div>
    </>
  );
}
