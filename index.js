// this is the entry point for the server

const app = require('./src/server/app');

const PORT = process.env.PORT || 8000;

console.log(`server listening on port ${PORT}`);
app.listen(PORT); 