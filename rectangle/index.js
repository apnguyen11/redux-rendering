const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

var plus10h = document.getElementById("height");
plus10h.addEventListener("click", e => dispatch({type: "HEIGHT"}))
var plus10w = document.getElementById("width");
plus10w.addEventListener("click", e => dispatch({type: "WIDTH"}))
var redder = document.getElementById("red");
redder.addEventListener("click", e => dispatch({type: "RED"}))
var bluer = document.getElementById("blue");
bluer.addEventListener("click", e => dispatch({type: "BLUE"}))