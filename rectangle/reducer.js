const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION 1 - Increment height by 10
    if(type === "HEIGHT"){
        return {
            height: state.height + 10,
            width: state.width,
            color: state.color
        }
    }
    // ACTION 2 - Increment width by 10
    if(type === "WIDTH"){
        return {
            height: state.height,
            width: state.width + 10,
            color: state.color
        }
    }
    // ACTION 3 - Change the color

    if(type === "RED"){
        return {
            height: state.height,
            width: state.width,
            color: state.color = "red"
        }
    }

    if(type === "BLUE"){
        return {
            height: state.height,
            width: state.width,
            color: state.color = "blue"
        }
    }
    return state;
}