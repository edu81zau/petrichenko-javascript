

//Наше начальное значение (зеленый квадратик на слайде)
const initialState = {value: 0};

// Посредством действий обновляет наш state
// На слайде красный квадрат с надписью "Reducer"
// При запуске reducer хочет узнать, в каком состоянии находится наш state
// Action приходит извне, от view
// Action - объект, у которого всегда должно быть поле type - строка
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "INC":
            return {
                ...state,
                value: state.value + 1,
            };
        case "DEC":
            return {
                ...state,
                value: state.value - 1,
            };
        case "RND":
            return {
                ...state,
                value: state.value * action.payload
            };
        default:
            return state;
    }
}

export default reducer;