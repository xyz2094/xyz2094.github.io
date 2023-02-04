import Avatar from '../img/vittor.png'

import SocialNetworkContainer from './SocialNetworkContainer'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Vittor Dallacqua" />
      <p className="title">Desenvolvedor Web</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a target="_blank" href="cv.pdf" className="btn">
        Meu Currículo
      </a>
    </aside>
  )
}


export default Sidebar