# Admin on Rest - CodeMirror

[![CircleCI](https://circleci.com/gh/WisePricer/aor-codemirror.svg?style=svg&circle-token=d8324b2c596c0982d37077984e2c6840b2ef2154)](https://circleci.com/gh/WisePricer/aor-codemirror)
[![Maintainability](https://api.codeclimate.com/v1/badges/caf521533ef41d49142c/maintainability)](https://codeclimate.com/github/WisePricer/aor-codemirror/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/caf521533ef41d49142c/test_coverage)](https://codeclimate.com/github/WisePricer/aor-codemirror/test_coverage)

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
