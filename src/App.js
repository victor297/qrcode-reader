// versi "react-qr-reader" 1.0.0. component API harus disesuaikan dengan yg baru

import "./styles.css";
import { useState } from "react";
import QrReader from "react-qr-reader";

const App = () => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="App">
      <h1 className="scanner-text">Hello QRrider</h1>
      <p>Please scan your QRcode below🚓</p>
      {/* <h2>
        Last Scan:
        {selected}
      </h2> */}

      <button
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>
      {startScan && (
        <>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Back Camera</option>
            <option value={"user"}>Front Camera</option>
          </select>
         <div className="QRstyle"> 
         <QrReader 
            facingMode={selected}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            // chooseDeviceId={()=>selected}
            style={{ width: "300px" , boxshadow: "5px 10px #888888"}}
          />
          </div>
        </>
      )}
      {loadingScan && <p>Loading</p>}
      {data !== "" && <p>{data}</p>}
    </div>
  );
};

export default App;
