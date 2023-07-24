/**
     * @desc Create user
This can only be done by the logged in user.
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params: Params, body: defs.User, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/user', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
