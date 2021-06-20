import React from 'react'

const Pagination = ({ page, totalPage, paginate }) => {
  const array = []
  for (let i = 1; i <= totalPage; i++) {
    array.push(i)
  }

  const prvPageHandelr = () => page === 1 ? null : paginate(page - 1)
  
  const nextPageHandler = () => page === totalPage ? null : paginate(page + 1)
  
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

export default Pagination