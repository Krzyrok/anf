import { Item, GildedRose } from './gilded-rose';

describe.skip('Gilded Rose', function () {
  it('should foo', function () {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('fixme');
  });
});
