import { FunctionComponent, MouseEventHandler, ReactElement } from "react"
import { useAppDispatch, useAppSelector } from "../../types/hooks.ts"
import { sortByPrice, sortByTime, sortByTransfers } from "../../store/slices/ticketSlice.ts"
import { classToggleSort } from "../../store/slices/sortClassToggleSlice.ts"
import style from "./sort_tickets.module.scss"
import * as classNames from "classnames"


const SortTickets: FunctionComponent = (): ReactElement => {
    const currentClass = useAppSelector(
        (state) => state.classToggleSort.sortClass,
    )

    const dispatch = useAppDispatch()

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        if (event.currentTarget.value === "price") {
            dispatch(classToggleSort(event.currentTarget.value))
            dispatch(sortByPrice())
        } else if (event.currentTarget.value === "time") {
            dispatch(classToggleSort(event.currentTarget.value))
            dispatch(sortByTime())
        } else if (event.currentTarget.value === "transfers") {
            dispatch(classToggleSort(event.currentTarget.value))
            dispatch(sortByTransfers())
        }
    }

    return (
        <section className={style.sort}>
            <button
                className={
                    currentClass === "price"
                        ? classNames(style.sort_buttonActive, style.sort_button)
                        : style.sort_button
                }
                onClick={handleClick}
                value={"price"}
            >
                Самый дешевый
            </button>
            <button
                className={
                    currentClass === "time"
                        ? classNames(style.sort_buttonActive, style.sort_button)
                        : style.sort_button
                }
                onClick={handleClick}
                value={"time"}
            >
                Самый быстрый
            </button>
            <button
                className={
                    currentClass === "transfers"
                        ? classNames(style.sort_buttonActive, style.sort_button)
                        : style.sort_button
                }
                onClick={handleClick}
                value={"transfers"}
            >
                Самый оптимальный
            </button>
        </section>
    )
}

export default SortTickets
