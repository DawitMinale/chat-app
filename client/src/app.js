import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./components/join/Join";
import Chat from "./components/chat/Chat";
import "./App.css"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
