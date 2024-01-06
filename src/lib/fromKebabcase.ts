export function fromKebabCase(text: string) {
  // Split the string into words using hyphens as separators
  const words = text.split("-");

  // Capitalize words, uppercasing the entire first word if it's less than 3 characters
  const capitalizedWords = words.map((word, index) => {
    if (index === 0 && word.length < 4) {
      return word.toUpperCase();
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  });

  // Join the capitalized words together
  return capitalizedWords.join(" ");
}
