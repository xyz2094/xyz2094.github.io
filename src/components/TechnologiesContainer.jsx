import {
  DiGitBranch, DiJavascript1, DiMysql,
  DiNodejsSmall, DiReact
} from 'react-icons/di'

import { SiMongodb } from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "js", name: 'JavaScript', icon: <DiJavascript1 /> },
  { id: "react", name: 'React.js', icon: <DiReact /> },
  { id: "node", name: 'Node.js', icon: <DiNodejsSmall /> },
  { id: "git", name: 'Git', icon: <DiGitBranch /> },
  { id: "mysql", name: 'MySQL', icon: <DiMysql /> },
  { id: "mongodb", name: 'MongoDB', icon: <SiMongodb /> },
]


const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Technologies</h2>
      <p>Main technologies I use:</p>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer
