import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumsDetail from './AlbumDetail';

class AlbumsList extends Component {
  state = { albums: [] }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumsDetail key={album.title} album={album} />);
  }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumsList;
