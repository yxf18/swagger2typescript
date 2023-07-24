/**
 * @desc Add a new pet to the store
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {}

export const init = undefined;

export function request(params: Params, body: defs.Pet, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/pet', params, 'POST'), {
    method: 'POST',

    body,
    ...options,
  });
}
