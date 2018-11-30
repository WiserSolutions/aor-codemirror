# Admin on Rest - CodeMirror

[![CircleCI](https://circleci.com/gh/WisePricer/aor-codemirror.svg?style=svg&circle-token=d8324b2c596c0982d37077984e2c6840b2ef2154)](https://circleci.com/gh/WiserSolutions/aor-codemirror)
[![Maintainability](https://api.codeclimate.com/v1/badges/caf521533ef41d49142c/maintainability)](https://codeclimate.com/github/WisePricer/aor-codemirror/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/caf521533ef41d49142c/test_coverage)](https://codeclimate.com/github/WisePricer/aor-codemirror/test_coverage)

Wrapper around [CodeMirror](https://codemirror.net) for [react-admin](https://marmelab.com/react-admin/).

Supported formats:

* html
* json
* sql
* javascript

### Install

Install using npm: `npm install @wisersolutions/aor-codemirror`

## Usage

The prop `name` will be mapped to `source` for react-admin.

#### JSON editor

We should to turn on validation for JSON.

```jsx harmony
import { CodeMirror, validJson } from 'aor-codemirror'

<CodeEditor label="My Label" name="fieldName" type="json" defaultValue="{}" required validate={validJson} />
```

> Output from the CodeMirrror will be JSON object (not string);

#### SQL editor

```jsx harmony
import { CodeMirror } from 'aor-codemirror'

<CodeMirror label="My Label" name="fieldName"  type="sql" required />
```

#### HTML editor

```jsx harmony
import { required } from 'react-admin'
import { CodeMirror } from 'aor-codemirror'

<CodeMirror label="My Label" name="fieldName" type="html" required validate={required} />
```
#### Javascript editor

```jsx harmony
import { required } from 'react-admin'
import { CodeMirror } from 'aor-codemirror'

<CodeMirror label="My Label" name="fieldName" type="javascript" required validate={required} />
```
