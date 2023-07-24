/**
 * @desc uploads an image
 */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** ID of pet to update */
  petId: number;
}

export const init = new defs.ApiResponse();

export function request(params: Params, form: FormData, options?: any) {
  return PontCore.fetch(
    PontCore.getUrl('/pet/{petId}/uploadImage', params, 'POST'),
    {
      method: 'POST',
      body: form,

      ...options,
    },
  );
}
