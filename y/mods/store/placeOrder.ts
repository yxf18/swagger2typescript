/**
 * @desc Place an order for a pet
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = new defs.Order();

export function request(params: Params, body: defs.Order, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/store/order', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
