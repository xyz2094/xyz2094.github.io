import { useState } from "react";

import "../styles/components/footer.sass";

function Footer() {
  const [count, setCount] = useState(0)
  return (
    <div className="main-footer">
      <p> vittor dallacqua &copy; {new Date().getFullYear()} </p>
      <p className="easter-egg">you clicked {count} times xD</p>
      <button className="easter-egg" onClick={() => setCount(count + 1)}> easter egg</button>
    </div>
  );
}

export default Footer;
