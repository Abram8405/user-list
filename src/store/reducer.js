export const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCEED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'DELETE_USER':
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.id),
      };
    case 'UPDATE_USER':
      return {
        ...state,
        data: action.newUser,
      };

    default:
      throw new Error();
  }
};
