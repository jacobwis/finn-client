const fs = require('fs');
const axios = require('axios');
const { introspectionQuery } = require('graphql');

(async () => {
  const res = await axios.post('http://localhost:3001/graphql', {
    query: introspectionQuery
  });

  const data = res.data.data;

  fs.writeFileSync('schema.json', JSON.stringify(data));
})();
