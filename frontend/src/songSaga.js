import {call, put, takeEvery} from 'redux-saga/effects'
import { getSongs } from '../features/songSlice';
 const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
const options = {
                method: 'GET',
                headers: {
		'x-rapidapi-key': '7fffc7ab27msh0ecfa48eca38ff8p1665ccjsn5906f2d57290',
		'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
	}
}

function* watcherSongSaga(){
    console.log('worker saga')
    yield takeEvery('song/fetchsongs',workerGetSongs)
}

function* workerGetSongs(action){
    console.log('worker: ',action)
    try{

        const res = yield call(()=> fetch(url, options))
        const songs = yield res.json()
        const { page, limit} = action.payload
        const start = page * limit
        yield put(getSongs(songs.data.slice(start ,start+limit)))
    }
    catch(err){
        console.log('Error in fetch: ',err)
    }
    
    
} 

export default  watcherSongSaga