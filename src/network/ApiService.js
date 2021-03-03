import axios from 'axios'





const client = axios.create({
  baseURL: 'http://eshgksa.com/success_station/api/v1/',
  headers: {'content-type':'application/json'}
});



/**
 * Request Wrapper with default success/error actions
 */
const request = function(options) {
  const onSuccess = function(response) {
   
    return response.data;
  }

  const onError = function(error) {
    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);

    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }
console.log(options)
  return client(options)
            .then(onSuccess)
            .catch(onError);
}
function get(endpoint,params) {
    return request({
      url:    endpoint,
      method: 'GET',
      params: params
    });
  }
  
function post(endPoint, postData) {
  console.log(JSON.stringify(postData))
    return request({
      url:    endPoint,
      method: 'POST',
      data:   postData
    });
  }
  
  const ApiService = {
    get, post 
  }
  
  export default ApiService;