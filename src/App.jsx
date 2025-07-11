import Footer from "./components/Footer";
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>Vittor M. D. Longati </h1>
      <Sidebar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
