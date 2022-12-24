const { router } = require('../index.js')

describe('test prefixes', () => {
  const prefixes = ['/books']

  it.each(prefixes)('%s exists', (prefix) => {
    expect(router.stack.some((layer) => layer.regexp.test(prefix))).toBe(true)
  })
})
