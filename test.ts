import { LoginUserParams, User } from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name CreateUser
   * @summary Create user
   * @request POST:/user
   */
  createUser = (body: User, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user`,
      method: 'POST',
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name CreateUsersWithArrayInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithArray
   */
  createUsersWithArrayInput = (body: User[], params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/createWithArray`,
      method: 'POST',
      body: body,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name CreateUsersWithListInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithList
   */
  createUsersWithListInput = (body: User[], params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/createWithList`,
      method: 'POST',
      body: body,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name LoginUser
   * @summary Logs user into the system
   * @request GET:/user/login
   */
  loginUser = (query: LoginUserParams, params: RequestParams = {}) =>
    this.request<string, void>({
      path: `/user/login`,
      method: 'GET',
      query: query,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name LogoutUser
   * @summary Logs out current logged in user session
   * @request GET:/user/logout
   */
  logoutUser = (params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/logout`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name GetUserByName
   * @summary Get user by user name
   * @request GET:/user/{username}
   */
  getUserByName = (username: string, params: RequestParams = {}) =>
    this.request<User, void>({
      path: `/user/${username}`,
      method: 'GET',
      format: 'json',
      ...params,
    });
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name UpdateUser
   * @summary Updated user
   * @request PUT:/user/{username}
   */
  updateUser = (username: string, body: User, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/${username}`,
      method: 'PUT',
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name DeleteUser
   * @summary Delete user
   * @request DELETE:/user/{username}
   */
  deleteUser = (username: string, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/${username}`,
      method: 'DELETE',
      ...params,
    });
}
DELETE',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags pet
   * @name UploadFile
   * @summary uploads an image
   * @request POST:/pet/{petId}/uploadImage
   * @secure
   */
  uploadFile = (petId: number, data: UploadFilePayload, params: RequestParams = {}) =>
    this.request<ApiResponse, any>({
      path: `/pet/${petId}/uploadImage`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
}
