export function removeCharactersFromObjectKey(
  object: Record<string, unknown>,
  removableChars: string,
) {
  const newObj: Record<string, unknown> = {};

  Object.keys(object).forEach((key) => {
    const newKey = key.replaceAll(removableChars, "");
    newObj[newKey] = object[key];
  });

  return newObj;
}
