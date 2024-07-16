module.exports = {
    development: {
      username: process.env.NEXT_PUBLIC_DB_USERNAME || 'root',
      password: process.env.NEXT_PUBLIC_DB_PASSWORD || '',
      database: process.env.NEXT_PUBLIC_DB_NAME || 'sample_db',
      host: process.env.NEXT_PUBLIC_DB_HOST || 'localhost',
      port: process.env.NEXT_PUBLIC_DB_PORT || 3306,
      dialect: 'mysql',
    },
    production: {
        username: process.env.NEXT_PUBLIC_DB_USERNAME || 'root',
        password: process.env.NEXT_PUBLIC_DB_PASSWORD || '',
        database: process.env.NEXT_PUBLIC_DB_NAME || 'sample_db',
        host: process.env.NEXT_PUBLIC_DB_HOST || 'localhost',
        port: process.env.NEXT_PUBLIC_DB_PORT || 3306,
        dialect: 'mysql',
      }
  };
  