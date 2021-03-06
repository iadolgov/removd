const nock = require('nock');
const path = require('path');

const source = path.join(__dirname, '..', '/assets/fixtures/');
nock.disableNetConnect();

nock('https://images.unsplash.com:443', {"encodedQueryParams":true})
  .get('/photo-1504455583697-3a9b04be6397')
  .query({"ixlib":"rb-1.2.1","ixid":"eyJhcHBfaWQiOjEyMDd9","auto":"format","fit":"crop","w":"5184","q":"80"})
  .replyWithFile(200, source + 'photo-1504455583697-3a9b04be6397-5184.jpg', [ 'Cache-Control',
  'public, max-age=315360000',
  'Server',
  'imgix',
  'X-Imgix-ID',
  'ab908f1b081792d105726c318d439dcbe98337e1',
  'Content-Length',
  '4415747',
  'Date',
  'Sun, 03 Mar 2019 00:00:01 GMT',
  'Connection',
  'close',
  'Age',
  '3001',
  'Accept-Ranges',
  'bytes',
  'Set-Cookie',
  'ugid=784fe7d9369fa1e205a6e62c0a9a69945191978;domain=.unsplash.com;path=/;expires=Sun, 03 Mar 2019 00:00:01 GMT',
  'Content-Type',
  'image/jpeg',
  'Access-Control-Allow-Origin',
  '*',
  'X-Served-By',
  'cache-lax8637-LAX, cache-lhr6323-LHR',
  'X-Cache',
  'MISS, HIT',
  'Vary',
  'Accept, User-Agent' ]);


nock('https://api.remove.bg:443', {"encodedQueryParams":true})
  .post('/v1.0/removebg', {"image_url":"https://images.unsplash.com/photo-1504455583697-3a9b04be6397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=5184&q=80","channels":"rgba","bg_color":"00000000","format":"auto","type":"auto","size":"4k"})
  .replyWithFile(200, source + 'photo-1504455583697-3a9b04be6397-3873.png', [ 'Access-Control-Allow-Origin',
  '*',
  'X-Width',
  '3873',
  'X-Height',
  '2582',
  'X-Max-Width',
  '3873',
  'X-Max-Height',
  '2582',
  'X-Type',
  'person',
  'X-Credits-Charged',
  '8',
  'Content-Type',
  'image/png',
  'Date',
  'Sun, 03 Mar 2019 00:00:01 GMT',
  'Content-Length',
  '9529691',
  'Via',
  '1.1 google',
  'Alt-Svc',
  'clear',
  'Connection',
  'close' ]);

nock('https://images.unsplash.com:443', {"encodedQueryParams":true})
  .get('/photo-1504455583697-3a9b04be6397')
  .query({"ixlib":"rb-1.2.1","ixid":"eyJhcHBfaWQiOjEyMDd9","auto":"format","fit":"crop","w":"5184","q":"80"})
  .replyWithFile(200, source + 'photo-1504455583697-3a9b04be6397-5184.jpg', [ 'Cache-Control',
  'public, max-age=315360000',
  'Server',
  'imgix',
  'X-Imgix-ID',
  'ab908f1b081792d105726c318d439dcbe98337e1',
  'Content-Length',
  '4415747',
  'Date',
  'Sun, 03 Mar 2019 00:00:01 GMT',
  'Connection',
  'close',
  'Age',
  '3001',
  'Accept-Ranges',
  'bytes',
  'Set-Cookie',
  'ugid=784fe7d9369fa1e205a6e62c0a9a69945191978;domain=.unsplash.com;path=/;expires=Sun, 03 Mar 2019 00:00:01 GMT',
  'Content-Type',
  'image/jpeg',
  'Access-Control-Allow-Origin',
  '*',
  'X-Served-By',
  'cache-lax8637-LAX, cache-lhr6323-LHR',
  'X-Cache',
  'MISS, HIT',
  'Vary',
  'Accept, User-Agent' ]);

nock('https://api.remove.bg:443', {"encodedQueryParams":true})
  .post('/v1.0/removebg', {"image_url":"https://images.unsplash.com/photo-1504455583697-3a9b04be6397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=5184&q=80","channels":"rgba","bg_color":"00000000","format":"auto","type":"auto","size":"4k"})
  .replyWithFile(200, source + 'photo-1504455583697-3a9b04be6397-3873.png', [ 'Access-Control-Allow-Origin',
  '*',
  'X-Width',
  '3873',
  'X-Height',
  '2582',
  'X-Max-Width',
  '3873',
  'X-Max-Height',
  '2582',
  'X-Type',
  'person',
  'X-Credits-Charged',
  '8',
  'Content-Type',
  'image/png',
  'Date',
  'Sun, 03 Mar 2019 00:00:01 GMT',
  'Content-Length',
  '9529691',
  'Via',
  '1.1 google',
  'Alt-Svc',
  'clear',
  'Connection',
  'close' ]);

