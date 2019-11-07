const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
const suits = ["C", "D", "H", "S"]
const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    var sState = [...state]
    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if(type === "RANDOMIZE"){
        
        sState[0] = {
            value: `${values[Math.floor(Math.random() * values.length)]}`,
            suit: `${suits[Math.floor(Math.random() * suits.length)]}`

        }
        // console.log(sState)
        return sState;
    } else if (type === "RANDOMIZE1"){
        
        sState[1] = {
            value: `${values[Math.floor(Math.random() * values.length)]}`,
            suit: `${suits[Math.floor(Math.random() * suits.length)]}`

        }
        console.log(sState)
        return sState;
    }


    return state;
}