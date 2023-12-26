/**
 * Formats a date as a string in the format "HH:MM:SS"
 *
 * @param date The date to format
 * @returns The formatted date as a string in the format "HH:MM:SS"
 */
export function formatTimestamp(date: Date): string {
  // format timestamp as HH:MM:SS
  const ts = `${date.getHours().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}:${date.getMinutes().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}:${date.getSeconds().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`;
  return ts;
}
