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
      <a target="_blank" href="/assets/resume.pdf" className="btn">
        > resume
      </a>
      <InformationContainer />
    </aside >
  )
}

export default Sidebar
