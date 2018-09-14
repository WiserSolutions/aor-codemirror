import React from 'react'
import PropTypes from 'prop-types'
import { Controlled as ControlledCodeMirror } from 'react-codemirror2'
import { FlatButton, Toolbar, ToolbarGroup } from 'material-ui'
import { editorTypes } from './editorTypes'

import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/sql/sql'
import 'codemirror/mode/javascript/javascript'

const defaultOptions = {
  lineNumbers: true,
  lineWrapping: true
}

const CodeMirrorCore = props => {
  const { input: { value, onChange }, meta: { valid, error }, type, label, defaultValue = '', required } = props
  const { mode, format, parse, toString } = editorTypes[type]

  return (
    <div>
      <span style={{ color: '#c4c4c4' }}>
        {label}
        {required ? ' * ' : ' '}
      </span>
      <span style={{ color: '#ff3d3a' }}> {valid ? '' : `(${error})`}</span>
      <Toolbar noGutter>
        <ToolbarGroup>
          <FlatButton disabled={format === null} label="Format" onClick={() => onChange(format(value))} />
        </ToolbarGroup>
      </Toolbar>
      <ControlledCodeMirror
        label={label}
        value={toString(value || defaultValue)}
        options={{ ...defaultOptions, mode }}
        onBeforeChange={(editor, data, valueFromEditor) => {
          onChange(parse(valueFromEditor))
        }}
      />
    </div>
  )
}

CodeMirrorCore.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
    onChange: PropTypes.func
  }),
  meta: PropTypes.shape({
    valid: PropTypes.bool,
    error: PropTypes.string
  }),
  source: PropTypes.string,
  record: PropTypes.object,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  required: PropTypes.bool
}

export { CodeMirrorCore }
