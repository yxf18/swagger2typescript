/**
     * @desc Returns pet inventories by status
Returns a map of status codes to quantities
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params: Params, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/store/inventory', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
