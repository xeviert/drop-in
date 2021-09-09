import React, { Component } from 'react';
import mockStudios from './store/studios.json';
import mockTeachers from './store/teachers.json';
import mockRooms from './store/studio_rooms.json';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: mockTeachers,
      studios: mockStudios,
    };
  }


  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
