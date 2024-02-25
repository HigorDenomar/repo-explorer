import { useCallback, useRef, type ReactElement } from 'react'
import { ImSpinner2 } from 'react-icons/im'

type InfiniteScrollProps = {
  children: ReactElement
  hasNextPage?: boolean
  isLoading: boolean
  fetchNextPage: () => void
}

export function InfiniteScroll({ children, isLoading, hasNextPage, fetchNextPage }: InfiniteScrollProps) {
  const observer = useRef<IntersectionObserver>()

  const observedElementRef = useCallback((node: HTMLDivElement) => {
    if (isLoading) return

    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting) && hasNextPage && !isLoading) {
        fetchNextPage()
      }
    })

    if (node) observer.current?.observe(node)
  }, [isLoading, hasNextPage, fetchNextPage])

  return (
    <>
      {children}

      {isLoading ? (
        <ImSpinner2 size={20} className='animate-spin mx-auto my-5' />
      ) : null}

      <div
        className='w-full h-6'
        ref={observedElementRef}
      />
    </>
  )
}
