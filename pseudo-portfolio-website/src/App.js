import React, {useState} from "react";
import Header from "./components/Header";
import About from "./components/About";
import ProjectContainer from "./components/ProjectContainer";
import ProjectList from "./components/ProjectList";
import ContactForm from "./components/ContactForm";
import './App.css';

function App() {

const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={isDarkMode ? "dark" : "light" }>
     <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
     <br />
     <About />
     <br />
     <ProjectContainer />
     <br /><br /><br />
     <ContactForm />
    </div>
  );
}

export default App;
