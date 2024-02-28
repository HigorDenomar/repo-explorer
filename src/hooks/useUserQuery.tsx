import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { UserService } from '../services/user.service'
import { useUserStore } from '../store/user'

type UseUserQueryProps = {
  username?: string
}

export function useUserQuery({ username }: UseUserQueryProps) {
  const navigate = useNavigate()

  return useQuery({
    queryKey: ['user', username],
    queryFn: async () => {
      const { data } = await UserService.get(username as string)
      return data
    },
    onSuccess(data) {
      useUserStore.setState({ user: data })
    },
    onError() {
      navigate('/')
    },
    onSettled() {
      useUserStore.setState({ isLoading: false })
    },
    enabled: !!username,
    retry: false,
    refetchOnWindowFocus: false,
  })
}
