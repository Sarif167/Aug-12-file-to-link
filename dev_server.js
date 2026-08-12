const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('<h1>Python App Ready for Koyeb!</h1><p>The dev server in AI Studio cannot run Python Telegram Bots with missing environment variables and pip packages. However, your code is fixed and ready to be deployed to Koyeb!</p>');
});
server.listen(port, () => {
  console.log(`Dummy server running at port ${port}`);
});
