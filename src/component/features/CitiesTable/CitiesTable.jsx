import "./CitiesTable.css";
import React from "react";

function CitiesTable({ citiesArray }) {
  return (
    <div className="cities-table">
      <table>
        <thead>
          <tr>
            <td>City Name</td>
            <td>Number Of Residents</td>
            <td>Number Of Streets</td>
            <td>Beach</td>
            <td>Symbol</td>
          </tr>
        </thead>
        <tbody>
          {citiesArray.map((city) => {
            return (
              <tr>
                <td>{city.cName}</td>
                <td>{city.cResidents}</td>
                <td>{city.cStreets}</td>
                <td>{city.isBeach ? "Yes" : "No"}</td>
                <td>
                  <img height={100} src={city.cSymbol} alt="" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CitiesTable;
