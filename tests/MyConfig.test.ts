import conf from '../api/MyConfig'

describe('MyConfig', () => {
  it('can get values', () => {
    expect(conf.token).not.toBe('')
  })
})