import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './components/styles.css';
import Navbar from './components/Navbar';
import ProjectsContainer from './components/ProjectContainer';
import ThemeContext from './components/ThemeContext';
import { applyTheme } from './components/ApplyTheme';

let toggleTheme;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleNavLinkClick = () => {
    applyTheme(isDarkMode);
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
        <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
          <Navbar />
          <NavLink to="/" exact onClick={handleNavLinkClick} activeClassName="active-link">
            HOME
          </NavLink>
          <NavLink to="/projects" onClick={handleNavLinkClick} activeClassName="active-link">
            PROJECTS
          </NavLink>
          {/* Other NavLink components */}
          <Route path="/projects">
            <ProjectsContainer />
          </Route>
          <footer>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
          </footer>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export { toggleTheme };
export default App;
