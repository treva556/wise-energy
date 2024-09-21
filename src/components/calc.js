

import React, { useState } from "react";

function Calculator() {
  // States for input and result
  const [energyUsage, setEnergyUsage] = useState("");
  const [energyType, setEnergyType] = useState("solar");
  const [savings, setSavings] = useState(null);

  // Constants for energy savings based on type
  const savingsRates = {
    solar: 0.25, // 25% savings for solar
    wind: 0.30,  // 30% savings for wind
    other: 0.20  // 20% savings for other renewables
  };

  // Function to calculate the savings
  const calculateSavings = () => {
    if (energyUsage) {
      const rate = savingsRates[energyType];
      const calculatedSavings = energyUsage * rate;
      setSavings(calculatedSavings.toFixed(2));
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white my-12 mb-4 border border-blue-950 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Energy Savings Calculator</h2>
      
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Monthly Energy Consumption (kWh)</label>
        <input
          type="number"
          value={energyUsage}
          onChange={(e) => setEnergyUsage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter kWh"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Select Renewable Energy Type</label>
        <select
          value={energyType}
          onChange={(e) => setEnergyType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="solar">Solar</option>
          <option value="wind">Wind</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        onClick={calculateSavings}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Calculate Savings
      </button>

      {savings !== null && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
          <p>You could save approximately <strong>${savings}</strong> per month by switching to {energyType} energy.</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;