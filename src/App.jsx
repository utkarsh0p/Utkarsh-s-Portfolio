import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

import { Navbar, Dock, Home } from '@components'
import { Terminal, Safari, Resume, Contacts, Gallery, Projects } from '@windows'

gsap.registerPlugin(Draggable)

function App() {
  return (
    <>
      {window.innerWidth < 768 && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 text-white flex items-center justify-center text-center p-6 z-[9999]">
          <p className="text-lg font-medium">
            Optimized for larger screens.
            <br />
            Please open this on a laptop or tablet for the best experience.
          </p>
        </div>
      )}

      <Navbar />
      <Dock />
      <Terminal />
      <Home />
      <Safari />
      <Resume />
      <Contacts />
      <Gallery />
      <Projects />
    </>
  )
}

export default App
