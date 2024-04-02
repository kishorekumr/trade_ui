import { useState } from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
// Import components for routing

// Import Routes and Route from react-router-dom
import { Routes, Route } from 'react-router-dom';
import Table from './component/table/Table';
import TradingForm from './component/dashboard/TradingForm';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <div className="w-[18%]">
          <Sidebar />
        </div>
        <main className="pt-16 w-[80%] ">
          {/* Setup your routes here */}
          <Routes>
            <Route path="/" element={<TradingForm />} />
            <Route path="/table" element={<Table />} />
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
