import { useState } from "react";

import "../styles/components/footer.sass";

function Footer() {
  const [count, setCount] = useState(0)
  return (
    <div className="main-footer">
      <p> &copy;{new Date().getFullYear()} Vittor Dallacqua | Developed with
        <a target="_blank" href="https://reactjs.org/"> React.js </a> and
        <a target="_blank" href="https://sass-lang.com/"> SCSS </a>
      </p>
      <p>You clicked {count} times!</p>
      <button className ="button" onClick={() => setCount(count + 1)}>Easter Egg</button>
    </div>
  );
}

export default Footer;