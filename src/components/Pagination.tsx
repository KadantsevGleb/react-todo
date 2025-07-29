import type {Dispatch, SetStateAction} from "react";

interface PaginationProps {
	pages: number[];
	setPage: Dispatch<SetStateAction<number>>;
}

function Pagination({pages, setPage}: PaginationProps) {
	return (
		<div className="pagination">
			{pages.map(pageNum => (
				<button
					className="pagination__btn"
					key={Math.random()}
					onClick={() => setPage(pageNum)}
				>
					{pageNum}
				</button>
			))}
		</div>
	)
}

export default Pagination
