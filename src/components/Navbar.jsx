import dayjs from 'dayjs'
import React from 'react'
import { navLinks, navIcons} from '@constants/index.js'

const Navbar = () => {
  return (
    <>
        <nav>
            <div>
                <img src="images/logo.svg" alt="" />
                <p>Utkrash Singh</p>

                <ul>
                    {navLinks.map(({id,name})=>(
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>


            <div>
                <ul>
                    {navIcons.map(({id,img})=>(
                        <li key={id}>
                            <img src={img} className="icon-hover" alt="icons" />
                        </li>
                    ))}
                </ul>

            <time>{dayjs().format('hh:mm A')}</time>
            </div>
        </nav>
    </>
  )
}

export default Navbar
