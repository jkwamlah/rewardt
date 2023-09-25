export default function getErrorMessage(error: string): string | null {
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
