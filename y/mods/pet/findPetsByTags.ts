/**
     * @desc Finds Pets by tags
Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
     */

import * as defs from '../../baseClass';
import { PontCore } from '../../pontCore';

export class Params {
  /** Tags to filter by */
  tags: Array<string>;
}

export const init = [];

export function request(params: Params, options?: any) {
  return PontCore.fetch(PontCore.getUrl('/pet/findByTags', params, 'GET'), {
    method: 'GET',

    ...options,
  });
}
