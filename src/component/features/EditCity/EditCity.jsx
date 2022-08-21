import "./EditCity.css";
import { useState } from "react";

function EditCity({ _cName, _cResidents, _cStreets, _isBeach, _cSymbol }) {
  const [cityObj, setCityObj] = useState({
    cName: { value: _cName, isChanged: false },
    cResidents: { value: _cResidents, isChanged: false },
    cSymbol: { value: _cSymbol, isChanged: false },
    cStreets: { value: _cStreets, isChanged: false },
    isBeach: { value: _isBeach, isChanged: false },
  });
  const changeStateByInput = (e, key) => {
    cityObj[key].value = e.target.value;
    cityObj[key].isChanged = true;
    let newObj = { ...cityObj };
    setCityObj(newObj);
  };
  const setCityState = (e) => {
    e.preventDefault();
    let isEmpty = false;
    for (let key in cityObj) {
      if (cityObj[key].value === "") isEmpty = true;
    }
    if (!isEmpty) {
      let newObj = { ...cityObj };
      setCityObj(newObj);
      alert("changes has been saved successfully");
    } else {
      alert("all detail must be full");
    }
  };
  return (
    <div className="edit-city">
      <h1>EditCity</h1>
      <form onSubmit={setCityState}>
        <div>
          <input
            onChange={(e) => changeStateByInput(e, "cName")}
            type="text"
            defaultValue={cityObj.cName.value}
          />
          <span>{cityObj.cName.isChanged ? "value has been changed" : ""}</span>
        </div>
        <div>
          <input
            onChange={(e) => changeStateByInput(e, "cResidents")}
            type="number"
            defaultValue={cityObj.cResidents.value}
          />
          <span>
            {cityObj.cResidents.isChanged ? "value has been changed" : ""}
          </span>
        </div>
        <div>
          <input
            onChange={(e) => changeStateByInput(e, "cStreets")}
            type="number"
            defaultValue={cityObj.cStreets.value}
          />
          <span>
            {cityObj.cStreets.isChanged ? "value has been changed" : ""}
          </span>
        </div>
        <div>
          <input
            onChange={(e) => changeStateByInput(e, "isBeach")}
            type="checkbox"
            checked={cityObj.isBeach.value}
            id="beach"
          />
          <label htmlFor="beach">There is a beach in the city</label>
          <span>
            {cityObj.isBeach.isChanged ? "value has been changed" : ""}
          </span>
        </div>
        <div>
          <input
            onChange={(e) => changeStateByInput(e, "cSymbol")}
            type="text"
            defaultValue={cityObj.cSymbol.value}
          />
          <span>
            {cityObj.cSymbol.isChanged ? "value has been changed" : ""}
          </span>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditCity;
