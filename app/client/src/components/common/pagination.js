import React, { useCallback } from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ page, totalPage, paginate, perPage }) => {
  
  const pageChangeHandle = useCallback(
    (data) => {
      let pageNum = data['selected']
      if (perPage) paginate(pageNum * perPage)
      else if (page !== 1) return paginate(page - 1) 
      else return paginate(page + 1)
    },
    [paginate, page, perPage]
  )
  
  return (
    <ReactPaginate
      pageCount={ totalPage }
      pageRangeDisplayed={ totalPage }
      onPageChange={ pageChangeHandle }
      previousLabel={ '<' }
      nextLabel={ '>' }
      containerClassName={ "paginate" }
      previousClassName={ " prev-button " }
      nextClassName={ "next-button" }
    />
  )
}

export default React.memo(Pagination)