/**
 * @desc Logs out current logged in user session
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params: Params, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/user/logout', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
