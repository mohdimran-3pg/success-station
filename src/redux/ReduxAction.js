import { PROFILE_IMAGE } from './ReduxConstants';
export function updateUrl(url) {
    console.log("updateUrl",url)
return {
type: PROFILE_IMAGE,
payload: url
}
}