export function ownProporty(obj: object, prop: string) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}
