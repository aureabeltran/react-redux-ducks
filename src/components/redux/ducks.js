const initialData = {
    example: false,
}

const EXAMPLE = 'EXAMPLE'

export default function dataReducer(state = initialData, action){
    switch(action.type){
        case EXAMPLE:
            return {...state, loader: action.payload}
        default:
            return {...state}
    }
}

export const exampleAction = (dataExample) => (dispatch) => {
    dispatch({
        type: EXAMPLE,
        payload: dataExample
    })
}

