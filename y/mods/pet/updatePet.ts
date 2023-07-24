/**
 * @desc Update an existing pet
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params: Params, body: defs.Pet, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/pet', params, 'PUT'), {
    method: 'PUT',

    body,
    ...options,
  });
}
