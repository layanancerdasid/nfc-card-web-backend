
const prisma = require("../src/core/config/db/index");

const process = require('node:process');
const cardSeeder = require("./seeder/cards.seeder");

const adminSeeder = require("../prisma/seeder/admins.seeder")

async function seed() {

    adminSeeder()
    cardSeeder()

}

seed().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
