// PaymentPage.jsx
"use client"
// PaymentPage.jsx
import React, { useState } from 'react';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your payment processing logic here
    alert('Payment processed successfully!');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl text-black font-bold mb-4">Payment Gateway</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number:</label>
            <input
              type="text"
              id="card-number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border text-black border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter card number"
              autoComplete="off" // Disable autocomplete
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry Date:</label>
            <input
              type="text"
              id="expiry"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none  text-black focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="MM/YY"
              autoComplete="off" // Disable autocomplete
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className="mt-1 p-2 w-full text-black border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter CVV"
              autoComplete="off" // Disable autocomplete
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Cardholder Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border text-black border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter cardholder name"
              autoComplete="off" // Disable autocomplete
              required
            />
          </div>
          <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
