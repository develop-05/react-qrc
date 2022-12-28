import {useState} from 'react';
import QRCode from 'react-qr-code';


const App = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="container">
        <h1>QR-code</h1>

        <input
          onChange={e => setInputValue(e.target.value)}
          type="text"
          placeholder="input href for QR Code"
          className="input__qrcode"
        />

        <QRCode
          className="fa-qrcode"
          value={inputValue}
        />
      </div>
    </>
    );
}

export default App;
