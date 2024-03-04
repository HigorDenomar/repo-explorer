import {
  ArrowRightIcon,
  HeartIcon, HomeIcon, PersonIcon
} from "@radix-ui/react-icons"
import { useEffect } from "react"

import { useNavigate } from 'react-router-dom'
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "./ui/command"

type InputSearchProps = {
  onChange: (value: string) => void
  onSelect: (value: string) => void
  value: string
  options?: string[]
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  isLoading?: boolean
}

export function InputSearch({ open, setOpen, onSelect, onChange, value, options, isLoading = false }: InputSearchProps) {
  const navigate = useNavigate()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen} shouldFilter={false}>
      <CommandInput
        placeholder='Buscar usuário'
        onValueChange={onChange}
        value={value}
        isLoading={isLoading}
      />

      <CommandList>
        {options?.length ? (
          <CommandGroup heading="Usuários">
            {options?.map((option) => (
              <CommandItem onSelect={onSelect}>
                <PersonIcon className="mr-2 h-4 w-4" />
                <span>{option}</span>
                <ArrowRightIcon className="ml-auto h-4 w-4" />
              </CommandItem>
            ))}
          </CommandGroup>
        ) : value ? (
          <span className="px-4 py-1 justify-center flex w-full">Nenhum resultado encontrado.</span>
        ) : null}

        <CommandGroup heading="Navegação">
          <CommandItem onSelect={() => navigate('/')}>
            <HomeIcon className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem onSelect={() => navigate('/favoritos')}>
            <HeartIcon className="mr-2 h-4 w-4" />
            <span>Favoritos</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
