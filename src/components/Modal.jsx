import "../App.css"
import startImg from "../assets/icon-star.svg";
import Rating from "./Rating";

export default function Modal() {
  return (
    <section className="modal">
      <span className="circle">
        <img src={startImg} alt="star-icon" />
      </span>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Rating/>
      <button>Submit</button>
    </section>
  );
}
