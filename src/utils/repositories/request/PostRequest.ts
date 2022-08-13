import BaseRequest from './BaseRequest'

const resource = '/posts';

export default class PostRequest extends BaseRequest {
    getData() {
        return this.get(`${resource}`);
    }
};