import Avatar from '../img/pfp.jpg'

import SocialNetworkContainer from './SocialNetworkContainer'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Vittor Dallacqua" />
      <p className="title">compsci ug @ up</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a target="_blank" href="cv1.pdf" className="btn">
        > my cv
      </a>
    </aside>
  )
}

export default Sidebar