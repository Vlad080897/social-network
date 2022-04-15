import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage, getFilter, getPortion, getTotalItemsCount } from "../../../redux/selectors";
import { getUsers, UsersFilterType } from "../../../redux/userPageReducer2";
import s from '../users/user2.module.css'

const Paginator: React.FC = () => {

    const currentPage = useSelector(getCurrentPage)
    const totalItemsCount = useSelector(getTotalItemsCount)
    const portion = useSelector(getPortion)
    const filter = useSelector(getFilter)

    const dispatch = useDispatch();

    const allPages = [];
    const totalCount = Math.ceil(totalItemsCount / portion);

    for (let i = 1; i <= totalCount; i++) {
        allPages.push(i)

    }

    const [portionNumber, changePage] = useState(1)

    const leftBorder = (portionNumber - 1) * portion + 1;
    const rightBorder = portionNumber * portion

    const currentPortionNumber: Array<number> = [];

    allPages.filter((page) => {
        if (leftBorder <= page && page <= rightBorder) {
            return currentPortionNumber.push(page)
        }
    })
    return (
        <>
            <div className={s.paginator}>
                {currentPage > 1 &&
                    < button onClick={() => {
                        if (allPages.length >= 10 && currentPortionNumber.length >= 10) {
                            changePage(portionNumber - 1)
                            dispatch(getUsers(currentPortionNumber[0] - portion, filter.term, filter.choosenFriends))

                        } else if (currentPage === currentPortionNumber[0]) {
                            changePage(portionNumber - 1)
                            dispatch(getUsers(currentPortionNumber[0] - portion, filter.term, filter.choosenFriends))
                        } else {
                            dispatch(getUsers(currentPage - 1, filter.term, filter.choosenFriends))
                        }
                    }

                    }

                    >PREV</button>
                }
                {currentPortionNumber
                    .map((pageNumber) => {
                        return (
                            <>
                                <span  className={pageNumber === currentPage ? s.current_page : s.pages}
                                    onClick={() => dispatch(getUsers(pageNumber, filter.term, filter.choosenFriends))} > {pageNumber} </span>

                            </>
                        )
                    })}
                {
                    currentPage !== allPages[allPages.length - 1] &&
                    <button onClick={() => {
                        debugger
                        if (allPages.length >= 10 && currentPortionNumber.length >= 10) {
                            changePage(portionNumber + 1)
                            dispatch(getUsers(currentPortionNumber[0] + portion, filter.term, filter.choosenFriends))
                        } else {
                            dispatch(getUsers(currentPage + 1, filter.term, filter.choosenFriends))
                        }
                    }}>NEXT</button>
                }

            </div>
        </>
    )
}



export default Paginator