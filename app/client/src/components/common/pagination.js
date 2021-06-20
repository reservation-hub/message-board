import React, { useCallback } from 'react'

const Pagination = ({ page, totalPage, paginate }) => {
  const array = []
  for (let i = 1; i <= totalPage; i++) {
    array.push(i)
  }

  const prvPageHandelr = useCallback(
    () => {
      if(page === 1) return null
      paginate(page - 1)
    },
    [page, paginate],
  )
  
  const nextPageHandler = useCallback(
    () => {
      if(page === totalPage) return null
      paginate(page + 1)
    },
    [page, totalPage, paginate],
  )
  
  return (
    <ul className="paginate">
      <button
        className="prev-button"
        onClick={() => prvPageHandelr()}
      >
        { '<' }
      </button>
      { array.map(number => (
        <li key={ number }>
          <button onClick={() => paginate(number)}>{ number }</button>
        </li>
      )) }
      <button
        className="next-button"
        onClick={() => nextPageHandler()}
      >
        { '>' }
      </button>
    </ul>
  )
}

export default React.memo(Pagination)