/**
     * @desc Delete purchase order by ID
For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** ID of the order that needs to be deleted */
  orderId: number;
}

export const init = undefined;

export function request(params: Params, options?: any) {
  return PontCore.fetch(
    PontCore.getUrl('/store/order/{orderId}', params, 'DELETE'),
    {
      method: 'DELETE',

      ...options,
    },
  );
}
