import { createSlice } from "@reduxjs/toolkit"
import { IClassToggleSettings } from "../../types/toggleTypes.ts"


const initialState: IClassToggleSettings = {
    settingsClass: false,
}

const settingsClassToggleSlice = createSlice({
    name: "settingsClassToggle",
    initialState: initialState,
    reducers: {
        settingsClassToggle(state) {
            state.settingsClass = !state.settingsClass;
        },

        settingsClassToDefault(state) {
            state.settingsClass = initialState.settingsClass;
        },
    },
})

export default settingsClassToggleSlice.reducer
export const { settingsClassToggle, settingsClassToDefault } = settingsClassToggleSlice.actions
