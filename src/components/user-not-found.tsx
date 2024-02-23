import notFoundImg from '../assets/not-found.svg'

type UserNotFoundProps = {
  term: string
}

export function UserNotFound({ term }: UserNotFoundProps) {
  return (
    <main className='flex flex-col p-4 justify-center items-center min-h-svh -mt-20 text-gray-600 text-center'>
      <blockquote className='text-primary text-xl font-semibold'>"{term}"</blockquote>

      <h2 className='text-xl font-semibold'>Nenhum usuário encontrado</h2>

      <p className='mb-12'>Verifique se a escrita está correta ou tente novamente</p>

      <img src={notFoundImg} alt="Ilustração de uma mulher procurando algo em uma página web" />
    </main>
  )
}
