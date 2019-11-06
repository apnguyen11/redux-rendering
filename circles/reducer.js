const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    console.log(action)
    // ACTION: Add a random circle
    if(type === "ADDCIRCLE"){
        return [...state, { radius: Math.floor(Math.random() * 80),
            color: `${getRandomColor()}`} ]
        // return{
            // radius: Math.floor(Math.random() * 80),
            // color: `${getRandomColor()}`
        // }

        console.log([...state, "hi"]);
    }

    return state;
}