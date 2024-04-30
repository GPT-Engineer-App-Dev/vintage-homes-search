import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Search from './pages/Search.jsx';
import Listings from './pages/Listings.jsx';
import Technologies from './pages/Technologies.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
    </Router>
  );
}

export default App;