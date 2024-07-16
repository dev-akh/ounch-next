const { faker } = require('@faker-js/faker');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const items = [];
        const batchSize = 50;
        
        for (let i = 0; i < 200; i++) {
            items.push({
                name: faker.company.name(),
                description: faker.lorem.sentences(14),
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            if (items.length === batchSize) {
                await queryInterface.bulkInsert('Items', items, {});
                items.length = 0;
            }
        }
        if (items.length > 0) {
            await queryInterface.bulkInsert('Items', items, {});
        }
        },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Items', null, {});
    },
};
