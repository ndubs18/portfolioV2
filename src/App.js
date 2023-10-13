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
                <p><b>Software Developer</b></p>
                <p>Portland, Oregon</p>
                <p><b>Phone:</b> 503-816-8132</p>
                <p><b>Email:</b> nick.winkler1@gmail.com</p>
              </div>
              <div id="social">
                <p><b>Media</b></p>
                <a href="http://www.github.com/ndubs18"><div className="gitHover"><p>Github</p><img className="git" src={require('./images/GitHub-Mark-64px.png')} alt="github"/></div></a>
                <a href="https://www.linkedin.com/in/nick-winkler-34580872/"><div className="linkedinHover"><p>Linkedin</p><img className="linkdin" src={require('./images/linkd.png')} alt="linkedin"/></div></a>
              </div>
              <div id="experience">
                <p><b>Work Experience</b></p>
                <p>Apple <br/><b style={{fontSize:".9rem"}}>Specialist</b></p>
                <p>Providence Health and Services <br/><b style={{fontSize: ".9rem"}}>IS Support Technician</b></p>
                <p>Dust Busters <br/><b style={{fontSize: ".9rem", fontWeight: "900"}}>Wildland Firefighter</b></p>
                <p>Open Source <br/> <b style={{fontSize: ".9rem"}}>Blue Ribbons Review</b></p>
                <p></p>
              </div>
              <div id="education">
                <p><b>Education</b></p>
                <p>Portland State University</p>
                <p>The Tech Academy</p>
              </div>
            </div>

            <div className="technical">
              <div className="summary">
                <h2>About Me</h2>
                {/* WEBPACK MAKES US USE REQUIRE WHEN ADDING IMAGES */}
                <img src={require('./images/firefighting.jpg')} alt="fire"/>
                <p className="summaryTxt" style={{fontSize: "1.22rem", lineHeight: "1.75"}}>
                Hi, my name is Nick and I love to tinker with things.
                I’m currently a student studying Computer Science at Portland State University. 
                Originally I'm a self taught web developer, however, over the years and though curriculum I've been able to touch
                other areas of CS as well as keep up with modern web technologies and trends. Aside from programming I love the outdoors,
                fitness, reading, and spending time with family and friends. Thanks for stopping by!
                </p>
                
              </div>
              <div className="skills">
                <h2>Skills</h2>
                <div className="tech">
                  <div><p><b>Languages</b></p>
                  <p>JavaScript, C++, Java, HTML, CSS, Node.js (runtime)</p>
                  </div>
                  <div>
                    <p><b>Dev tools</b></p>
                    <p>Webpack, Babel, SASS, Rest APIs</p>
                    </div>
                  <div>
                    <p><b>Frameworks and Libraries</b></p>
                    <p>React.js, Express.js, Handlebars, Mongoose, Bootstrap</p>
                    </div>
                  <div>
                    <p><b>RDBMS/non-RDBMS</b></p>
                    <p>MySQL, MongoDB</p>
                    </div>
                  <div>
                    <p><b>Version Control</b></p>
                    <p>git</p>
                  </div>
                  <div>
                    <p><b>IDE/Text Editors</b></p>
                    <p>Visual Studio, Visual Studio Code, Vim, IntelliJ</p>
                  </div>
                </div>
                <Techimages/>
                </div>
              {/* <Techimages/> */}
            </div>
          </div>
          <ExpandMoreIcon/>
        </section>
        <h1 className="project_header">Projects</h1>
        <section className="section_2">
        <a className="projBox_hover" href="http://ndubscodes.com/digitalMarketing" target="_blank">
          <div className="projBox">
            <div>
            <img src={require('./images/digital.jpg')} alt="digital"/>
            </div>

            <div className="description">
            <ul>
              <h4>WebAgency</h4>
              <li>HTML5, CSS3, JavaScript</li>
              <li>Node.js</li>
              <li>Bootstrap - used on cards</li>
            </ul>
            </div>
          </div>
          </a>
        
        < a href="https://github.com/ndubs18/food2fork" target="_blank">
          <div className="projBox">
            <div>
            <img src={require('./images/food2fork.jpg')}alt="foodtoFork"/>
            </div>
            <div className="description">
            
            <ul>
              <h4>food2fork</h4>
              <li>HTML5, CSS3, JavaScript</li>
              <li>Node.js</li>
              <li>Webpack & Babel</li>
            </ul>
              
            </div>
          </div>
          </ a>

          <a href="https://afternoon-oasis-85715.herokuapp.com/" target="_blank">
          <div className="projBox">
            <div>
            <img src={require('./images/laptopStore.jpg')}alt="laptopstore"/>
            </div>

            <div className="description">
            
            <ul>
              <h4>budgetApp</h4>
              <li>HTML5, CSS3, JavaScript</li>
              <li>ES5 module pattern</li>
              <li><span style={{color:"transparent"}}>hello</span></li>
            </ul>
            </div>
          </div>
          </a>


          <a href="https://github.com/ndubs18/NBA-STATS-461P" target="_blank">
          <div className="projBox">
            <div>
            <img src={require('./images/nbaStats.png')}alt="laptopstore"/>
            </div>

            <div className="description">
            
            <ul>
              <h4>NBA Stats</h4>
              <li>HTML5, CSS3, JavaScript</li>
              <li>ES5 module pattern</li>
              <li><span style={{color:"transparent"}}>hello</span></li>
            </ul>
            </div>
          </div>
          </a>
          {/* <a href="http://ndubscodes.com/sandovals_new" target="_blank">
          <div className="projBox">
            <div>
            <img src={require('')} alt="sandovals"/>
            </div>
            <div className="description">

            
            <ul>
            <h4>laptopStore</h4>
              <li>HTML5, CSS3, JavaScript</li>
              <li>Node.js</li>
              <li><span style={{color:"transparent"}}>hello</span></li>
            </ul>
            </div>
          </div>
          </a> */}
          
        </section>
        <footer>&copy; Nick Winkler</footer>
      </header>
    </div>
  );
}

export default App;
