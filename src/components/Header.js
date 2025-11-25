'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/assets/logo.png'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import { HiMenu, HiX } from 'react-icons/hi'

const NAV_ITEMS = [
  { label: 'Accueil', href: '/' },
  { label: 'Projets', href: '/projets' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  // Initialisation du thème (localStorage > système)
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const preferesDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const initialTheme = stored || (preferesDark ? 'dark' : 'light')
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initialTheme)
  }, [])

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <header className="text-white bg-black border-b border-gray-200 dark:border-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Logo portfolio"
              width={56}
              height={56}
              priority
            />
            <span className="ml-3 text-lg hidden sm:block">mon portfolio</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex md:space-x-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg hover:text-cyan-400 transition-colors uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            {/* Dark Mode toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Changer le thème"
            >
              {theme === 'light' ? (
                <IoSunnyOutline className="w-6 h-6" />
              ) : (
                <IoMoonOutline className="w-6 h-6" />
              )}
            </button>

            {/* Burger button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          menuOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="px-6 pt-4 pb-6 bg-black dark:bg-gray-900 border-t border-gray-800">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-lg hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
