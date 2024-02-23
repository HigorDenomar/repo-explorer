export type User = {
  id: number
  name: string
  login: string
  bio: string
  avatar_url: string
  html_url: string
  repos_url: string
  company: string | null
  location: string
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export type Repository = {
  id: number
  name: string
  full_name: string
  description?: string
  language?: string
  owner: User
  html_url: string
  created_at: string
  updated_at: string
}
