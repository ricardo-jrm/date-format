import { dateFormat, dateRelative } from './index';

describe('format dates', () => {
  it('should format "new Date(2022-01-31)" to "12:00 AM - 31 Jan, 2022 GMT"', () => {
    // mock timezones
    const mockFormat = jest.fn(dateFormat);

    mockFormat.mockReturnValue('12:00 AM - 31 Jan, 2022 GMT');
    expect(dateFormat(new Date('2022-01-31'))).toBe(
      '12:00 AM - 31 Jan, 2022 GMT',
    );
  });

  it('should get relative time to "new Date(2022-01-31)"', () => {
    // mock relative time
    const mockRelative = jest.fn(dateRelative);

    mockRelative.mockReturnValue({
      from: '2 months ago',
      fromNow: 'in 2 months',
      to: 'in 2 months',
      toNow: '2 months ago',
    });
    expect(dateRelative(new Date('2022-01-31'))).toEqual({
      from: '2 months ago',
      fromNow: 'in 2 months',
      to: 'in 2 months',
      toNow: '2 months ago',
    });
  });
});
