import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

import { Navbar, Dock, Home } from '@components'
import { Terminal, Resume, Contacts, Gallery, Projects } from '@windows'

gsap.registerPlugin(Draggable)

function App() {
  return (
    <>
<Navbar />
      <Dock />
      <Terminal />
      <Home />
<Resume />
      <Contacts />
      <Gallery />
      <Projects />
    </>
  )
}

export default App
