'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

function Filter() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const activeFilter = searchParams.get('capacity') ?? 'all'

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams)
    params.set('capacity', filter)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const filterButtons = [
    { filter: 'all', label: 'All cabins' },
    { filter: 'small', label: '2-3 guests' },
    { filter: 'medium', label: '4-7 guests' },
    { filter: 'large', label: '8-12 guests' },
  ]

  return (
    <div className='border border-primary-800 flex'>
      {filterButtons.map(button => (
        <Button
          key={button.filter}
          filter={button.filter}
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          {button.label}
        </Button>
      ))}
    </div>
  )
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? 'bg-primary-700 text-primary-50' : ''
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  )
}

export default Filter
