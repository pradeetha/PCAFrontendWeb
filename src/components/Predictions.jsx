import React, { useState, useEffect } from "react";

function Predictions() {
  const userData = JSON.parse(localStorage.getItem("userdata"))

  const token = userData.token
  const userId = userData.userId;
  const [devices, setDevices] = useState([]);
  const [deviceData, setdeviceData] = useState({
    name: "",
    type: "",
    serial: "",
    daytime: "",
    nighttime: "",
    offtime: "",
  });

  const url = `/api/v1/DeviceByUserProfileId/${userId}`;
  const urlPredictionApi = `http://50200b0f-ae99-411a-8c7c-6347f560ac2d.eastus.azurecontainer.io/score`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      setDevices(resData.deviceData);
    })
    .catch((error) => {
      window.location.href = '/login';
    });
  }, []);

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title"><b>Device wise Consumption Prediction for the next day</b></h2>
        </div>
        <div className="card-body p-0">
          <table className="table">
            <thead>
              <tr>
                <th>Serial Key</th>
                <th>Device</th>
                <th>Day Time</th>
                <th>Night Time</th>
                <th>Off Time</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device, index) => (
                <tr key={device.deviceId}>
                  <td>{device.deviceSerialKey}</td>
                  <td>{device.applianceName}</td>
                  <td>
                    <span className="badge bg-warning">112</span>
                  </td>
                  <td>
                    <span className="badge bg-danger">180</span>
                  </td>
                  <td>
                    <span className="badge bg-success">53</span>
                  </td>
                  {/* <td>{device.deviceSerialKey}</td>
                  <td>{device.applianceName}</td>
                  <td>{device.deviceType}</td>
                  <td>{device.internalLocation}</td>
                  <td>{device.address}</td>
                  <td>{device.powerThresholdValue}</td> */}
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Predictions;
