import { AiFillEnvironment } from 'react-icons/ai'
import { HiAcademicCap, HiTranslate } from 'react-icons/hi'
import { ImBooks } from 'react-icons/im'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return <section id="information">
    <div className='info-card'>
      <HiAcademicCap id='cap-icon' />
      <div>
        <h3>Formation</h3>
        <p>High School, Informatics</p>
      </div>
    </div>
    <div className='info-card'>
      <ImBooks id='book-icon' />
      <div>
        <h3>In College</h3>
        <p>Bachelor, Computer Science</p>
      </div>
    </div>
    <div className='info-card'>
      <HiTranslate id='lang-icon' />
      <div>
        <h3>Languages</h3>
        <p>Português / English</p>
      </div>
    </div>
    <div className='info-card'>
      <AiFillEnvironment id='pin-icon' />
      <div>
        <h3>Location</h3>
        <p>Curitiba, Paraná, Brazil</p>
      </div>
    </div>
  </section>
}

export default InformationContainer
