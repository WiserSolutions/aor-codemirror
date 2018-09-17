import { validJson } from './validJson'

describe('validJson', async () => {
  it('returns `undefined` for a valid JSON string', () => {
    expect(validJson('{"valid": "json"}')).toEqual(undefined)
  })

  it('returns an error message for invalid JSON string', () => {
    expect(validJson('{ invalid json }')).toEqual('JSON needs to be valid: Unexpected token i in JSON at position 2')
  })
})
