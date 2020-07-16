import jsonPlaceHolder from '../api/jsonplaceholder';
import _ from 'lodash'
export const fetchPostAndUsers = () => async (dispatch,getState) => {
    await dispatch(fetchPost());
    const userId = _.uniq(_.map(getState().posts, 'userId'));
    userId.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPost = () => async dispatch => {
    const resp = await jsonPlaceHolder.get('/posts');
    dispatch({ type: 'FETCH_POSTS', payload: resp.data });
};

export const fetchUser = (id) => async dispatch => {
    const resp = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({ type: 'FETCH_USER', payload: resp.data });
};

// export const fetchPost = () => {
//     return async (dispatch, getState) => {
//         const resp = await jsonPlaceHolder.get('/posts');
//         dispatch({
//             type: 'FETCH_POSTS',
//             payload: resp
//         })
//     };
// };