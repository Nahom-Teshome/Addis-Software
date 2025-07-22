import React from 'react'
import songData from '../placeholder.json'
import { deleteSong, updateSong, createSong, getSongs,fetchSongs } from '../features/songSlice'
import { useSelector,useDispatch } from 'react-redux'
import Button from '../components/Button.jsx'
import icon from '../assets/Nintendo_Music_Google_Play_icon.png'
export default function App(){
    const goated = 'absolutely goated'
    const [page, setPage] = React.useState(0)
    const limit = 5
    const songs = useSelector((state)=>state.songReducer.value)
    const loading = useSelector((state)=>state.songReducer.isLoading)
    const dispatch = useDispatch()
    
    React.useEffect(()=>{
        console.log('useEffect get songs fired')
        dispatch({ type: 'song/fetchsongs',payload:{page,limit}})
        // dispatch(getSongs(songData.songs))
    },[dispatch,page])

    return(
        <div className="w-full h-full bg-slate-800 pt-19 ">
            <div className="fixed top-0 z-1 flex justify-between h-1/10 text-xl shadow-md shadow-black bg-slate-200 w-full pl-5 pr-5 ">
                <div className="flex items-center gap-2">
                    <img className="w-5 h-5 font-poppins"src={icon} alt="" />
                    <h1 className=" font-poppins">SongHunt</h1>
                </div>
                <div className="flex gap-2 items-center"> 
              
                    <Button onClick={()=>dispatch(createSong({id:"10",title:"Yellow",artist:{author:"ColdPLAY"},duration:201,"album":{cover:""},preview:"none"}))}
                            className="text-black "
                    >Add a Song</Button>
                </div>
            </div>
            <div className="h-8/10 flex flex-col gap-5 w-7/10 m-auto">
                    {!loading?songs.map(song=>{
                        return(
                            <div key={song.id} className="flex justify-between items-center rounded-md border-t-2 border-white/50  shadow-black bg-transparent">
                                <div className="flex gap-2 items-end  w-8/10 ">
                                     <img src={song.album.cover} alt="" />
                                     <div className="text-white w-3/10 r">
                                        <h1 className="text-xl font-bold font-poppins">{song.title}</h1>
                                        <h3 className="text-">{song.artist.name}</h3>
                                        <h5 className="text-sm">{(song.duration/60).toFixed(2)}</h5>
                                     </div>
                                    <audio controls>
        <source src={song.preview} type="audio/mpeg" />
        Unable to view preview.
      </audio>

                                </div>
                                <div className="flex flex-col gap-2  ">
                                    <Button 
                                        className="bg-white font-medium"
                                        onClick={()=>dispatch(updateSong({id:song.id,title:"Maroon 5"}))}>Edit</Button>
                                    <Button 
                                        className="bg-white font-medium"
                                        onClick={()=>dispatch(deleteSong(song.id))}>Del</Button>
                                </div>
                            </div>
                            )
                    }):<h1>loadding...</h1>
                    }
            </div>
            <div className="w-full flex justify-center items-center gap-10 mt-5">
                <Button onClick={()=>{page >0 ?setPage(prev=>prev-1):alert('first page')}}
                        className="bg-white text-3xl"
                    > - </Button>
                <h1 className="text-white font-poppins font-medium text-center">Page {page}</h1>
                <Button onClick={()=>{setPage(prev=>prev+1)}}
                        className="bg-white text-3xl"
                    > + </Button>
            </div>
        </div>
    )
}