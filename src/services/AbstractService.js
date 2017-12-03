import { appConfig } from '../config';

export class AbstractService {
  constructor(){
    this.host = appConfig.API_HOST
  }

  buildPath(path){
    return this.host + path
  }

  payloadRequest(method, path, payload){
    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }

    return fetch(this.buildPath(path), requestOptions)
  }

  post(path, payload){
    return this.payloadRequest('POST', path, payload)
  }
};
