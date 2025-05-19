import { useState } from "react";
import "./App.css";

function App() {
  return (
    <section className="modal">
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <p className="rating">
        <p className="num">1</p>
        <p className="num">2</p>
        <p className="num">3</p>
        <p className="num">4</p>
        <p className="num">5</p>
      </p>
      <button>Submit</button>
    </section>
  );
}

export default App;
