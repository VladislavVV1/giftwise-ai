// components/GiftList.jsx
export default function GiftList({ results, expanded, setExpanded }) {
  const toggleDescription = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {results.map((item, i) => (
        <div key={i} className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
          {item.image ? (
     <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-xl mb-4" />
    ) : (
      <div className="w-full h-32 mt-2 bg-gray-200 animate-pulse rounded" />
    )}
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">{item.title}</h3>
          <p className="text-gray-700 mb-2">
            {expanded[i] || item.description.length <= 80
              ? item.description
              : item.description.slice(0, 80) + '...'}
            {item.description.length > 80 && (
              <button onClick={() => toggleDescription(i)} className="ml-2 text-sm text-indigo-500 underline">
                {expanded[i] ? 'Show less' : 'Read more'}
              </button>
            )}
          </p>
          <div className="flex gap-4 mt-3">
            {item.link &&(<a href={item.amazonLink} target="_blank" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Find on Amazon</a>)}
            <a href={item.ebayLink} target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">Find on eBay</a>
          </div>
        </div>
      ))}
    </div>
  )
}
