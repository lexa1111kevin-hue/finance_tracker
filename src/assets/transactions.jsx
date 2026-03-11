import Pencel from "../img/pencil.svg";
import { useState } from "react";

export default function Transactions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex-1 p-4">
      <div className="flex items-center justify-between bg-slate-200 p-4 rounded">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          +Add Transaction
        </button>
      </div>
      <div className="flex items-center gap-4  justify-start bg-slate-50 p-4 rounded">
        <h4 className="font-medium text-slate-500">date Range:</h4>
        <select className="border p-2 rounded">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
        </select>
        <h4 className="font-medium text-slate-500">category:</h4>
        <select className="border p-2 rounded">
          <option>All</option>
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>
      <table className="w-full ">
        <thead className="bg-slate-300">
          <tr>
            <th className="text-left p-4">Date</th>
            <th className="text-left p-4">Category</th>
            <th className="text-left p-4">amount</th>
            <th className="text-left p-4">Note</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-slate-50">
            <td className="p-4">2024-06-01</td>
            <td className="p-4">Salary</td>
            <td className="p-4 text-green-500">+5000</td>
            <td className="p-4">Monthly salary</td>
            <td className=" mt-3 flex gap-2">
              <button className="flex items-center justify-center bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 w-30 gap-1">
                <img src={Pencel} alt="Edit" className="w-6 h-6" />
                <span className="font-medium text-lg">Edit</span>
              </button>
              <button className="flex items-center justify-center bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 w-30 gap-1 ">
                <span className="font-medium text-lg">Delete</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Transaction</h2>

            <input
              type="text"
              placeholder="Category"
              className="w-full border p-2 rounded mb-3"
            />

            <input
              type="number"
              placeholder="Amount"
              className="w-full border p-2 rounded mb-3"
            />

            <input
              type="text"
              placeholder="Note"
              className="w-full border p-2 rounded mb-3"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                Cancel
              </button>

              <button className="px-3 py-1 bg-blue-500 text-white rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
