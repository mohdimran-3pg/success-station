import { PROFILE_ADDRESS, PROFILE_IMAGE } from './ReduxConstants';
const initialState = {
url: '',
address:''
};
export default function updateProfile(state = initialState, action = {}) {
switch(action.type) {
case PROFILE_IMAGE:

return {
...state,
url:action.payload
};
case PROFILE_ADDRESS:
console.log("redu",action.payload)
return {
...state,
address:action.payload
};
default:
return state;
}
}
