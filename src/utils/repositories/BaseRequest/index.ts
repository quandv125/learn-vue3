import axiosClient from '@/utils/config/axios'

export default class BaseRequest {
  get(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      axiosClient
        .get(url, {
          params: params,
        })
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }

  post(url: string, data = {}) {
    return new Promise((resolve, reject) => {
      axiosClient
        .post(url, data)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }

  put(url: string, data = {}) {
    return new Promise((resolve, reject) => {
      axiosClient
        .put(url, data)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }

  patch(url: string, data = {}) {
    return new Promise((resolve, reject) => {
      axiosClient
        .patch(url, data)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }

  del(url: string, params = {}) {
    return new Promise((resolve, reject) => {
      axiosClient
        .delete(url, { params: params })
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }

  postWithFile(url: string, data = {}) {
    const headers = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }
    return new Promise((resolve, reject) => {
      axiosClient
        .post(url, data, headers)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          this._errorHandler(reject, error)
        })
    })
  }
  _responseHandler(resolve: any, res: any) {
    return resolve(res.body.data)
  }

  _errorHandler(reject: any, err: any) {
    return reject(err)
  }
}
