import "../styles/components/footer.sass";

function Footer() {
  return (
    <div className="main-footer">
      <p> &copy;{new Date().getFullYear()} Vittor Dallacqua | Developed in
        <a target="_blank" href="https://reactjs.org/"> React.js </a> and
        <a target="_blank" href="https://sass-lang.com/"> SCSS </a>
      </p>
    </div>
  );
}

export default Footer;