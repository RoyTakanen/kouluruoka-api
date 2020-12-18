const koulusafkapi = require('./kouluruoka-api');

async function main() {
  console.log(await koulusafkapi.getSchools())
  console.log(await koulusafkapi.foodInSchool('80b1081a-720c-eb11-8143-00215a9b975d'))
}

main()
