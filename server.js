import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
  console.log(`http://localhost:${PORT}/contacts`);

  // Cron job to hit the URL every 12 minutes
  const time = 12 * 60 * 1000; // 12 minutes in milliseconds
  setInterval(async () => {
    try {
      const url = "https://json-server-contact-api.onrender.com/contacts?_sort=id&_order=desc";
      console.log(`Pinging ${url}...`);
      const response = await fetch(url);
      console.log(`Ping status: ${response.status}`);
    } catch (error) {
      console.error("Ping failed:", error.message);
    }
  }, time);
});

export default server;