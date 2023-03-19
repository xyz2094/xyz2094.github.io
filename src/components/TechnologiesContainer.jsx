import { DiMysql, DiNodejsSmall, DiPython, DiReact } from 'react-icons/di'
import { SiSass, SiTypescript } from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  // { id: "js", name: 'JavaScript', icon: <DiJavascript1 /> },
  { id: "react", name: 'React.js', icon: <DiReact /> },
  // { id: "ruby", name: 'Ruby On Rails', icon: <SiRubyonrails /> },
  { id: "ts", name: 'TypeScript', icon: <SiTypescript /> },
  { id: "sass", name: 'Sass', icon: <SiSass /> },
  { id: "python", name: 'Python', icon: <DiPython /> },
  { id: "node", name: 'Node.js', icon: <DiNodejsSmall /> },
  // { id: "linux", name: 'Linux', icon: <DiLinux /> },
  { id: "mysql", name: 'MySQL', icon: <DiMysql /> },
  // { id: "mongodb", name: 'MongoDB', icon: <SiMongodb /> },
  // { id: "git", name: 'Git', icon: <DiGitBranch /> },
]


const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Technologies</h2>
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
