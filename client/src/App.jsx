import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import HomePage from "./pages/HomePage";
// Import your other components here

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <CartDrawer /> {/* Add the CartDrawer here */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Other routes */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
