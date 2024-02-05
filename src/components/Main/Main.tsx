import { FunctionComponent, ReactElement } from "react"
import { useAppSelector } from "../../types/hooks.ts"
import FilterByTransfers from "../FilterByTransfers/FilterByTransfers.tsx"
import FilterByCompany from "../FilterByCompany/FilterByCompany.tsx"
import SortTickets from "../SortTickets/SortTickets.tsx"
import TicketsList from "../Tickets/TicketsList.tsx"
import FilterByInfo from "../FilterByInfo/FilterByInfo.tsx"
import style from "./main.module.scss"
import * as classNames from "classnames"


const Main: FunctionComponent = (): ReactElement => {
    const settingsActive = useAppSelector(
        (state) => state.classToggleSettings.settingsClass,
    )

    return (
        <>
            <main className={style.main}>
                <div className={style.main_filters_area}>
                    <div className={style.main_filters_transfers}>
                        <FilterByTransfers />
                    </div>
                    <div className={style.main_filters_company}>
                        <FilterByCompany />
                    </div>
                </div>
                <div className={style.main_tickets_area}>
                    <SortTickets />
                    <div
                        className={
                            settingsActive
                                ? classNames(
                                        style.main_tickets_filterBlock,
                                        style.main_tickets_filterBlockActive,
                                )
                                : style.main_tickets_filterBlock
                        }
                    >
                        <FilterByInfo />
                    </div>
                    <TicketsList />
                    <button className={style.main__button}>
                        Загрузить еще билеты
                    </button>
                </div>
            </main>
        </>
    )
}

export default Main
