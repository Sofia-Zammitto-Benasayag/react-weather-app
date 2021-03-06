import App from "./App.css"
import Weather from "./Weather"


export default function WeatherApp() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="California"/>    
      <footer>Check out the <a href="https://github.com/Sofia-Zammitto-Benasayag/react-weather-app">GitHub repository.</a></footer>
      </div>
    </div>
  );
}


