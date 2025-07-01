export default function Header() {
  return (
<header className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center border-b border-gray-200">
        <div className="text-xl font-bold text-indigo-600">GiftWise AI</div>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-indigo-600 transition">Home</a>
          <a href="#" className="hover:text-indigo-600 transition">About</a>
          <a href="#" className="hover:text-indigo-600 transition">Contact</a>
        </nav>
</header>
  )
}