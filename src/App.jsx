import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="md:flex md:items-center md:justify-between md:px-6 md:py-3 md:border-y">
        <header className="flex items-center justify-between p-2 border-y md:border-y-0">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-15" />
            <h1>Jojo Laundry</h1>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open Navigation"
            aria-expanded={isOpen}
            className="relative size-8 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`absolute inset-0 size-8 transition-all duration-200 ${isOpen ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`absolute inset-0 size-8 transition-all duration-200 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>
        <div
          className={`transition-[max-height] duration-300 ease-in-out overflow-hidden
                md:border-0 md:max-h-none md:overflow-visible md:transition-none
              ${isOpen ? "max-h-80 border-b" : "max-h-0"}`}
        >
          <nav className="flex flex-col gap-5 p-3 md:flex-row">
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">Location</a>
            <a href="">Contact</a>
          </nav>
        </div>
      </div>
      <main>
        <h1>Ini Content</h1>
      </main>
    </>
  );
}

export default App;
