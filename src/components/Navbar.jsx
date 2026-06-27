import dayjs from 'dayjs'
import React from 'react'
import useWindowStore from '@store/window'
import { navLinks, navIcons } from '@constants/index.js'

const Navbar = () => {
  const { openWindow } = useWindowStore()
  return (
    <>
      <nav>
        <div>
          <img src="images/logo.svg" alt="" />
          <p>Utkrash Singh</p>

          <ul className="nav-links">
            {navLinks.map(({ id, name, type }) => (
              <li key={id} onClick={() => openWindow(type)}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="nav-icons">
            {navIcons.map(({ id, img, mobileHidden }) => (
              <li key={id} className={mobileHidden ? 'max-sm:hidden' : ''}>
                <img src={img} className="icon-hover" alt="icons" />
              </li>
            ))}
          </ul>

          <p
            className="hidden max-sm:block text-sm font-medium cursor-pointer hover:underline"
            onClick={() => openWindow('resume')}
          >
            Resume
          </p>

          <time>{dayjs().format('hh:mm A')}</time>
        </div>
      </nav>
    </>
  )
}

export default Navbar
