import axiosClient from '@/utils/config/axios'

interface ResponseApi {
  data: any;
}

export default class BaseRequest {
  get(url, params = {}) {
    return new Promise((resolve, reject) => {
      axiosClient
        .get(url, {
          params: params
        })
        .then(function (response: ResponseApi) {
          resolve(response.data);
        })
        .catch(function (error: any) {
          reject(error);
        });
    });
  }

  put(url, data = {}) {
    return new Promise((resolve, reject) => {
      axiosClient
        .put(url, data)
        .then(function (response: ResponseApi) {
          resolve(response.data);
        })
        .catch(function (error: any) {
          reject(error);
        });
    });
  }

  post(url, data = {}) {
    return new Promise((resolve, reject) => {
      axiosClient
        .post(url, data)
        .then(function (response: ResponseApi) {
          resolve(response.data);
        })
        .catch(function (error: any) {
          reject(error);
        });
    });
  }

  del(url, params = {}) {
    return new Promise((resolve, reject) => {
      axiosClient
        .delete(url, { params: params } )
        .then(function (response: ResponseApi) {
          resolve(response.data);
        })
        .catch(function (error: any) {
          reject(error);
        });
    });
  }
  
  postWithFile(url, data = {}) {
    const headers = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    return new Promise((resolve, reject) => {
      axiosClient
        .post( url, data, headers)
        .then((response: ResponseApi) => {
          resolve(response.data);
        })
        .catch((error) => {
          this._errorHandler(reject, error);
        });
    });
  }
  _responseHandler(resolve, res) {
    return resolve(res.body.data);
  }

  _errorHandler(reject, err) {
    return reject(err);
  }

}

