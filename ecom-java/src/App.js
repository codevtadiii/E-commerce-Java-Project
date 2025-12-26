
import './App.css';
import Navigation from "./customer/components/Navigation/Navigation.js";
import HomePage from "./customer/pages/HomePage/HomePage.js";


function App() {
  return (
    <div>
      <div className=" ">
        <Navigation/>
      </div>
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
