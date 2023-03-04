import Avatar from '../img/vittor.png'

import SocialNetworkContainer from './SocialNetworkContainer'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Vittor Dallacqua" />
      <p className="title">Software Developer</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a target="_blank" href="resume.pdf" className="btn">
        My resume
      </a>
    </aside>
  )
}

export default Sidebar