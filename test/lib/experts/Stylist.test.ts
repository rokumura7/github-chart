import { Stylist } from '../../../lib/experts';

describe('Stylist.work', () => {
  it('should return styles', () => {
    const actual = new Stylist().work().style;
    expect(actual).toContain('<style>');
  });
});
