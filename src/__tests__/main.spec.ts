import { describe, it, expect } from '@jest/globals';

import foo from '../main';

describe('foo', () => {
  it('should return foo', () => {
    expect(foo()).toEqual('foo');
  });
});
