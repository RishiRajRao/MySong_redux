import {combineReducers} from 'redux';

const songsReducer =() => {
   return [
        {title:"let me know", detail:"3:10"},
        {title:"let me tell", detail:"3:11"},
        {title:"let me speak", detail:"3:12"},
        {title:"let me shout", detail:"3:13"}
    ];
};


const selectedSongReducer =(selectsong=null,action)=>{
    if(action.type=='SELECT_SONG')
    {
        return(action.payload);
    }
    return selectsong;
}

export default combineReducers({
    songsReducer:songsReducer,
    selectedSongReducer:selectedSongReducer
});