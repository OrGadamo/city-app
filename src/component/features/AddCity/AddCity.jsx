import "./AddCity.css";
import { useState } from "react";
function AddCity() {
  const [cityObj, setCityObj] = useState({
    cName: "",
    cResidents: 0,
    cStreets: 0,
    isBeach: true,
    cSymbol: "",
  });
  const changeStateByInput = (e, key) => {
    cityObj[key] = e.target.value;
    let newObj = { ...cityObj };
    setCityObj(newObj);
  };
  const setStateByForm = (e) => {
    e.preventDefault();
    let newObj = { ...cityObj };
    setCityObj(newObj);
    console.log(cityObj);
  };
  return (
    <div className="add-city">
      <h1>AddCity</h1>
      <form onSubmit={setStateByForm}>
        <input
          onChange={(e) => changeStateByInput(e, "cName")}
          type="text"
          placeholder="Enter City Name"
        />
        <input
          onChange={(e) => changeStateByInput(e, "cResidents")}
          type="number"
          placeholder="Enter Number of residents"
        />
        <input
          onChange={(e) => changeStateByInput(e, "cStreets")}
          type="number"
          placeholder="Enter number of streets"
        />
        <input
          onChange={(e) => changeStateByInput(e, "isBeach")}
          type="checkbox"
          id="beach"
        />
        <label htmlFor="beach">There is a beach in the city</label>
        <input
          onChange={(e) => changeStateByInput(e, "cSymbol")}
          type="text"
          placeholder="Enter city symbol url"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddCity;
