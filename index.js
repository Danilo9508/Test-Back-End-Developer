'use strict';
const { PORT } = require('./src/utils/config');
const server = require('./server');

server.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
});
