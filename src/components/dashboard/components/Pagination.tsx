interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <nav className="flex gap-3 items-center" aria-label="Pagination">
      <button
        className="self-stretch px-2.5 py-1.5 my-auto rounded border border-solid cursor-pointer bg-neutral-100 border-stone-300"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        &lt;
      </button>
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          className="self-stretch px-2.5 my-auto rounded border border-solid cursor-pointer h-[25px] w-[25px]"
          style={{
            backgroundColor:
              currentPage === page
                ? "rgba(89, 50, 234, 1)"
                : "rgba(245, 245, 245, 1)",
            borderColor:
              currentPage === page
                ? "rgba(89, 50, 234, 1)"
                : "rgba(194, 194, 194, 1)",
            color:
              currentPage === page
                ? "rgba(255, 255, 255, 1)"
                : "rgba(29, 34, 36, 1)",
          }}
          onClick={() => onPageChange(page)}
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </button>
      ))}
      <span className="self-stretch my-auto text-black">...</span>
      <button
        className="self-stretch px-2.5 py-1.5 my-auto rounded border border-solid cursor-pointer bg-neutral-100 border-stone-300"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        &gt;
      </button>
    </nav>
  );
}
