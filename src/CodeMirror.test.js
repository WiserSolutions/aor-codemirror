import { CodeMirror } from './CodeMirror'
import { CodeMirrorCore } from './CodeMirrorCore'

const defaultProps = {
  name: 'fieldName',
  label: 'Field Label',
  type: 'json'
}

describe('CodeMirror', () => {
  it('renders with defaults', () => {
    const wrapper = shallow(<CodeMirror {...defaultProps} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveProp('component', CodeMirrorCore)
  })

  it('renders with source', () => {
    expect(shallow(<CodeMirror {...defaultProps} source="sourceObject" />)).toMatchSnapshot()
  })
})
