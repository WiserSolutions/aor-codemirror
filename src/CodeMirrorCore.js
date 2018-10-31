import React from 'react'
import PropTypes from 'prop-types'
import { Controlled as ControlledCodeMirror } from 'react-codemirror2'
import { Button, Toolbar } from '@material-ui/core'
import { editorTypes } from './editorTypes'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/sql/sql'
import 'codemirror/mode/javascript/javascript'

export const CodeMirrorCore = ({
  input: { value, onChange = () => {} } = {},
  meta: { valid, error },
  type,
  label,
  defaultValue = '',
  required = false
}) => {
  const { mode, format, parse, stringify } = editorTypes[type]
  return (
    <div>
      <span style={{ color: '#c4c4c4' }}>
        {label}
        {required ? ' * ' : ' '}
      </span>
      {valid ? null : <span style={{ color: '#ff3d3a' }}> ({error})</span>}
      {Boolean(format) && (
        <Toolbar disableGutters>
          <Button onClick={() => onChange(format(value))}>Format</Button>
        </Toolbar>
      )}
      <ControlledCodeMirror
        label={label}
        value={stringify(value || defaultValue)}
        options={{ mode, lineNumbers: true, lineWrapping: true }}
        onBeforeChange={(editor, data, valueFromEditor) => {
          onChange(parse(valueFromEditor))
        }}
      />
    </div>
  )
}
const valueType = PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
CodeMirrorCore.propTypes = {
  input: PropTypes.shape({
    value: valueType,
    onChange: PropTypes.func
  }),
  meta: PropTypes.shape({
    valid: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired,
  type: PropTypes.oneOf(Object.keys(editorTypes)).isRequired,
  label: PropTypes.node.isRequired,
  defaultValue: valueType,
  required: PropTypes.bool
}
