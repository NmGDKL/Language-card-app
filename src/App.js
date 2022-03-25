
import './App.css';
import Card from './components/card/Card';
import { categories } from "./helper/data";
import logo from "./assets/react.svg";

function App() {
return (
  <>
    <div className='logo-div'>
      <img className='logo' src={logo} alt="" />
    </div>
    <div className='main-container'>
      <h1 className='header'>Languages</h1>
      {categories.map(card=>{
        const {name, img, options} = card;
        return(
            <Card cardName={name} cardImg={img} cardOptions={options}/>
        )})
      }
    </div>
  </>
)
}

export default App;
