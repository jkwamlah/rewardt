export function getErrorMessage(error: string): string | null {
  try {
    const startTag = 'reason="';
    const endTag = '",';

    const startIndex = error.indexOf(startTag);
    const endIndex = error.indexOf(endTag, startIndex);

    if (startIndex !== -1 && endIndex !== -1) {
      return error.substring(startIndex + startTag.length, endIndex);
    }
  } catch (error) {
    // Handle parsing errors here, if needed
  }

  return "Something went wrong! Please try again later.";
}

export function formatTimestamp(timestamp: number): string {
  const startDate = new Date(timestamp); // Convert timestamp to Date object
  const endDate = new Date(timestamp + 45 * 60 * 1000); // Add 45 minutes to the start time

  // Format the start and end times
  const startTime = startDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const endTime = endDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // Combine and format the range
  return `${startTime} to ${endTime}`;
}
