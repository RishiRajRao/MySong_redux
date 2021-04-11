import React, { Component } from 'react';
import {connect} from 'react-redux';
import {onSelectSong} from '../Actions';
// import SongDetails from './SongDeails'

 class SongList extends Component {

      renderList = this.props.songs.map((song)=>{
        return( 
        <div className="item" key={song.title}>
        <div className="right floated content">
        <button className="ui button primary" onClick={()=>this.props.onSelectSong(song)}> Click me!</button>
        </div>
            <div className="content">{song.title}</div>
        </div>)
    })
     
    render() {

     
        return (
            <div className="ui relaxed divided list">
                {this.renderList}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{songs:state.songsReducer}
};

export default connect(mapStateToProps,{onSelectSong}) (SongList);
