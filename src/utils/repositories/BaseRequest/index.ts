import axiosClient from '@/utils/config/axios'

export default class BaseRequest {
  // GET METHOD
  get(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      axiosClient
        .get(url, {
          params: params,
        })
        .then(response => {
          this._responseHandler(resolve, response)
        })
        .catch(error => {
          this._errorHandler(reject, error)
        })
    })
  }
  // POST METHOD
  post(url: string, data = {}) {
    return new Promise((resolve, reject) => {
      axiosClient
        .post(url, data)
        .then(response => {
          this._responseHandler(resolve, response)
        })
        .catch(error => {
          this._errorHandler(reject, error)
        })
    })
  }
  // PUT METHOD
  put(url: string, data = {}) {
    return new Promise((resolve, reject) => {
      axiosClient
        .put(url, data)
        .then(response => {
          this._responseHandler(resolve, response)
        })
        .catch(error => {
          this._errorHandler(reject, error)
        })
    })
  }
  // PATCH METHOD
  patch(url: string, data = {}) {
    return new Promise((resolve, reject) => {
      axiosClient
        .patch(url, data)
        .then(response => {
          this._responseHandler(resolve, response)
        })
        .catch(error => {
          this._errorHandler(reject, error)
        })
    })
  }
  // DEL METHOD
  del(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      axiosClient
        .delete(url, { params: params })
        .then(response => {
          this._responseHandler(resolve, response)
        })
        .catch(error => {
          this._errorHandler(reject, error)
        })
    })
  }
  // POST WITH FILE METHOD
  postWithFile(url: string, data = {}) {
    const headers = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }
    return new Promise((resolve, reject) => {
      axiosClient
        .post(url, data, headers)
        .then(response => {
          this._responseHandler(resolve, response)
        })
        .catch(error => {
          this._errorHandler(reject, error)
        })
    })
  }
  // RESPONSE
  _responseHandler(resolve: any, res: any) {
    return resolve(res.body.data)
  }
  // ERROR
  _errorHandler(reject: any, err: any) {
    return reject(err)
  }
}
