import {
  GET_USERS,
  //CREATE_USER,
  GET_USER_BY_ID,
  //DELETE_USER_BY_ID,
  UPDATE_USER_BY_ID,
} from '../actions/types/types';

const initialState = {
  coursesList: [],
  courseList: null
};

export default function usersReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        classesList: action.payload,
      };
    /*case CREATE_USER:
          return {
            ...state,
          }; */
    case GET_USER_BY_ID:
      return {
        ...state,
        classList: action.payload,
      };
    /*case DELETE_USER_BY_ID:
          return {
            ...state,
          }; */
    case UPDATE_USER_BY_ID:
      return {
        ...state,
      };
    default:
      return state;
  };
};
