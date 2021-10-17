import {foo} from "../foo";

describe('foo', () => {
  it('should run foo as expected', () => {
    expect(foo()).toBe('foo')
  })
})
