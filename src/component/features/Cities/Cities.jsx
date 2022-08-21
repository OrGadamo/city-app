import "./Cities.css";
import CitiesTable from "../CitiesTable/CitiesTable";
import CityDetails from "../CityDetails/CityDetails";
import { useState } from "react";
function Cities() {
  const [toggle, setToggle] = useState(true);
  const myCities = [
    {
      cName: "Madrid",
      cResidents: 4,
      cStreets: 10,
      isBeach: true,
      cSymbol: `https://www.yourfamilyinmadrid.com/wp-content/uploads/2016/10/escudo-madrid-478x570-252x300.jpg`,
    },
    {
      cName: "Bucharest",
      cResidents: 20,
      cStreets: 4,
      isBeach: false,
      cSymbol: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Coat_of_arms_of_Bucharest.svg/1200px-Coat_of_arms_of_Bucharest.svg.png`,
    },
    {
      cName: "San Francisco",
      cResidents: 10,
      cStreets: 22,
      isBeach: false,
      cSymbol: `https://thumbs.dreamstime.com/z/san-francisco-symbol-golden-gate-bridge-stamp-70937856.jpg`,
    },
    {
      cName: "LA",
      cResidents: 12,
      cStreets: 23,
      isBeach: true,
      cSymbol: `https://flyclipart.com/thumb2/los-angeles-logo-los-angeles-symbol-meaning-history-and-evolution-708777.png`,
    },
    {
      cName: "NY",
      cResidents: 16,
      cStreets: 101,
      isBeach: true,
      cSymbol: `https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Seal_of_New_York_%28state%29.svg/1200px-Seal_of_New_York_%28state%29.svg.png`,
    },
  ];
  const displayComponentByToggle = () => {
    return toggle ? displayCitiesDetails() : displayCitiesTable();
  };
  const displayCitiesTable = () => <CitiesTable citiesArray={myCities} />;
  const displayCitiesDetails = () =>
    myCities.map((city) => (
      <CityDetails
        cName={city.cName}
        cResidents={city.cResidents}
        cStreets={city.cStreets}
        isBeach={city.isBeach}
        cSymbol={city.cSymbol}
      />
    ));
  return (
    <div className="cities">
      {displayComponentByToggle()}
      <button onClick={() => setToggle(!toggle)}>Change display</button>
    </div>
  );
}

export default Cities;
