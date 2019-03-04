import * as types from '../actions/types';

export const ui = (state = {
  activeTab: 0,
}, { type, payload }) => {

  switch (type) {
    case types.CHANGE_TAB:
      return {
        ...state,
        activeTab: payload.activeTab
      };
    default:
      return state;
  }
};
