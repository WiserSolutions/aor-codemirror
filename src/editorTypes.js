import sqlFormatter from 'sql-formatter'
import formatHtml from 'pretty'
import beautify from 'js-beautify'

const parse = value => value
const stringify = value => (value ?? '').toString()

export const editorTypes = {
  sql: {
    mode: 'text/x-sql',
    format: value => sqlFormatter.format(value),
    parse,
    stringify
  },
  json: {
    mode: 'application/json',
    format: value => {
      try {
        if (typeof value === 'string') {
          return JSON.stringify(JSON.parse(value), null, 2)
        }
        return JSON.stringify(value, null, 2)
      } catch {
        return value
      }
    },
    parse: value => {
      try {
        if (typeof value === 'string') return JSON.parse(value)
      } catch {
        return value
      }
    },
    stringify: value => {
      if (value) {
        if (typeof value === 'string') return value
        try {
          return JSON.stringify(value, null, 2)
        } catch {
          return value
        }
      }
      return ''
    }
  },
  html: {
    mode: 'text/html',
    format: value => formatHtml(value),
    parse,
    stringify
  },
  javascript: {
    mode: 'javascript',
    format: value => beautify(value, { indent_size: 2, space_in_empty_paren: true }),
    parse,
    stringify
  }
}
