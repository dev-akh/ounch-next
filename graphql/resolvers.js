const db = require('@/models');
const { Op } = require('sequelize');

const resolvers = {
  Query: {
    items: async (_, args) => {
      const where = {};
        if (args.keywords) {
          where[Op.or] = [
            {
              name: {
                [Op.like]: `%${args.keywords}%`
              }
            },
            {
              description: {
                [Op.like]: `%${args.keywords}%`
              }
            }
          ];
        }
      
      const page = args.page || 1;
      const pageSize = args.pageSize || 20;
      const offset = (page - 1) * pageSize;
      const limit = pageSize;

      const { count, rows } = await db.Item.findAndCountAll({
        where,
        offset,
        limit
      });

      return {
          items: rows,
          total: count,
        };
    },
    item: async (_, args) => {
      try {
        const item = await db.Item.findByPk(args.id);
        return item;
      } catch (error) {
        console.error('Error fetching item:', error);
        throw new Error('Failed to fetch item');
      }
    }
  },
};

module.exports = resolvers;
