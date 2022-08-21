import "./CityDetails.css";
import { useState } from "react";

function CityDetails({ cName, cResidents, cStreets, isBeach, cSymbol }) {
  const [city, setCity] = useState({
    cName,
    cResidents,
    cStreets,
    isBeach,
    cSymbol,
  });
  return (
    <div className="city-details">
      <h1>{city.cName}</h1>
      <h4>Number Of Residents:{city.cResidents}</h4>
      <h4>Number Of Streets:{city.cStreets}</h4>
      <h4>{isBeach ? "There is a beach" : "There isn't a beach"}</h4>
      <img height={100} src={cSymbol} alt="city symbol" />
    </div>
  );
}

export default CityDetails;
