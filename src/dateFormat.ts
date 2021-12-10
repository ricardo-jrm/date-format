import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

/**
 * Format dates with dayjs
 */
export const dateFormat = (date: Date, format?: string) => {
  if (!format) {
    return dayjs(date).format('hh:mm A - DD MMM, YYYY z');
  }
  return dayjs(date).format(format);
};

/**
 * Relative time helpers
 */
export const dateRelative = (date: Date) => ({
  from: (() => dayjs().from(date))(),
  fromNow: (() => dayjs(date).fromNow())(),
  to: (() => dayjs().to(date))(),
  toNow: (() => dayjs(date).toNow())(),
});
