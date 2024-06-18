/**
 * Concatenates and joins truthy class names into a space-separated string.
 *
 * @param classNames - The class names to concatenate and join.
 * @returns A string containing the concatenated and space-separated class names.
 */
const appendClasses = (...classNames: Array<string | boolean>): string => {
  /**
   * Filter out falsy values from the array.
   * Falsy values include false, null, undefined, 0, and empty strings.
   */
  const filteredClasses = classNames.filter(Boolean);

  /**
   * Check if there are any truthy class names before joining.
   * If the array is empty, return an empty string.
   */
  return filteredClasses.length > 0 ? filteredClasses.join(' ') : '';
};

export default appendClasses;
