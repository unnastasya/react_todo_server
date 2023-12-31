const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || "3000";

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
	jsonServer.rewriter({
		"/api/*": "/$1",
	})
);
server.use(router);

server.listen(port, () => {
	console.log("JSON server is running");
});

module.exports = server;
