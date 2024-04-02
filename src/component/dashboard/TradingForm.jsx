import React from 'react';



const TradingForm = () => {
  return (
    <div className="bg-gray-900 w-full py-10 p-4 rounded-lg">
      <div className="mb-4 flex justify-start gap-2">
        <button className="bg-red-600 text-white px-3 py-1 rounded-full text-xs focus:outline-none">NSE</button>
        <button className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs focus:outline-none">BSE</button>
        <button className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs focus:outline-none">NFO</button>
        <button className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs focus:outline-none">MCX</button>
      </div>

      <div className="flex flex-wrap -mx-2 py-10">
        <div className="px-2 w-full md:w-1/4 mb-4">
          <select className="block w-full bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-gray-500 px-4 py-2">
            <option>20MICRONS</option>
            {/* other options */}
          </select>
        </div>

        <div className="px-2 w-full md:w-1/4 mb-4">
          <select className="block w-full bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-gray-500 px-4 py-2">
            <option>BUY</option>
            {/* other options */}
          </select>
        </div>

        <div className="px-2 w-full md:w-1/4 mb-4">
          <div className="flex items-center bg-gray-700 text-white rounded border border-gray-600">
            <button className="px-3 focus:outline-none">-</button>
            <input
              type="text"
              className="w-full bg-transparent text-center focus:outline-none px-4 py-2"
              value="1"
              readOnly
            />
            <button className="px-3 focus:outline-none">+</button>
          </div>
        </div>

        <div className="px-2 w-full md:w-1/4 mb-4">
          <select className="block w-full bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-gray-500 px-4 py-2">
            <option>NEXT_TRADE_MASTER</option>
            {/* other options */}
          </select>
        </div>
      </div>


      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-full md:w-1/4 mb-4">
          <select className="block w-full bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-gray-500 px-4 py-2">
            <option>20MICRONS</option>
            {/* other options */}
          </select>
        </div>

        <div className="px-2 w-full md:w-1/4 mb-4">
          <select className="block w-full bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-gray-500 px-4 py-2">
            <option>BUY</option>
            {/* other options */}
          </select>
        </div>

        <div className="px-2 w-full md:w-1/4 mb-4">
          <div className="flex items-center bg-gray-700 text-white rounded border border-gray-600">
            <button className="px-3 focus:outline-none">-</button>
            <input
              type="text"
              className="w-full bg-transparent text-center focus:outline-none px-4 py-2"
              value="1"
              readOnly
            />
            <button className="px-3 focus:outline-none">+</button>
          </div>
        </div>

        <div className="px-2 w-full md:w-1/4 mb-4">
          <select className="block w-full bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-gray-500 px-4 py-2">
            <option>NEXT_TRADE_MASTER</option>
            {/* other options */}
          </select>
        </div>
      </div>


      <div className="flex flex-wrap -mx-2 py-10">
        <div className="px-2 w-full md:w-1/4 mb-4">
          <select className="block w-full bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-gray-500 px-4 py-2">
            <option>20MICRONS</option>
            {/* other options */}
          </select>
        </div>

        <div className="px-2 w-full md:w-1/4 mb-4">
          <select className="block w-full bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-gray-500 px-4 py-2">
            <option>BUY</option>
            {/* other options */}
          </select>
        </div>

        <div className="px-2 w-full md:w-1/4 mb-4">
          <div className="flex items-center bg-gray-700 text-white rounded border border-gray-600">
            <button className="px-3 focus:outline-none">-</button>
            <input
              type="text"
              className="w-full bg-transparent text-center focus:outline-none px-4 py-2"
              value="1"
              readOnly
            />
            <button className="px-3 focus:outline-none">+</button>
          </div>
        </div>

        <div className="px-2 w-full md:w-1/4 mb-4">
          <select className="block w-full bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:border-gray-500 px-4 py-2">
            <option>NEXT_TRADE_MASTER</option>
            {/* other options */}
          </select>
        </div>
      </div>

      <button className="text-xs p-2 rounded-xl md:text-sm bg-slate-200 text-black" >
        Sumbit
      </button>
      {/* Other fields and submit button */}
    </div>
  );
};

export default TradingForm;
