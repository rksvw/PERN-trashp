const pool = require('./db');

const createUserSchema = async (username) => {
    const client = await pool.connect();
    try {
        //  Check if the schema exists
        const result = await client.query("SELECT EXISTS(SELECT 1 FROM pg_namespace WHERE nspname = $1)", [username]);
        const exists = result.rows[0].exists;

        // If the schema doesn't exist, create it
        if (!exists) {
            await client.query( `CREATE SCHEMA ${username}`);
        }
    } catch (err) {
        console.error('Error creating user schema: ', err.message);
        throw err.message;
    } finally {
        client.release();
    }
}

module.exports = {
    createUserSchema
}