import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
      </main>
      <Contact />
    </>
  )
}

export default App
