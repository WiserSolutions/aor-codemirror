import { validJson } from './validJson'

describe('validJson', async () => {
  it('returns nothing for a valid JSON string', () => {
    const json = `{"valid": "json"}`

    const result = validJson(json)

    expect(result).toEqual(undefined)
  })

  it('returns an error message for invalid JSON string', () => {
    const invalidJson = `{ invalid json }`

    const result = validJson(invalidJson)

    expect(result).toEqual('JSON needs to be valid: Unexpected token i in JSON at position 2')
  })
})
