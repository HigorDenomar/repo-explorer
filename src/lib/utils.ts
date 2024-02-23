import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cls(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Updated on 16 Jul 2020
export function formatDate(date: string) {
  return new Date(date)
    .toLocaleDateString('pt-BR', {
      dateStyle: 'medium',
    })
    .replace(/()\.|de\b/g, '')
    .split(' ')
    .filter(Boolean)
    .join(' ')
}
