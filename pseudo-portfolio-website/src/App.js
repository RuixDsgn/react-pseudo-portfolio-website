import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="navbar-div">
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
          </nav>
        </div>
        <div>
            <h2>Welcome to my Portfolio Website 👋🏻</h2>
        </div>
      </header>
      <section id="about">
        <div>
          <h3>About me:</h3>
          <img src="https://png.pngtree.com/png-clipart/20220130/original/pngtree-original-cartoon-yellow-man-asian-girl-middle-long-hair-design-avatar-png-image_7247566.png" alt="" />
          <p id="about-me">Hey! My name is <strong>Rui</strong>. I am a professional <em>Software Engineer</em> 👩🏻‍💻. I am passionate about bringing meaningful digital experiences to life. I love to play video games 🎮 , play with my dog 🐶, and eat good food! 🍱</p>
        </div>
      </section>
      <section id="projects">
          <h3>Projects:</h3>
          <div id="project-title">
             <img src="" alt="" />
             <p></p>
          </div>
      </section>
      <section id="blog">
          <h3>Check out my recent blog posts ✨</h3>
          <div id="blog-post">
              <img src="" alt="" />
              <p></p>
          </div>
      </section>
      <footer>
          <div id="form-div">
              <form>
                <label htmlFor="fname">First Name: </label>
                <input type="text" placeholder="enter first name here"/><br /><br />
                <label htmlFor="lname">Last Name: </label>
                <input type="text" placeholder="enter last name here"/><br /><br />
                <label htmlFor="email" >Email: </label>
                <input type="text" placeholder="enter email here" /><br /><br />
                <input type="checkbox" />
                <label htmlFor="subscribe">  Subscribe to newsletter?</label><br /><br />
                <input type="submit" />
              </form>
          </div>
      </footer>
    </div>
  );
}

export default App;
