import React from 'react';
import './LyricWrapper.scss'; 
import LyricsOvh from 'lyricsovh-lib';
import LyricList from './LyricList/LyricList';
import LyricLetter from './LyricLetter/LyricLetter';

class LyricWrapper  extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            songList: [],
            songLetter: "",
            lyricapi: new LyricsOvh()
        };

        this.handleMusicSelected = this.handleMusicSelected.bind(this);
        this.handleBackButton = this.handleBackButton.bind(this);
    }


    componentDidUpdate(prevProps) {
        if (prevProps.searchWorld !== this.props.searchWorld) {
            this.setState({songLetter: ""})
          if (this.props.searchWorld !== "") {
            this.state.lyricapi
              .getSuggest(this.props.searchWorld)
              .then(res => this.setState({ songList: res.data }));
          } else {
            this.setState({
              songList: []
            });
          }
        }
      }

    handleMusicSelected(song) {
        this.state.lyricapi.getLyric(song.artist.name, song.title).then(res => {
            this.setState({
                songLetter: res.error ? "Musica não encontrada" : res.lyrics
            });   
        });
    }

    handleBackButton(){
        this.setState({songLetter:""});
    }

    render(){
        return  (
             <div className="lyricWrapper">
                 {this.state.songLetter !== "" ? (
                     <LyricLetter songLetter={this.state.songLetter} handleBackButton={this.handleBackButton} />
                 ) : (
                     <LyricList songList={this.state.songList} handleMusicSelected={this.handleMusicSelected} />
                 )}
             </div>
        )
    }
}

export default LyricWrapper;