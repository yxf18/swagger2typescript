/**
 * @desc Deletes a pet
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** Pet id to delete */
  petId: number;
}

export const init = undefined;

export function request(params: Params, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/pet/{petId}', params, 'DELETE'), {
    method: 'DELETE',

    ...options,
  });
}
