"use client";

import { useState } from "react";

const ProductPitchGenerator = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ emotional: string; logical: string } | null>(null);

  const generatePitch = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:8000/generate-product-pitch/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product_name: productName, description }),
    });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-black-200 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-white text-center mb-4">AI Product Pitch Generator</h2>
      <p className="text-white-200 text-center mb-6">
        Generate AI-powered sales pitches for your products.
      </p>

      <input
        type="text"
        className="w-full p-2 mb-4 bg-gray-800 text-white rounded"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <textarea
        className="w-full p-2 bg-gray-800 text-white rounded"
        placeholder="Enter a product description..."
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={generatePitch}
        className="mt-4 p-2 w-full bg-purple-600 text-white rounded-lg"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate AI Pitches"}
      </button>

      {result && (
        <div className="mt-8">
          <h3 className="text-lg font-bold text-white">Emotional Pitch:</h3>
          <p className="text-white-200">{result.emotional}</p>

          <h3 className="text-lg font-bold text-white mt-4">Logical Pitch:</h3>
          <p className="text-white-200">{result.logical}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPitchGenerator;