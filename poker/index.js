const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

var random1 = document.getElementById("card1Button")
random1.addEventListener('click', e => dispatch({ type: "RANDOMIZE",  }));
var random2 = document.getElementById("card2Button")
random2.addEventListener('click', e => dispatch({ type: "RANDOMIZE1",  }));