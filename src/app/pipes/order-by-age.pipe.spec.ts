import { OrderByAgePipe } from './order-by-age.pipe';

describe('OrderByAgePipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByAgePipe();
    expect(pipe).toBeTruthy();
  });
});
