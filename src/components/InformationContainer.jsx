import { AiFillEnvironment } from 'react-icons/ai'
import { HiAcademicCap, HiTranslate } from 'react-icons/hi'
import { ImBooks } from 'react-icons/im'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
  return <section id="information">
    <div className='info-card'>
      <HiAcademicCap id='cap-icon' />
      <div>
        <h3>Formação</h3>
        <p>Técnico em Informática</p>
      </div>
    </div>
    <div className='info-card'>
      <ImBooks id='book-icon' />
      <div>
        <h3>Ensino Superior (Em andamento)</h3>
        <p>Análise e Desenvolvimento de Sistemas</p>
      </div>
    </div>
    <div className='info-card'>
      <HiTranslate id='lang-icon' />
      <div>
        <h3>Línguas</h3>
        <p>Português / Inglês</p>
      </div>
    </div>
    <div className='info-card'>
      <AiFillEnvironment id='pin-icon' />
      <div>
        <h3>Localização</h3>
        <p>Curitiba/PR</p>
      </div>
    </div>
  </section>
}

export default InformationContainer
