import numeral from "numeral";
import React from "react";
import "./Countrydetails.css";

function CountryDetails({ data }) {
  const dataAray = Object.entries(data);
  console.log("data >>>>",data)
  delete dataAray[2];
  return (
    <div className="CountryDetails">
      {dataAray.map((dat) => (
        // numeral(countryInfo.cases).format("0.0a")
        // <p><strong>{dat[0]}:</strong> {numeral(dat[1]).format("0.0a")}</p>
        <tr>
          <td>{dat[0]}</td>
          <td>
            {typeof dat[1] === "number" ? (
              <strong>{numeral(dat[1]).format("0,0")}</strong>
            ) : (
              <strong>{dat[1]}</strong>
            )}
          </td>
        </tr>
      ))}
    </div>
  );
}

export default CountryDetails;
