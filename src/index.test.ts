import { novaHelloWorld } from './index';

describe('example test suite', () => {
  it('should console.log "Hello World from Nova"', () => {
    console.log = jest.fn(); // eslint-disable-line no-console
    novaHelloWorld();
    expect(console.log).toHaveBeenCalledWith('Hello World from Nova'); // eslint-disable-line no-console
  });
});
