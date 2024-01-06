export function convertToKebabCase(text: string) {
  // Lowercase the entire string
  text = text.toLowerCase();

  // Split the string into words using a regular expression that matches
  // one or more letters, numbers, or underscores
  const words = text.match(/[a-z0-9_]+/g);

  if (!words) {
    return "";
  }

  // Join the words using hyphens
  return words.join("-");
}
