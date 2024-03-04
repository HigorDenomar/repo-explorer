import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cls(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + 1)

  return new Date(newDate)
    .toLocaleDateString('pt-BR', {
      dateStyle: 'medium',
    })
    .replace(/()\.|de\b/g, '')
    .split(' ')
    .filter(Boolean)
    .join(' ')
}
