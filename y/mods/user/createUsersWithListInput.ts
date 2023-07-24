/**
 * @desc Creates list of users with given input array
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params: Params, body: Array<defs.User>, options?: any) {
  return PontCore.fetch(
    PontCore.getUrl('/user/createWithList', params, 'POST'),
    {
      method: 'POST',

      body,
      ...options,
    },
  );
}
