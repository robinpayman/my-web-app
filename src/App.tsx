import { useState } from 'react'
import './App.css'
import { About } from './components/About'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Web App</h1>
        <p>A React + TypeScript + Vite application</p>
        <nav className="app-nav">
          <button
            className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button
            className={`nav-button ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => setCurrentPage('about')}
          >
            About
          </button>
        </nav>
      </header>
      <main className="app-main">
        {currentPage === 'home' ? (
          <div className="home-content">
            <p>Welcome to My Web App!</p>
            <p>Click the <strong>About</strong> button to learn more about this project.</p>
          </div>
        ) : (
          <About />
        )}
      </main>
      <footer className="app-footer">
        <p>Built with React, TypeScript &amp; Vite</p>
      </footer>
    </div>
  )
}

export default App
