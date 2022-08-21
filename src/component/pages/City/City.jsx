import "./City.css";
import CityDetails from "../../features/CityDetails/CityDetails";
import Cities from "../../features/Cities/Cities";
import AddCity from "../../features/AddCity/AddCity";
import EditCity from "../../features/EditCity/EditCity";
import { useState } from "react";
function City() {
  const [toggles, setToggles] = useState([false, false, false, false]);
  const changeComponentDisplay = (index) => {
    toggles[index] = !toggles[index];
    setToggles([...toggles]);
  };
  return (
    <div className="city">
      {toggles[0] ? (
        <CityDetails
          cName="Rehovot"
          cResidents={2}
          cStreets={100}
          isBeach={false}
          cSymbol={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Rehovot_COA.svg/1200px-Rehovot_COA.svg.png`}
        />
      ) : (
        ""
      )}
      <button onClick={() => changeComponentDisplay(0)}>
        Show/Delete city details
      </button>
      {toggles[1] ? <Cities /> : ""}
      <button onClick={() => changeComponentDisplay(1)}>
        Show/Delete cities list
      </button>
      {toggles[2] ? <AddCity /> : ""}

      <button onClick={() => changeComponentDisplay(2)}>
        Show/Delete add city
      </button>
      {toggles[3] ? (
        <EditCity
          _cName="Rehovot"
          _cResidents={10}
          _cStreets={1}
          _isBeach={true}
          _cSymbol="picUrl"
        />
      ) : (
        ""
      )}

      <button onClick={() => changeComponentDisplay(3)}>
        Show/Delete edit city
      </button>
    </div>
  );
}

export default City;
