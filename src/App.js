import { useState, useEffect } from "react";
import axios from "axios";
import Map from "./Map";
import "./App.css";

function App() {
  const [ip, setIp] = useState(null);

  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [countryCode, setCountryCode] = useState("");

  // useEffect(() => {

  //   const getIp = async () => {
  //     setLoading(true);

  //     const ip = await axios.get(
  //       `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_FINDER_KEY}`
  //     );
  //     const data = ip.data;
  //     console.log(data);

  //     setIp(data)

  //   };
  //   getIp();
  //   setLoading(false);
  // }, []);

  useEffect(() => {
    const getCode = async () => {
      setLoading(true);

      const code = await axios.get(`https://restcountries.com/v3.1/alpha/de`);
      const codes = code.data;
      console.log(codes);

      setCountryCode(codes);
    };
    getCode();
  }, []);

  // useEffect(() => {

  //   const getCode = async () => {
  //     setLoading(true);

  //     const code = await axios.get(
  //       `https://api.countrylayer.com/v2/de?access_key=168a8d2297b62719c06cbb426d1feff5`
  //     );
  //     const codes = code.data;
  //     console.log(codes);

  //     // setCountryCode(codes)

  //   };
  //   getCode();

  // }, []);

  // for input
  //@ &ipAddress=8.8.8.8

  //  if(isLoading) {
  //   return (
  //     <p className="loader"></p>
  //   )
  //  }

  return (
    <div id="app">
<div className="container text-center container--narrow">
      <h2 >Find <span style={{color: "#ECBDF1"}}>My</span> <span style={{color: "#CE8ED5"}}>IP</span></h2>
      <form style={{ margin: "1rem" }}>
        <input type="text" placeholder="Enter IP Address" />
      </form>
      </div>   
      <div className="container">
      
      <div class="split">
      <div className="text-container">
            {/* conditional rendering */}
            <h3>Your IP: {ip && ip.ip}</h3>
            {/* <img
            scr={countryCode && countryCode[0].flags.png}
            alt={countryCode && countryCode[0].name.common}
          /> */}
            {/* as a fallback if image doesn't show */}
            <h4>
              Country:{" "}
              {countryCode &&
                `${countryCode[0].name.common} ${countryCode[0].flag}`}
            </h4>
            <h4>Capital: {countryCode && countryCode[0].capital}</h4>
            <h5>Continent: {countryCode && countryCode[0].continents[0]}</h5>
            <h5>
              Population:{" "}
              {countryCode &&
                countryCode[0].population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h5>
          </div>
          <div className="map-container">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
