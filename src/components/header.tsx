import { useState, type FormEvent } from 'react';
import { HiOutlineHeart } from 'react-icons/hi';
import { IoSearch } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

import { ImSpinner2 } from 'react-icons/im';
import { useSearchStore } from '../store/search';
import { useUserStore } from '../store/user';

export function Header() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const { isLoading } = useUserStore()

  async function handleSearch(event: FormEvent) {
    event.preventDefault()
    if (!search) return

    useSearchStore.setState({ username: search })
    useUserStore.setState({ user: undefined })

    navigate(`/user/${search}`)
  }

  return (
    <header className='sticky inset-0 z-10 bg-white flex justify-between min-h-20 border-b'>
      <form onSubmit={handleSearch} className='flex border rounded my-5 mx-6 h-10 w-full max-w-2xl'>
        <input
          type="text"
          placeholder={isLoading ? 'Buscando...' : 'Buscar usuário'}
          className='w-full h-full text-sm pl-4 rounded placeholder:text-gray-500'
          value={search}
          onChange={event => setSearch(event.target.value)}
          disabled={isLoading}
        />

        <button type='submit' aria-label='Buscar' className='px-3 text-gray-500' disabled={!search || isLoading}>
          {isLoading ? (
            <ImSpinner2 size={20} className='animate-spin' />
          ) : (
            <IoSearch size={24} strokeWidth={20} />
          )}
        </button>
      </form>

      <Link
        to='/favoritos'
        className='flex items-center justify-center gap-2 bg-primary px-6 text-white text-sm font-medium'
      >
        <HiOutlineHeart size={24} />

        Favoritos
      </Link>
    </header>
  )
}
