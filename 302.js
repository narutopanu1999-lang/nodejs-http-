
import http from 'node:http';

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (req.url === '/' && req.method === 'GET') {
    res.end(`
      <form method="POST" action="/submit">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <button type="submit">Submit</button>
      </form>
    `);
    return;
  }

  if (req.url === '/submit' && req.method === 'POST') {
    let body = '';

    for await (const chunk of req) {
      body += chunk;
    }

    const formData = new URLSearchParams(body);
    const name = formData.get('name') || 'Guest';

    res.statusCode = 303;
    res.setHeader(
      'Location',
      `/message?name=${encodeURIComponent(name)}`
    );
    res.end();
    return;
  }

  if (req.url.startsWith('/message') && req.method === 'GET') {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const name = url.searchParams.get('name') || 'Guest';

    // Escape user input before inserting it into HTML
    const safeName = name.replace(/[&<>"']/g, char => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[char]);

    res.end(`<h1>${safeName}!</h1>`);
    return;
  }

  res.statusCode = 404;
  res.end('<h1>404 - Not Found</h1>');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
