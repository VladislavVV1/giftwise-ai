export default function Filters({ageGroup, setAgeGroup, interest, setInterest }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-indigo-700">🎯 Filters</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Age Group</label>
        <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          <option value="">Select age</option>
          <option value="teen">Teen</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Interests</label>
        <select value={interest} onChange={(e) => setInterest(e.target.value)} className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          <option value="">Select interest</option>
          <option value="tech">Tech</option>
          <option value="fitness">Fitness</option>
          <option value="music">Music</option>
        </select>
      </div>
    </div>
  )
}