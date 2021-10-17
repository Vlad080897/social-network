import React, { useState } from "react";
import s from '../users/user2.module.css'

const Paginator = ({ totalItemsCount, portion, currentPage, pageHasChanged }) => {

    const allPages = [];
    const totalCount = Math.ceil(totalItemsCount / portion);

    for (let i = 1; i <= totalCount; i++) {
        allPages.push(i)

    }

    const [portionNumber, changePage] = useState(1)

    const leftBorder = (portionNumber - 1) * portion + 1;
    const rightBorder = portionNumber * portion

    const currentPortionNumber = [];

    allPages.filter((page) => {
        if (leftBorder <= page && page <= rightBorder) {
            return currentPortionNumber.push(page)
        }
    })
    return (
        <>
            <div className={s.paginator}>
                {portionNumber > 1 &&
                    < button onClick={() => {
                        changePage(portionNumber - 1)
                        pageHasChanged(currentPortionNumber[0] - portion)
                    }

                }

                    >PREV</button>
                }
            {currentPortionNumber
                .map((pageNumber) => {

                    return (
                        <>
                            <span className={pageNumber === currentPage ? s.current_page : s.pages}
                                onClick={() => pageHasChanged(pageNumber)} > {pageNumber} </span>
                        </>
                    )
                })}
            <button onClick={() => {
                changePage(portionNumber + 1);
                pageHasChanged(currentPortionNumber[0] + portion)
            }}>NEXT</button>
        </div>
        </>
    )
}



export default Paginator