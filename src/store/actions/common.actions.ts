import * as types from '../actionsTypes/common.actionsTypes';

export const setLoading = () => async (dispatch: any) => {
  try {
    dispatch({ type: types.LOADING });
  } catch (error) {
    console.error(error);
  };
};