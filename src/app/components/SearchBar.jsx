export default function SearchBar({ input, setInput, fetchGifts, loading}) {
  return (
    <div>
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Describe the person or occasion..."
        className="w-full md:flex-1 px-5 py-3 border border-gray-300 rounded-2xl shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 placeholder-gray-400"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => fetchGifts()}
        className="px-6 py-3 bg-indigo-600 text-white rounded-2xl font-semibold hover:bg-indigo-700 transition duration-200 shadow"
      >
        {loading ? (
  <span className="text-gray-300">Loading...</span>
) : (
  'Search Gifts'
)}
      </button>
    </div>
            {loading ? (
  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black mx-auto "></div>
) : null}
    </div>
  )
}