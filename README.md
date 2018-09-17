# Admin on Rest - CodeMirror

Wrapper around [CodeMirror](https://codemirror.net) for [admin-on-rest](https://marmelab.com/admin-on-rest/).

Supported formats:

* html
* json
* sql

### Install

Install using npm: `npm install aor-codemirror`

## Usage

#### JSON editor

We should to turn on validation for JSON.

```js
import { CodeMirror, validJson } from 'aor-codemirror'

<CodeEditor label="My Label" name="fieldName" type="json" defaultValue="{}" required validate={validJson} />
```

> Output from the CodeMirrror will be JSON object (not string);

#### SQL editor

```js
import { CodeMirror } from 'aor-codemirror'

<CodeMirror label="My Label" name="fieldName"  type="sql" required />
```

#### HTML editor

```js
import { required } from 'admin-on-rest'
import { CodeMirror } from 'aor-codemirror'

<CodeMirror label="My Label" name="fieldName" type="html" required validate={required} />
```
