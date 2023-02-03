import "../styles/components/footer.sass";

function Footer() {
  return (
    <div className="main-footer">
      <p> &copy;{new Date().getFullYear()} Vittor Dallacqua | Desenvolvido em
        <a1 target="_blank" href="https://reactjs.org/"> React.js </a1> e
        <a2 target="_blank" href="https://sass-lang.com/"> SCSS </a2>
      </p>
    </div>
  );
}

export default Footer;