import { DiGit, DiJava, DiJavascript1, DiLinux, DiMysql, DiNodejsSmall, DiPython, DiReact, DiWindows } from 'react-icons/di'
import { SiSass, SiShell, SiTypescript } from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "js", name: 'javascript', icon: <DiJavascript1 /> },
  { id: "react", name: 'react.js', icon: <DiReact /> },
  { id: "java", name: 'java', icon: <DiJava /> },
  { id: "python", name: 'python', icon: <DiPython /> },
  { id: "mysql", name: 'mysql', icon: <DiMysql /> },
  { id: "git", name: 'git', icon: <DiGit /> },
  // { id: "linux", name: 'linux', icon: <DiLinux /> },
  // { id: "windows", name: 'windows', icon: <DiWindows /> },
]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>tech stack</h2>
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
