import { useState } from 'react'
import ToggleButton from '../UI/Button/ToggleButton'

interface HeaderProps {
  clickHandler: {
    scrollToMain: () => void
    scrollToAbout: () => void
    scrollToProject: () => void
    scrollToContact: () => void
  }
}

const Header = ({ clickHandler }: HeaderProps) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 z-40 flex items-center w-full p-4 mx-auto xl:px-0 max-w-7xl md:left-1/2 md:-translate-x-1/2 ${
        toggleMenu ? '' : 'backdrop-blur-sm'
      } `}
    >
      <div></div>
      <h1 className="text-3xl font-bold font-solano grow">Chae Haeun</h1>
      <nav
        className={`fixed left-0 top-0 z-50 w-full h-full sm:w-auto sm:bg-transparent  sm:dark:bg-transparent sm:h-auto bg-white/75 backdrop-blur-sm dark:bg-black/75 sm:translate-y-0 sm:static ${
          toggleMenu ? 'translate-y-0' : '-translate-y-[500%]'
        }`}
      >
        <ul className="absolute items-center gap-5 space-y-2 text-3xl font-semibold text-center text-black -translate-x-1/2 -translate-y-1/2 sm:text-2xl sm:flex sm:space-y-0 font-solano left-1/2 top-1/2 dark:text-nightContent sm:static sm:translate-x-0 sm:translate-y-0">
          <li className="">
            <button
              className="transition-colors dark:hover:text-nightPoint hover:text-dayPoint"
              type="button"
              onClick={clickHandler.scrollToMain}
            >
              Main
            </button>
          </li>
          <li>
            <button
              className="transition-colors dark:hover:text-nightPoint hover:text-dayPoint"
              type="button"
              onClick={clickHandler.scrollToAbout}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="transition-colors dark:hover:text-nightPoint hover:text-dayPoint"
              type="button"
              onClick={clickHandler.scrollToProject}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="transition-colors dark:hover:text-nightPoint hover:text-dayPoint"
              type="button"
              onClick={clickHandler.scrollToContact}
            >
              Contact
            </button>
          </li>
          <li>
            <ToggleButton />
          </li>
        </ul>
      </nav>
      <button
        type="button"
        className="relative z-50 h-8 w-9 sm:hidden"
        aria-label="메뉴 열기"
        onClick={() => {
          setToggleMenu(prev => !prev)
        }}
      >
        <span
          className={`absolute top-0 left-0 w-full h-1 transition-all duration-500 rounded-sm bg-dayPoint dark:bg-nightPoint ${
            toggleMenu ? 'rotate-45 translate-y-[13.5px]' : ''
          }`}
        ></span>
        <span
          className={`absolute left-0 w-full h-1 transition-all duration-500 -translate-y-1/2 rounded-sm top-1/2 bg-dayPoint dark:bg-nightPoint ${
            toggleMenu ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`absolute left-0 bottom-0 w-full h-1 transition-all duration-500 rounded-sm bg-dayPoint dark:bg-nightPoint ${
            toggleMenu ? '-rotate-45 -translate-y-[14.5px] ' : ''
          }}`}
        ></span>
      </button>
    </header>
  )
}

export default Header
