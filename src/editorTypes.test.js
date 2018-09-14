import { editorTypes } from './editorTypes'

describe('editorTypes', async () => {
  describe('json', async () => {
    it('returns valid mode for json', () => {
      expect(editorTypes.json.mode).toEqual('application/json')
    })

    it('formats json', () => {
      const sql = '{"valid": "json"}'

      const formatted = editorTypes.json.format(sql)

      expect(formatted).toEqual(`{
  "valid": "json"
}`)
    })

    it('parses json into object', () => {
      const json = '{"valid": "json"}'

      const object = editorTypes.json.parse(json)

      expect(object).toEqual({ valid: 'json' })
    })

    it('returns string representation of json object', () => {
      const json = { valid: 'json' }

      const string = editorTypes.json.toString(json)

      expect(string).toEqual(`{
  "valid": "json"
}`)
    })
  })

  describe('sql', async () => {
    it('returns valid mode for sql', () => {
      expect(editorTypes.sql.mode).toEqual('text/x-sql')
    })

    it('formats sql', () => {
      const sql = 'SELECT * FROM TestTable WHERE 1=1'

      const formatted = editorTypes.sql.format(sql)

      expect(formatted).toEqual(`SELECT
  *
FROM
  TestTable
WHERE
  1 = 1`)
    })

    it('parse function keeps sql the same', () => {
      const sql = 'SELECT * FROM TestTable WHERE 1=1'

      const string = editorTypes.sql.parse(sql)

      expect(string).toEqual(sql)
    })

    it('returns string representation of sql', () => {
      const sql = 'SELECT * FROM TestTable WHERE 1=1'

      const string = editorTypes.sql.toString(sql)

      expect(string).toEqual(sql)
    })
  })

  describe('html', async () => {
    it('returns valid mode for html', () => {
      expect(editorTypes.html.mode).toEqual('text/html')
    })

    it('formats html', () => {
      const html = '<html  attribute = "value"> <div> hi </div>  </html>'

      const formatted = editorTypes.html.format(html)

      expect(formatted).toEqual(`<html attribute="value">
  <div> hi </div>

</html>`)
    })

    it('parse function keeps html the same', () => {
      const html = '<html>a</html>'

      const string = editorTypes.html.parse(html)

      expect(string).toEqual(html)
    })

    it('returns string representation of html', () => {
      const html = '<html>a</html>'

      const string = editorTypes.html.toString(html)

      expect(string).toEqual(html)
    })
  })
})
