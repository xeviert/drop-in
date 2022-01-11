import React, { Component } from 'react';
import mockStudios from './store/studios.json';
import mockTeachers from './store/teachers.json';
import TokenService from './services/token-service';
import IdleService from './services/idle-service';

export const AppContext = React.createContext({
  user: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {},
});

export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
      teachers: mockTeachers,
      studios: mockStudios,
      user: {},
      error: null,
    };

    const jwtPayload = TokenService.parseAuthToken();

    if (jwtPayload)
      state.user = {
        id: jwtPayload.user_id,
        name: jwtPayload.name,
        username: jwtPayload.sub,
      };

    this.state = state;
    IdleService.setIdleCallback(this.logoutBecauseIdle);
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
