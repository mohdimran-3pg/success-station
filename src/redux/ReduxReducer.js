import { PROFILE_IMAGE } from './ReduxConstants';
const initialState = {
url: ''
};
export default function updateProfile(state = initialState, action = {}) {
switch(action.type) {
case PROFILE_IMAGE:
    console.log("profileReducer",)
return {
...state,
url:action.payload
};
default:
return state;
}
}
