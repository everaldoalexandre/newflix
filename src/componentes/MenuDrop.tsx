'use client'

import { useState, useRef, useEffect } from 'react'

export default function DropdownMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Fecha o menu se clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="bg-black-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Português ▼
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-4 z-50">
          <ul className=" text-gray-700 text-white">
            <li>
              <a href="#1" className="block w-full px-4 py-2 hover:bg-gray-30">Perfil</a>
            </li>
            <li>
              <a href="#2" className="block w-full px-4 py-2 hover:bg-gray-100">Configurações</a>
            </li>
            <li>
              <a href="#3" className="block w-full px-4 py-2 hover:bg-gray-100">Sair</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}