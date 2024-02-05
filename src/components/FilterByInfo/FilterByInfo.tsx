import { FunctionComponent, MouseEventHandler, ReactElement } from "react"
import { useAppDispatch, useAppSelector } from "../../types/hooks.ts"
import { settingsClassToggle } from "../../store/slices/settingsClassToggle.ts"
import style from "./filter_by_info.module.scss"
import arrow from "../../assets/arrow_sign.svg"
import FilterByCompany from "../FilterByCompany/FilterByCompany.tsx"
import FilterByTransfers from "../FilterByTransfers/FilterByTransfers.tsx"


const FilterByInfo: FunctionComponent = (): ReactElement => {
    const settingsActive = useAppSelector(
        (state) => state.classToggleSettings.settingsClass,
    )

    const tickets = useAppSelector((state) => state.tickets.list)

    const dispatch = useAppDispatch()

    const handleClick: MouseEventHandler<HTMLDivElement> = () => {
        dispatch(settingsClassToggle())
    }

    return (
        <>
            <section className={style.filterInfo}>
                <div className={style.filterInfo_settingsBar}>
                    <div>
                        <span className={style.filterInfo_text}>
                            {tickets.length > 2
                                ? "Любая авиакомпания"
                                : tickets.map((company) => company.company)}
                            {", пересадок: "}
                            {tickets.length > 2
                                ? " любое кол-во"
                                : tickets.map((transfer) => transfer.transfers)}
                        </span>
                    </div>
                    <div
                        className={style.filterInfo_settingsButton}
                        onClick={handleClick}
                    >
                        <span className={style.filterInfo_settingsText}>
                            Открыть настройки
                        </span>
                        <img
                            src={arrow}
                            alt={"стрелка окна меню"}
                            className={style.filterInfo_arrow}
                        />
                    </div>
                </div>
                {settingsActive && (
                    <div className={style.filterInfo_settingsOptions}>
                        <FilterByCompany />
                        <FilterByTransfers />
                    </div>
                )}
            </section>
        </>
    )
}

export default FilterByInfo
