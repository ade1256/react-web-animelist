import { WrapPagination } from "./Pagination.style"

type PaginationProps = {
  currentPage: number,
  totalPage: number,
  handleChangePage: (currentPage: number) => void
}

const PaginationComponent = ({ currentPage, totalPage, handleChangePage }: PaginationProps) => {
  let divider = 3
  const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, index) => index + start);
  };

  const generatePagination = () => {
    const totalPageCount = totalPage;
    const prevPage = Math.max(currentPage - divider, 1);
    const nextPage = Math.min(
      currentPage + divider,
      totalPageCount
    );
    if (currentPage < 10) {
      return range(1, 10);
    }

    const prevNearestTens = Math.floor(prevPage / 10) * 10
    const nextNearestTens = Math.ceil(nextPage / 10) * 10
    if (prevNearestTens == 0) {
      return [1, '...', ...range(prevPage, nextPage), '...', nextNearestTens];
    } else if(currentPage === nextNearestTens) {
      return [prevNearestTens, '...', ...range(prevPage-3, nextPage)];
    }
    else {
      return [prevNearestTens, '...', ...range(prevPage, nextPage), '...', nextNearestTens];
    }
  }
  return (
    <WrapPagination data-testid="pagination-component">
      {
        generatePagination().map((v: any, index: number) => {
          return <div key={index} className={`item ${currentPage === v && 'active'}`} onClick={() => handleChangePage(v)}>{v}</div>
        })
      }
    </WrapPagination>
  )
}

export default PaginationComponent