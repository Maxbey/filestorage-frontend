export class AbstractService {
  payloadRequest(method, path, payload){
    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }

    return fetch(path, requestOptions)
  }

  post(path, payload){
    return this.payloadRequest('POST', path, payload)
  }

  put(path, payload){
    return this.payloadRequest('PUT', path, payload)
  }

  get(path){
    return fetch(path, {method: 'GET'})
  }

  delete(path){
    return fetch(path, {method: 'DELETE'})
  }
};
