import Navbar from "./components/NavBar/navbar";
import Intro from "./components/NavBar/Intro/intro";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/project"
import Contact from "./components/Contacts/contact"
import Footer from "./components/Footer/footer"
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills />
     <Projects />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
