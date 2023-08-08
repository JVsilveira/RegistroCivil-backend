module.exports = app => {
  function existsOrError(value, message) {
    if (!value) throw new Error(message)
    if (Array.isArray(value) && value.lenght === 0) throw new Error(message)
    if (typeof value === "string" && !value.trim()) throw new Error(message)
  }

  function notExistsOrError(value, message) {
    try {
      existsOrError(value, message)
    } catch (message) {
      return
    }
    throw new Error(message)
  }

  function equalsOrError(valueA, valueB, message) {
    if (valueA !== valueB) new Error(message)
  }
  return { equalsOrError, existsOrError, notExistsOrError }
}
