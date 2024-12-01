import React from 'react';

import logo from './images/Asset_1.svg';
import Navmenu from './components/Navmenu/Navmenu';
import Techimages from './components/Techimages/Techimages';
//material-ui icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="section_1">
          <nav><img src={logo} alt="ndubscodes.com" /><h1>Portfolio</h1>
            {/* <Navmenu /> */}
          </nav>

          <div className="about_me">
            <div className="credentials">
              <div id="personal">
                <h3>Nick Winkler</h3>
                <p><b>Software Engineer</b></p>
                <p>San Diego, CA</p>
                <p><b>Email:</b> nick.winkler1@gmail.com</p>
              </div>
              <div id="social">
                <p><b>Media</b></p>
                <a href="http://www.github.com/ndubs18"><div className="gitHover"><p>Github</p><img className="git" src={require('./images/GitHub-Mark-64px.png')} alt="github" /></div></a>
                <a href="https://www.linkedin.com/in/nick-winkler-34580872/"><div className="linkedinHover"><p>Linkedin</p><img className="linkdin" src={require('./images/linkd.png')} alt="linkedin" /></div></a>
              </div>
              <div id="experience">
                <p><b>Work Experience</b></p>
                <p>Apple <br /><b style={{ fontSize: ".9rem", fontWeight: "600" }}>Software Developer - Intern</b></p>
                <p>Apple <br /><b style={{ fontSize: ".9rem", fontWeight: "600" }}>Sales Specialist</b></p>
                <p>Providence Health and Services <br /><b style={{ fontSize: ".9rem", fontWeight: "600" }}>IS Support Technician</b></p>
                <p>Open Source Developer<br /> <b style={{ fontSize: ".9rem", fontWeight: "600" }}>Blue Ribbons Review</b></p>
                <p></p>
              </div>
              <div id="education">
                <p><b>Education</b></p>
                <p>Portland State University - <i>Computer Science</i></p>
              </div>
            </div>

            <div className="technical">
              <div className="summary">
                <h2>About Me</h2>
                {/* WEBPACK MAKES US USE REQUIRE WHEN ADDING IMAGES */}
                <img src={require('./images/firefighting.jpg')} alt="fire" />
                <p className="summaryTxt" style={{ fontSize: "1.22rem", lineHeight: "1.75" }}>
                  Hi, my name is Nick and welcome to my portfolio. Over the years I've had the opportunity to explore different avenues of programming through completing my banchelors and personal exploration. Aside from programming I love the outdoors,
                  fitness, reading, and spending time with family and friends. Thanks for stopping by and I look forwared to hearing from you.
                </p>

              </div>
              <div className="skills">
                <h2>Skills</h2>
                <div className="tech">
                  <div><p><b>Languages</b></p>
                    <p>JavaScript, TypeScript, Java, HTML, CSS </p>
                  </div>
                  <div>
                    <p><b>Frameworks and Libraries</b></p>
                    <p>Express, React, Spring</p>
                  </div>
                  <div>
                    <p><b>Additional Technologies</b></p>
                    <p>Node.js, Docker, Kubernetes, Kind, Minikube, Bash</p>
                  </div>
                  <div>
                    <p><b>DBMS</b></p>
                    <p>MySQL, MongoDB, Oracle</p>
                  </div>
                  <div>
                    <p><b>Version Control</b></p>
                    <p>git</p>
                  </div>
                  <div>
                    <p><b>IDE/Text Editors</b></p>
                    <p>Visual Studio Code, Vim, IntelliJ</p>
                  </div>
                </div>
                <Techimages />
              </div>
              {/* <Techimages/> */}
            </div>
          </div>
          <ExpandMoreIcon />
        </section>
        <h1 className="project_header">Projects</h1>
        <section className="section_2">
          <a href="https://tuneshift.onrender.com" target="_blank">
            <div className="projBox">
              <div id="projImgContainer">
                <img src={require('./images/tuneShift.png')} alt="TuneShift" />
              </div>

              <div className="description">

                <h4>TuneShift</h4>
                <i><p>TypeScript, React.js, Node.js, OAuth2.0</p></i>
                <p>Tranfer music bidirectionally between Spotify and Apple Music</p>
              </div>
            </div>
          </a>

          <a href="https://star-memo.vercel.app/" target="_blank">
            <div className="projBox">
              <div id="projImgContainer">
                <img src={require('./images/starMemo.png')} alt="starmemo" />
              </div>

              <div className="description">

                <h4>StarMemo <br></br><span id="worksInChrome"> &#40;works in Google Chrome&#41;</span></h4>
                <i><p>TypeScript, React.js, Node.js, Web Speech APIs</p></i>
                <p>Voice first web app that utilizes the web speech api's speech recognition to interact with an interface and save memos</p>
              </div>
            </div>
          </a>
        </section>
        <footer>&copy; Nick Winkler</footer>
      </header>
    </div>
  );
}

export default App;
