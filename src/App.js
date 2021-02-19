import './App.css';
import Header from "./Header";
import Form from "./Form";


export default function WeatherApp() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div>
            <Header />
          </div>
          <br />
          <Form />
          <br />
          <div class="row weekly-weather" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}


//export default App;

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          Hello From React
        </h1>
        <Weather city="Italy" />
      </header>
    </div>
  );
}*/