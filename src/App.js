import Navbar from "./Component/Navbar/Navbar";
import "./App.css"
import Intro from "./Component/Intro/Intro";
import Services from "./Component/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
