import Header from "./assets/header";
import Sidebar from "./assets/sidebar";
import { Routes, Route } from "react-router-dom";
import Transactions from "./assets/transactions";

function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="ml-15 flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
