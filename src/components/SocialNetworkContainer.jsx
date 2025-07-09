import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import '../styles/components/socialnetworkcontainer.sass'

const socialNetworks = [
  { name: 'linkedin', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/vdallacqua/' },
  { name: 'github', icon: <FaGithub />, link: 'https://github.com/xyz2094' },
  { name: 'instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/kojimawhore' },
  { name: 'twitter', icon: <FaTwitter />, link: 'https://www.twitter.com/kojimawhore' },
]

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a target="_blank" href={network.link} className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))
      }
    </section >
  )
}

export default SocialNetworkContainer
