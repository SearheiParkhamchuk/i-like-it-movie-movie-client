export const extractDataAttributesFromProps = <P extends Record<string, unknown>>(props: P) => {
  return Object.entries(props).reduce<Record<`data-${string}`, unknown>>((acc, [key, value]) => {
    if (key.startsWith('data-')) {
      acc[key as `data-${string}`] = value
      return acc
    }
    return acc
  }, {})
}
