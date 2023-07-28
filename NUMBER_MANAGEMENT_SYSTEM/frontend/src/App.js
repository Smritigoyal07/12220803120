import React, { useState } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
  const [inputUrls, setInputUrls] = useState("");
  const [result, setResult] = useState(null);

  const handleNumbers = async () => {
    try {
      const urlsArray = inputUrls.split(",").map((url) => url.trim());
      const response = await axios.get(
        `http://localhost:8008/numbers?url=${urlsArray.join("&url=")}`
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching numbers:", error);
    }
  };

  return (
    <div class="container">
      <h1 class="h1">Number Management Service</h1> <br />
      <p class="h5">Enter URLs separated by commas:</p> <br />
      <input
        type="text"
        value={inputUrls}
        class="form-control"
        onChange={(e) => setInputUrls(e.target.value)}
      />{" "}
      <br />
      <button class="btn btn-primary" onClick={handleNumbers}>
        Fetch Numbers
      </button>{" "}
      <br />
      <br />
      {result && (
        <div>
          <h2 class="h2">Result</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
