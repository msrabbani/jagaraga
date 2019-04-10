import {createAction} from 'redux-actions';

export const createAsyncCreator = (startAction, endAction, asyncFn) => (
  dispatch => {
    dispatch(createAction(startAction)());
    const dispatchEndAction = createAction(endAction);
    return asyncFn(dispatch)
      .then(result => dispatch(dispatchEndAction(result)))
      .catch(err => {
        console.error(err);
        dispatch(dispatchEndAction(err));
      });
  }
)
