import React from 'react';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="section_1">
          <nav><img src={require('./images/Asset_1.svg')} alt="Ndubscodes" ></img> <h1>Portfolio</h1>
          </nav>

          <div className="about_me">

            <div className="credentials">
              <div id="personal">
                <h3 style={{margin: 0}}>Nick Winkler</h3>
                <p><b>Software Developer</b></p>
                <p>Portland, Oregon</p>
                <p><b>Phone:</b> 503-816-8132</p>
                <p><b>Email:</b> nick.winkler1@gmail.com</p>
              </div>
              <div id="social">
                <p><b>Links</b></p>
                <div className="gitHover"><p>Github</p><img className="git" src={require('./images/GitHub-Mark-64px.png')}/></div>
                <div className="linkedinHover"><p>Linkedin</p><img className="linkdin" src={require('./images/linkd.png')}/></div>
              </div>
              <div id="experience">
                <p><b>Work Experience</b></p>
                <p>Work1</p>
                <p>Work2</p>
                <p>Work3</p>
              </div>
              <div id="education">
                <p><b>Education</b></p>
                <p>Portland State University</p>
                <p>University of Oregon</p>
                <p>The Tech Academy</p>
              </div>
            </div>

            <div className="technical">
              <div className="summary">
                <h2>About Me</h2>
                {/* WEBPACK MAKES US USE REQUIRE WHEN ADDING IMAGES */}
                <img src={require('./images/firefighting.jpg')} alt="fire"/>
                <p>Hi, my name is Nick and I love to tinker with things. It all started back
                  when I was 12 years old and I built my first computer; I saw the boot
                  screen appear and I was hooked. When it comes to code, I have 3
                  years of combined experience. Whether that would be at university or
                  on my own, it's played a primary role in feeding my sponge of a brain
                  that loves to build and learn new things. Aside from tinkering, I'm also
                  known to be a leader, hard worker, and goal oriented. I mean ask
                  yourself: how many developers do you know that are also firefighters?
                  I'm someone that's consistently challenging social norms, especially
                  the idea of a single passion defining a person and how they're viewed in society today.</p>
                
              </div>
              <div className="skills">
                <h2>Skills</h2>
                <div className="tech">
                  <div><p><b>Languages</b></p>
                  <p>JavaScript, C++, Java, HTML, CSS</p>
                  </div>
                  <div>
                    <p><b>Dev tools</b></p>
                    <p>Node.js, Webpack, Babel, SASS, Rest APIs</p>
                    </div>
                  <div>
                    <p><b>Frameworks and Libraries</b></p>
                    <p>React.js, Express.js Handlebars, Mongoose, Bootstrap</p>
                    </div>
                  <div>
                    <p><b>RDBMS/non-RDBMS</b></p>
                    <p>MySQL, MongoDB</p>
                    </div>
                  <div>
                    <p><b>Version Control</b></p>
                    <p>git, Microsoft TFS</p>
                  </div>
                  <div>
                    <p><b>IDE/Text Editors</b></p>
                    <p>Visual Studio, Visual Studio Code, IntelliJ</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>
        <h1 className="project_header">Projects</h1>
        <section className="section_2">
          <div>Project</div>
          <div>Project</div>
          <div>Project</div>
          <div>Project</div>
        </section>
      </header>
    </div>
  );
}

export default App;
