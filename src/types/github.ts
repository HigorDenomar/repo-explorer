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

export type ListUsers = {
  incomplete_results: boolean
  items: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: false
    score: number
  }[]
  total_count: number
}
