import Avatar from '../img/pfp.jpg'

import SocialNetworkContainer from './SocialNetworkContainer'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Vittor Dallacqua" />
      <p className="title">full-stack dev</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a target="_blank" href="cv-def.pdf" className="btn">
        > my cv
      </a>
    </aside >
  )
}

export default Sidebar