import datas from './data.json'
import './App.css';
import  Button  from './Components/Button';
import { useState } from "react";





function App() {

  const[buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="App">
      <h1>Sportok</h1>
      {datas && datas.map(data =>{
        return(
         <div className="container">
          <div className="row ">
            <div className="card col-lg-1" key={data.id}>
              <img className="image" src={data.images}></img>
              <br></br>
              <div className="name">
                <main>
                {data.name}
                
                <br></br>
                  <button onClick={() => setButtonPopup(true)}>Bovebben</button>
                </main>  
                  <Button trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3>erfuigwe</h3>
                  </Button>  
              
              </div>
              
              </div>
            </div>
          </div>
         
        )
      })}
    </div>
  );
}

export default App;
