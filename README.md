# OUNCH-NEXT

## Requirements
- Node `20.0^`
- npm `10.0^`

## Configuration 
- Create a database on MySQL - name is `sample_db` <i> desired name </i>
- Copy `.env.example` to `.env` 
Set the env variables according to MySQL credentials
```
NEXT_PUBLIC_DB_HOST       = "localhost"
NEXT_PUBLIC_DB_PORT       = "3306"
NEXT_PUBLIC_DB_USERNAME   = "root"
NEXT_PUBLIC_DB_PASSWORD   = ""
NEXT_PUBLIC_DB_NAME       = "sample_db"
```

## Getting Started
### Installation packages
Run the following command on terminal - project root path
```bash
npm i
```
### Running Migration 
```
npx sequelize-cli db:migrate 
```
### Running Data seeding 
This will seed faker data to database table for *200 records*
Can adjust the records in `path-to-project/seeders/fake-items.js` file. 
```
npx sequelize-cli db:seed:all
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
You can contact me : [Aung Kyaw Htwe](dev.aungkyawhtwe@gmail.com) if you have any quries for more details.
