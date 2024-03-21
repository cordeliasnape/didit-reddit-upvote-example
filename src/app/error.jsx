"use client";

export default function Error({ error, reset }) {
  console.log(error);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-red-300 text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Error</h2>
        <p>Something went wrong...</p>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </div>
  );
}
