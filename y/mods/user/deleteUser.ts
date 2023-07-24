/**
     * @desc Delete user
This can only be done by the logged in user.
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** The name that needs to be deleted */
  username: string;
}

export const init = undefined;

export function request(params: Params, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/user/{username}', params, 'DELETE'), {
    method: 'DELETE',

    ...options,
  });
}
