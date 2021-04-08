import { PROFILE_IMAGE, LOGOUT } from './ReduxConstants';
const initialState = {
url: '',
address:'',
isLogout:false,
};
export default function updateProfile(state = initialState, action = {}) {
switch(action.type) {
case PROFILE_IMAGE:

return {
...state,
url:action.payload
};

case LOGOUT:
console.log("reducer logout",action.isLogout)
return {
...state,
isLogout:action.isLogout
};    
default:
return state;
}
}

