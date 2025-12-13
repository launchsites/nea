import { Client } from 'pg'

export async function queryDatabase(sql: string) {
  const databaseUrl = process.env.DATABASE_URL
  const client = new Client({ connectionString: databaseUrl })

  try {
    await client.connect()
    const result = await client.query(sql)
    return result.rows
  } finally {
    await client.end()
  }
}



// queryDatabase()
//   .then(rows => console.log(rows))
//   .catch(err => console.error(err))