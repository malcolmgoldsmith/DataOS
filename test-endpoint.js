// Run with: node test-endpoint.js

const https = require('https');

const endpoint = 'https://dataos.naea1.uds-dev.lenovo.com/lens2/api/public:udc-sm/v2/graphql';
const token = 'bWFpblQuMTkwNjkzYjUtZmEyYy00YzA5LWJhMjItYWM2OGM0YmZhODQz';

const query = `{
  __schema {
    queryType { name }
    types { name }
  }
}`;

const postData = JSON.stringify({ query });

const url = new URL(endpoint);
const options = {
    hostname: url.hostname,
    port: 443,
    path: url.pathname,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Length': Buffer.byteLength(postData)
    }
};

console.log('Testing endpoint:', endpoint);
console.log('---');

const req = https.request(options, (res) => {
    console.log('Status:', res.statusCode, res.statusMessage);
    console.log('---');

    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            console.log('Response:');
            console.log(JSON.stringify(json, null, 2));
        } catch (e) {
            console.log('Raw response:', data);
        }
    });
});

req.on('error', (e) => {
    console.error('Error:', e.message);
});

req.write(postData);
req.end();
