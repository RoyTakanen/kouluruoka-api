const https = require('https');

/**
* Get list of all schools in JSON.
* @example
* const koulusafkapi = require('kouluruoka-api');
*
* async function main() {
*  console.log(await koulusafkapi.getSchools())
* }
* main()
*/
exports.getSchools = function () {
  return new Promise((resolve, reject) => {
    https.get(`https://ruokalistatpalmia.blob.core.windows.net/main/AromiMenusJsonData`, (resp) => {
      let data = ''
      resp.on('data', (chunk) => {
        data += chunk
      });
      resp.on('end', () => {
        resolve(data)
      });
    }).on("error", (err) => {
      reject(err.message)
    })
  })

}

/**
* Get food for a particular school.
* @param {string} school - The UID of the school.
*
* @example
* const koulusafkapi = require('kouluruoka-api');
*
* async function main() {
*  console.log(await koulusafkapi.foodInSchool('80b1081a-720c-eb11-8143-00215a9b975d'))
* }
* main()
*/
exports.foodInSchool = async function (school) {
  return new Promise((resolve, reject) => {
    https.get(`https://ruokalistatpalmia.blob.core.windows.net/menu/${school}`, (resp) => {
      let data = ''
      resp.on('data', (chunk) => {
        data += chunk
      });
      resp.on('end', () => {
        resolve(data)
      });
    }).on("error", (err) => {
      reject(err.message)
    })
  })
}
