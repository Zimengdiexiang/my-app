import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MyComponent from "./pages/index.tsx";
// import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyComponent />} />
      </Routes> 
    </Router>
  );
}

export default App;
