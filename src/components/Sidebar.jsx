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
      <a target="_blank" href="curriculum-07-2025.pdf" className="btn">
        > my cv
      </a>
      <InformationContainer />
    </aside >
  )
}

export default Sidebar
