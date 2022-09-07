import conf from '../../lib/my-config';

describe('MyConfig', () => {
  it('can get values', () => {
    expect(conf.token).not.toBe('');
  });
});
