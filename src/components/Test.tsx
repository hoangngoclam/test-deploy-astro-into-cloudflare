import { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gradient-to-br from-green-300 via-blue-300 to-purple-300 rounded-xl shadow-lg text-center">
      <h1 className="text-2xl font-bold mb-2 text-gray-800 drop-shadow">Test</h1>
      <p className="mb-4 text-gray-700">This is a test component.</p>
      <button
        onClick={increment}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold mb-3"
      >
        Increment
      </button>
      <p className="text-lg font-mono text-gray-900">Count: {count}</p>
    </div>
  );
};
export default Test;