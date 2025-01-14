const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

var likeBtn = document.getElementById("sortLikes")
likeBtn.addEventListener('click', e => dispatch({type: "LIKES"}))
var reTwee = document.getElementById("sortRetweets")
reTwee.addEventListener('click', e => dispatch({type: "RETWEETS"}))
var repls = document.getElementById("sortReplies")
repls.addEventListener('click', e => dispatch({type: "REPLIES"}))