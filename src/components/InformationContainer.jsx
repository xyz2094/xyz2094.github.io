import { AiFillEnvironment } from 'react-icons/ai'
import { HiAcademicCap, HiTranslate } from 'react-icons/hi'
import { ImBooks } from 'react-icons/im'
import { GiPointySword } from "react-icons/gi";

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return <section id="information">
    <div className='info-card'>
      <HiAcademicCap id='cap-icon' />
      <div>
        <br></br>
        <h3>formation</h3>
        <p>inf. technology @ pucpr</p>
      </div>
    </div>
    <div className='info-card'>
      <ImBooks id='book-icon' />
      <div>
        <h3>current</h3>
        <p>computer science @ up</p>
      </div>
    </div>
    <div className='info-card'>
      <GiPointySword id='sword-icon' />
      <div>
        <h3>current</h3>
        <p>cx intern @ electrolux</p>
      </div>
    </div>
    <div className='info-card'>
      <HiTranslate id='lang-icon' />
      <div>
        <h3>languages</h3>
        <p>pt ~ en</p>
      </div>
    </div>
    <div className='info-card'>
      <AiFillEnvironment id='pin-icon' />
      <div>
        <h3>location</h3>
        <p>curitiba, brazil</p>
      </div>
    </div>
  </section>
}

export default InformationContainer
