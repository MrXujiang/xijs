import sleep from '../index';

describe('sleep', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runAllTimers();
  });

  it('whether sleep is normal', () => {
    const mockFn = jest.fn();
    sleep(1000).then(() => {
      mockFn();
      expect(mockFn).toHaveBeenCalled();
    });
    expect(mockFn).not.toHaveBeenCalled();
    jest.runAllTimers();
  });
});
