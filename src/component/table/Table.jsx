import React , {useState} from "react";

const Table = () => {
  const datas = [
    {
      type: "NFO",
      number: "24032000073935",
      action: "BUY",
      quantity: 250,
      code: "NIFTY2432121300PE",
      price: 1.65,
      mode: "M",
      category: "NRML",
      status: "complete",
    },
    {
      type: "NFO",
      number: "24032000073916",
      action: "BUY",
      quantity: 250,
      code: "NIFTY2432121300PE",
      price: 1.65,
      mode: "M",
      category: "NRML",
      status: "complete",
    },
    {
      type: "NFO",
      number: "24032000071631",
      action: "BUY",
      quantity: 200,
      code: "NIFTY2432121300PE",
      price: 1.5,
      mode: "M",
      category: "NRML",
      status: "complete",
    },
    {
      type: "NFO",
      number: "24032000071602",
      action: "BUY",
      quantity: 150,
      code: "NIFTY2432121300PE",
      price: 1.5,
      mode: "M",
      category: "NRML",
      status: "complete",
    },
    {
      type: "NFO",
      number: "24032000045988",
      action: "BUY",
      quantity: 200,
      code: "NIFTY2432121300PE",
      price: 2.35,
      mode: "M",
      category: "NRML",
      status: "complete",
    },
    {
      type: "NFO",
      number: "24032000001877",
      action: "SELL",
      quantity: 30,
      code: "BANKNIFTY2432046300PE",
      price: 90.55,
      mode: "M",
      category: "NRML",
      status: "complete",
    },
  ];

  const rowsPerPage = 2; // Number of rows per page
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(datas.length / rowsPerPage);

  // Calculate the current data slice
  const currentData = datas.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handlers for Next and Previous buttons
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="overflow-x-auto py-10">
      <table className="min-w-full table-auto border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left">Exchange</th>
            <th className="border p-3 text-left">Oms Order Id</th>
            <th className="border p-3 text-left">Order Side</th>
            <th className="border p-3 text-left">Filled Quantity</th>
            <th className="border p-3 text-left">Trading Symbol</th>
            <th className="border p-3 text-left">Average</th>
            <th className="border p-3 text-left">Product</th>
            <th className="border p-3 text-left">Quantity</th>
            <th className="border p-3 text-left">Order Status</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="border p-3">{row.type}</td>
              <td className="border p-3">{row.number}</td>
              <td className="border p-3">{row.action}</td>
              <td className="border p-3">{row.quantity}</td>
              <td className="border p-3">{row.code}</td>
              <td className="border p-3">{row.price}</td>
              <td className="border p-3">{row.mode}</td>
              <td className="border p-3">{row.category}</td>
              <td className="border p-3">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          className={`p-2 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className={`p-2 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
