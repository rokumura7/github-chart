import { Stylist } from '../../api/experts'

describe('Stylist.work', () => {
  it('should return styles', () => {
    const actual = new Stylist().work().style
    expect(actual).toContain('<style>')
  })
})