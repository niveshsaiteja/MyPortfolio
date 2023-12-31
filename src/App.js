import Navbar from "./Component/Navbar/Navbar";
import "./App.css"
import Intro from "./Component/Intro/Intro";
import Services from "./Component/Services/Services";
import Experience from "./Component/Experience/Experience";
import Works from "./Component/Works/Works";
import Portfolio from "./Component/Porfolio/Portfolio";
import Testimonial from "./Component/Testimonial/Testimonial";
import Contact from "./Component/Contact/Contact";
import { themeContext } from "./Context";
import { useContext } from "react";
import Footer from "./Component/Footer/Footer";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;    
  return (
    <div className="App"
     style={{
      background : darkMode? 'black':'',
      color : darkMode? 'white' : ''
     }}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
