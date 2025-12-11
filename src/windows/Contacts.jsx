import WindowWrapper from '@hoc/WindowWrapper.jsx'
import { WindowControlls } from '@components'
import { socials } from '@constants/index.js'

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControlls target="contact" />
        <h2>Contacts</h2>
      </div>

      <div className="p-10 space-y-8">
        <h3>Get in touch</h3>

        <ul className="flex items-center gap-3">
          {socials.map(({ id, text, icon, bg, link }) => (
            <li
              key={id}
              className="rounded-lg p-3 w-60 hover:-translate-y-0.5 hover:scale-105 origin-center transition-all duration-300"
              style={{ backgroundColor: bg }}
            >
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="space-y-5"
              >
                <img src={icon} alt={text} className="w-6 h-6" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default WindowWrapper(Contact, 'contact')
