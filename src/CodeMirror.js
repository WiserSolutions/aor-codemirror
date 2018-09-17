import React from 'react'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'
import { CodeMirrorCore } from './CodeMirrorCore'

const CodeMirror = props => <Field {...props} name={props.source ? `${props.source}.${props.name}` : props.name} component={CodeMirrorCore} />

CodeMirror.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  required: PropTypes.bool,
  validate: PropTypes.func
}

export { CodeMirror }
