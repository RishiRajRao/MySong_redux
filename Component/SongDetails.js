import React, { Component } from 'react'
import {connect} from 'react-redux'

 class SongDetails extends Component {
    render() {
        if(!this.props.song)
        {
            return <h1>Select a Song!</h1>
        }
        return (
            <div>
                <h1>Details:</h1>
                <div>Title:{this.props.song.title}</div><br/>
                <div>Length:{this.props.song.detail}</div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{song:state.selectedSongReducer}
}
export default connect(mapStateToProps)(SongDetails)
