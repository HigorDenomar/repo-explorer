import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ImSpinner2 } from 'react-icons/im'
import { IoSearch } from 'react-icons/io5'
import { useListUsers } from '../hooks/useListUsers'
import { useSearchStore } from '../store/search'
import { useUserStore } from '../store/user'
import { InputSearch } from './input-search'

export function SearchForm() {
  const [isInputOpen, setInputOpen] = useState(false)
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const { isLoading } = useUserStore()

  const { data, isFetching } = useListUsers({ search })
  const users = data?.map((user) => user.login.toLowerCase())

  function handleToSelect(value: string) {
    if (!value) return

    setInputOpen(false)
    setSearch(value)

    useSearchStore.setState({ search: value })
    useUserStore.setState({ user: undefined })

    navigate(`/user/${value}`)
  }

  return (
    <>
      <div
        onClick={() => setInputOpen(true)}
        className="flex items-center self-center border cursor-text rounded px-2 sm:px-4 h-10 w-full max-w-2xl"
        data-testid='search-input'
      >
        <p className='text-gray-500 text-xs mr-auto sm:text-sm'>
          {search ? search : (isLoading || isFetching) ? 'Buscando...' : 'Buscar usuário'}
        </p>

        <kbd className="hidden pointer-events-none ml-1 md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>

        <div aria-label='search-icon' className='pl-1 sm:pl-3 text-gray-500'>
          {isFetching ? (
            <ImSpinner2 size={20} className='animate-spin' />
          ) : (
            <IoSearch className='text-lg sm:text-2xl' strokeWidth={20} />
          )}
        </div>
      </div>

      <InputSearch
        value={search}
        onChange={setSearch}
        onSelect={handleToSelect}
        options={users}
        open={isInputOpen}
        setOpen={setInputOpen}
        isLoading={isFetching}
      />
    </>
  )
}
