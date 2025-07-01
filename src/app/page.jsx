'use client'
import Header from './components/Header'
import Filters from './components/Filters'
import GiftList from './components/GiftList'
import SearchBar from './components/SearchBar'
import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'

export default function GiftWise() {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  const [expanded, setExpanded] = useState({})
  const [ageGroup, setAgeGroup] = useState('');
  const [interest, setInterest] = useState('');
  
const fetchGifts = useCallback(async () => {
  setLoading(true)
  try {
    const response = await fetch('https://vlad1999.app.n8n.cloud/webhook/giftwiseai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: input,
        ageGroup,
        interest,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    setResults(data[0]?.recommendations || [])
  } catch (err) {
    console.error('Gift fetch failed:', err)
  }
  setLoading(false)
}, [input, ageGroup, interest])


  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 font-sans">
      <Header/>
      <main className="flex flex-col md:flex-row gap-6 px-6 py-10 max-w-7xl mx-auto">
        <aside className="md:w-1/4 w-full bg-white p-6 rounded-2xl shadow-lg sticky top-24 h-fit">
          <Filters ageGroup={ageGroup} setAgeGroup={setAgeGroup} interest={interest} setInterest={setInterest}
          />
        </aside>
        <section className="flex-1 space-y-6">
          <SearchBar input={input} setInput={setInput} fetchGifts={fetchGifts} loading={loading}/>
          <GiftList results={results} expanded={expanded} setExpanded={setExpanded} />
        </section>
      </main>
    </div>
  )
}


// import { useState } from 'react'
// //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`
// export default function Home() {
//   const [input, setInput] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [results, setResults] = useState([])
//   const [error, setError] = useState(null)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setError(null)
//     setResults([])
//     try {
//       console.log ('Fetch procesing with value:', input)
//       const res = await fetch('https://andriykoo123.app.n8n.cloud/webhook-test/17456f5f-1e08-4b86-bbb9-39f7ab35e54c', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json'  },
//         body: JSON.stringify({ query: input,
//           sessionID: "user-123"
//          }),
//       })
//       console.log('res:', res)
//       const data = await res.json()
//       console.log ('data:', data)
//       setResults(data.recommendations || [])
//     } catch (err) {
//       console.log('Error:', err)
//       setError('Something went wrong.')
//     }
// console.log(results[1])
// console.log(results)
//     setLoading(false)
//   }

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-6">
//         <header className="text-center">
//           <h1 className="text-3xl font-bold">🎁 GiftWise AI</h1>
//           <p className="text-gray-500">Smart gift ideas powered by AI</p>
//         </header>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="e.g. 25yo male who likes music & gaming"
//             className="text-black w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
//           >
//             {loading ? 'Generating...' : 'Suggest Gifts'}
//           </button>
//         </form>

//         {error && <p className="text-red-500">{error}</p>}
//         <ul className="space-y-2">
//           {results.map((r, i) => (
//             <li key={i} className="p-3 bg-green-50 rounded-lg">
//               {r}
//             </li>
//           ))}
//         </ul>

//         <footer className="text-sm text-center text-gray-400">
//           &copy; 2025 GiftWise AI
//         </footer>
//       </div>
//     </main>
//   )
// }
