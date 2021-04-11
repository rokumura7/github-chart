import conf from '../../lib/MyConfig'

describe('MyConfig', () => {
  it('can get values', () => {
    expect(conf.token).not.toBe('')
  })
})