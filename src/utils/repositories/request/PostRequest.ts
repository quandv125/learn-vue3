import BaseRequest from './BaseRequest'

const resource = '/users';

export default class PostRequest extends BaseRequest {
    getData() {
        return this.get(`${resource}`);
    }
};