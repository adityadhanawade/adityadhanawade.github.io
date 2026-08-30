import { lazy, Suspense } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

const BackgroundScene = lazy(() => import('./components/BackgroundScene'))

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <BackgroundScene />
      </Suspense>
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Work />
          <About />
        </main>
        <Contact />
      </div>
    </>
  )
}

export default App
