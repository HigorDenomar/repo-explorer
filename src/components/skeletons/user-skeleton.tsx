export function UserSkeleton() {
  return (
    <aside className='flex flex-col items-center text-center h-max col-span-1 border rounded gap-6 px-8 py-10 text-gray-700 text-sm animate-pulse'>
      <div className=
        "flex  items-center justify-center bg-gray-300 dark:bg-gray-700 p-16 w-48 h-48 rounded-full overflow-hidden">
        <svg className="w-full h-full text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>

      <div className='flex flex-col items-center w-full space-y-2'>
        <div className="w-full max-w-48 h-3 bg-gray-300 dark:bg-gray-700 rounded-md" />
        <div className="w-full max-w-32 max h-2 bg-gray-300 dark:bg-gray-700 rounded" />
      </div>

      <div className="flex-1 w-full space-y-6 py-1">
        <div className=" w-full h-2 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className=" w-full space-y-3">
          <div className=" w-full grid grid-cols-3 gap-4">
            <div className=" w-full h-2 bg-gray-300 dark:bg-gray-700 rounded col-span-2"></div>
            <div className=" w-full h-2 bg-gray-300 dark:bg-gray-700 rounded col-span-1"></div>
          </div>
          <div className=" w-full h-2 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </aside>
  )
}
