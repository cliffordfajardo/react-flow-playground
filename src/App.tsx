import React from "react";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Simple1 } from "./examples/Simple1";
import { CustomNodeExample1 } from "./examples/CustomNode1";
import { DeviceConnectionsExample } from "./examples/DeviceConnectionView";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <div>
            <Link to="/example1">Example 1</Link>
            <br />
            <Link to="/example2">Example 2</Link>
            <br />
            <Link to="/example3">Example 3</Link>
          </div>
          <Routes>
            <Route path="example1" element={<Simple1 />} />
            <Route path="example2" element={<CustomNodeExample1 />} />
            <Route path="example3" element={<DeviceConnectionsExample />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
