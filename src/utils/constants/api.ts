import { stringify } from "qs";

export const HTTP_CODE = {
  HTTP_SUCCESS: 200,
  HTTP_BAD_REQUEST: 400,
  HTTP_UNAUTHORIZED: 401,
  HTTP_FORBIDDEN: 403,
  HTTP_NOT_FOUND: 404,
  HTTP_CONFLICT: 409,
  HTTP_UNPROCESSABLE_ENTITY: 422,
  HTTP_TOO_MANY_REQUESTS: 429,
  HTTP_INTERNAL_SERVER_ERROR: 500,
};

export const HTTP_METHOD = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const paramsSerializer = (params) => {
  return stringify(params, { arrayFormat: "brackets" });
};
