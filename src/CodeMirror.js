import React from 'react'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'
import pick from 'lodash.pick'

import { CodeMirrorCore } from './CodeMirrorCore'

export const CodeMirror = props => (
  <Field {...props} name={props.source ? `${props.source}.${props.name}` : props.name} component={CodeMirrorCore} />
)
CodeMirror.propTypes = {
  source: PropTypes.string,
  name: PropTypes.string.isRequired,
  validate: PropTypes.func,
  ...pick(CodeMirrorCore.propTypes, ['label', 'type', 'defaultValue', 'required'])
}
