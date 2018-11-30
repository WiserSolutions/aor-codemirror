import { editorTypes } from './editorTypes'

const { sql, json, html, javascript } = editorTypes

describe('editorTypes', async () => {
  describe('json', async () => {
    it('#format formats JSON', () => {
      expect(json.format('{"valid": "json"}')).toEqual(`{
  "valid": "json"
}`)
    })

    it('#parse parses JSON string into an object', () => {
      expect(json.parse('{"valid": "json"}')).toEqual({ valid: 'json' })
    })

    it('#stringify returns a string representation of the JSON object', () => {
      expect(json.stringify({ valid: 'json' })).toEqual(`{
  "valid": "json"
}`)
    })
  })

  describe('sql', async () => {
    it('#format formats SQL', () => {
      expect(sql.format('SELECT * FROM TestTable WHERE 1=1')).toEqual(`SELECT
  *
FROM
  TestTable
WHERE
  1 = 1`)
    })

    it('#parse keeps SQL the same', () => {
      const sqlString = 'SELECT * FROM TestTable WHERE 1=1'
      expect(sql.parse(sqlString)).toEqual(sqlString)
    })

    it('#stringify keeps SQL the same', () => {
      const sqlString = 'SELECT * FROM TestTable WHERE 1=1'
      expect(sql.stringify(sqlString)).toEqual(sqlString)
    })
  })

  describe('html', async () => {
    it('#format formats HTML', () => {
      expect(html.format('<html  attribute = "value"> <div> hi </div>  </html>')).toEqual(`<html attribute="value">
  <div> hi </div>

</html>`)
    })

    it('#parse keeps HTML the same', () => {
      const htmlString = '<html>a</html>'
      expect(html.parse(htmlString)).toEqual(htmlString)
    })

    it('#stringify keeps HTML the same', () => {
      const htmlString = '<html>a</html>'
      expect(html.stringify(htmlString)).toEqual(htmlString)
    })
  })

  describe('javascript', async () => {
    const code = 'const hello = () => ({ foo: () => { console.log("bar") }})'
    it('#format formats javascript', () => {
      expect(javascript.format(code)).toEqual(
        `const hello = () => ({
  foo: () => {
    console.log("bar")
  }
})`)
    })

    it('#parse parses javascript string into string', () => {
      expect(javascript.parse(code)).toEqual(code)
    })

    it('#stringify returns a string representation of the javascript code', () => {
      expect(javascript.stringify(code)).toEqual(code)
    })
  })
})
