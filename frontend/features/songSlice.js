import { createSlice } from "@reduxjs/toolkit";



export const songSlice = createSlice({
    name: 'song',
    initialState:{
        value:[],
        isLoading:false
    },

    reducers:{
        fetchSongs:(state)=>{
            state.isLoading = true
        },
        getSongs:(state,action)=>{
            console.log("getSongs reducer: ",action.payload)
            state.value = [...action.payload]
            state.isLoading = false
        },
        deleteSong:(state,action)=>{
            state.value = state.value.filter(song=> song.id !== action.payload)
        },
        updateSong:(state,action)=>{
            console.log("updateSongs reducer: ",action.payload)
            state.value = state.value.map(song =>(song.id===action.payload.id?{...song,...action.payload}:song))
        },
        createSong:(state,action)=>{
            console.log('createSong: ',action.payload)
            state.value = [...state.value,action.payload]
        }
    }
})


export const {getSongs, deleteSong, updateSong, createSong, fetchSongs} = songSlice.actions
// export const songState = (state) => state.songReducer.value
export default songSlice.reducer