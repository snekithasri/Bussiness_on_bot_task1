const {Client} = require('pg')

const client = new Client({
 connectionString: "postgres://rfwsihqruvyizk:7e64561ae5e61acb5dbf12abac6976d930ba0ca475d62e44ce6be46dd97e632a@ec2-54-204-56-171.compute-1.amazonaws.com:5432/d7hookt0igd89o",
 ssl: {
 rejectUnauthorized: false
 }
});

module.exports = client
