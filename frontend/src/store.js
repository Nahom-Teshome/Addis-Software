import { configureStore } from "@reduxjs/toolkit";
import  songReducer  from "../features/songSlice";
import createSagaMiddleware, { runSaga } from "redux-saga";
import watcherSongSaga from "./songSaga";

const saga = createSagaMiddleware()

export const store =configureStore({
    reducer:{
        songReducer:songReducer
    },
    middleware:()=>[saga]
    
})

saga.run(watcherSongSaga)