import { useState } from "react";
// Assets
import logo from "./assets/logo.svg";
import visa from "./assets/visa.svg";
import backgroundImage from "./assets/backgroundImage.png";

const MOCK_DATA = {
  number: "1232222344321732",
  validDate: "8/28",
  cvc: 345,
  zip: 60662,
};

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const lastFourCardNum = () => {
    return MOCK_DATA.number.substring(MOCK_DATA.number.length - 4);
  };

  function addSpacesEveryFourDigits(input) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
      result += input[i];
      // Add a space after every 4th digit, but not after the last digit
      if ((i + 1) % 4 === 0 && i !== input.length - 1) {
        result += " ";
      }
    }
    return result;
  }

  return (
    <main class="min-h-screen mt-10">
      <div class="flex justify-center items-center">
        <div
          className="w-96	h-64 p-4 rounded-lg"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <header className="flex flex-row justify-between mb-4">
            <img src={logo} width="100" height="50" />
            <div className="w-20 bg-white p-1 rounded-full">
              <p className="text-inherit text-center text-base font-medium">
                Virtual
              </p>
            </div>
          </header>

          <div className="mb-8">
            <p className="text-2xl text-white">
              {showDetails
                ? addSpacesEveryFourDigits(MOCK_DATA.number)
                : `**** ${lastFourCardNum()}`}
            </p>
          </div>

          <div className="w-3/6	flex flex-row justify-between mb-4">
            <div>
              <p className="text-xs	text-slate-400">VALID THRU</p>
              <p className="text-lg	font-medium text-white">
                {MOCK_DATA.validDate}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-xs text-slate-400">CVC</p>
              <p className="text-lg	font-medium text-white">
                {showDetails ? MOCK_DATA.cvc : "***"}
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-between mb-4">
            <p className="text-lg	font-medium text-white">ZIP {MOCK_DATA.zip}</p>
            <img src={visa} width="50" height="18" />
          </div>
        </div>
      </div>

      <div className="text-center mt-2">
        <input type="checkbox" onClick={() => setShowDetails(!showDetails)} />
        <label className="ml-1 text-base font-medium"> Show Details</label>
      </div>
    </main>
  );
}

export default App;
