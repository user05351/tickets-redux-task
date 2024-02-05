import store from "../store/storeConfig"


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
