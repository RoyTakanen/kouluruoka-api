# Kouluruoka API

NPM package to get latest school food from an API in Finland. Made by https://kaikkitietokoneista.net/

## Installation

```bash
npm install kouluruoka-api
```

## Usage

Check out [docs](https://kaikkitietokoneista.github.io/kouluruoka-api/).

## Examples

Get food for a particular school
```javascript
const koulusafkapi = require('kouluruoka-api');

async function main() {
 console.log(await koulusafkapi.foodInSchool('80b1081a-720c-eb11-8143-00215a9b975d'))
}
main()
```

Get schools in JSON
```javascript
const koulusafkapi = require('kouluruoka-api');

async function main() {
 console.log(await koulusafkapi.getSchools())
}
main()
```
