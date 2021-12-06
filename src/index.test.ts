import { dateFormat, dateRelative } from './index';

describe('format dates', () => {
  it('should format "new Date(2022-01-31)" to "12:00 AM - 31 Jan, 2022 GMT"', () => {
    expect(dateFormat(new Date('2022-01-31'))).toBe(
      '12:00 AM - 31 Jan, 2022 GMT',
    );
  });
});
