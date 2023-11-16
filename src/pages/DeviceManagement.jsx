import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import CustomSlider from "../components/CustomSlider";

const DeviceManagementPage = () => {
  const [devices, setDevices] = useState([]);
  const [newDevice, setNewDevice] = useState({
    name: "",
    type: "",
    serial: "",
    location: "",
    address: "",
    threshold: 999,
  });

  const [sliderValue, setSliderValue] = useState(999); // Initial value

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDevice({ ...newDevice, [name]: value });
  };

  const handleAddDevice = () => {
    setDevices([...devices, newDevice]);
    setNewDevice({
      name: "",
      type: "",
      serial: "",
      location: "",
      address: "",
      threshold: 999,
    });
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Device Management</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Device Management</li>
              </ol>
            </div>
          </div>

          <section className="mt-3">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-outline card-info">
                  <div className="card-header">
                    <h3 className="card-title">Device Information</h3>
                  </div>
                  <div className="card-body">
                    <div>
                      <form>
                        <div className="form-row">
                          <div className="form-group col-md-4">
                            <label htmlFor="deviceType">
                              Device Serial Key:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="deviceSerial"
                              name="serial"
                              value={newDevice.serial}
                              onChange={handleInputChange}
                            />
                          </div>

                          <div className="form-group col-md-4">
                            <label htmlFor="deviceName">Device Name:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="deviceName"
                              name="name"
                              value={newDevice.name}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="deviceType">Device Type:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="deviceType"
                              name="type"
                              value={newDevice.type}
                              onChange={handleInputChange}
                            />
                          </div>

                          <div className="form-group col-md-4">
                            <label htmlFor="deviceType">
                              Internal Location:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="internalLocation"
                              name="location"
                              value={newDevice.location}
                              onChange={handleInputChange}
                            />
                          </div>

                          <div className="form-group col-md-8">
                            <label htmlFor="deviceType">Address:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="address"
                              name="address"
                              value={newDevice.address}
                              onChange={handleInputChange}
                            />
                          </div>

                          <div className="form-group col-md-4">
                            {/* <CustomSlider threshold={newDevice.threshold} onValueChange={handleChildCustomRangeValueChange} /> */}

                            {/* <label htmlFor="deviceType">Power Threshold (Units):</label> */}
                            {/* <input
                              type="text"
                              className="form-control"
                              id="threshold"
                              name="threshold"
                              value={newDevice.threshold}
                              onChange={handleInputChange}
                            />
                            <label for="customRange1">Custom range</label>
                            <input type="range" class="custom-range" id="customRange1"></input> */}

                            <div>
                              <label htmlFor="slider">
                                Power Threshold (Units): {sliderValue}
                              </label>
                              <input
                                className="custom-range"
                                type="range"
                                id="slider"
                                name="slider"
                                min={0}
                                max={999}
                                value={sliderValue}
                                onChange={handleSliderChange}
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleAddDevice}
                        >
                          Add Device
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="card-footer"></div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="mt-4">Device List</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Device Serial Key</th>
                  <th>Device Name</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Address</th>
                  <th>Threshold </th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device, index) => (
                  <tr key={index}>
                    <td>{device.serial}</td>
                    <td>{device.name}</td>
                    <td>{device.type}</td>
                    <td>{device.location}</td>
                    <td>{device.address}</td>
                    <td>{sliderValue}</td>
                    <td>{device.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DeviceManagementPage;
