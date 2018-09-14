import sqlFormatter from 'sql-formatter'
import formatHtml from 'pretty'

export const editorTypes = {
  sql: {
    mode: 'text/x-sql',
    format: value => sqlFormatter.format(value),
    parse: value => value,
    toString: value => (value || '').toString()
  },
  json: {
    mode: 'application/json',
    format: value => {
      try {
        if (typeof value === 'string') {
          return JSON.stringify(JSON.parse(value), null, 2)
        }
        return JSON.stringify(value, null, 2)
      } catch (e) {
        return value
      }
    },
    parse: value => {
      try {
        if (typeof value === 'string') return JSON.parse(value)
      } catch (e) {
        return value
      }
    },
    toString: value => {
      if (value) {
        if (typeof value === 'string') return value
        try {
          return JSON.stringify(value, null, 2)
        } catch (e) {
          return value
        }
      }
      return ''
    }
  },
  html: {
    mode: 'text/html',
    format: value => formatHtml(value),
    parse: value => value,
    toString: value => (value || '').toString()
  }
}
