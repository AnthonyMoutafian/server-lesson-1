const { createServer } = require("http");
const path = require("path");
const fs = require("fs").promises;
const http = require("http");

const createPath = (...args) => path.join(__dirname, args.join("/"));

const createFolderAndFiles = async () => {
  await fs.mkdir(createPath("app"));
  await fs.writeFile(createPath("app", "home.html"), "<h1>Home</h1>");
  await fs.writeFile(createPath("app", "about.html"), "<h1>About</h1>");
  await fs.writeFile(createPath("app", "contact.html"), "<h1>Contact</h1>");
  await fs.writeFile(createPath("app", "content.html"), "<h1>Content</h1>");
  await fs.writeFile(createPath("app", "error.html"), "<h1>Error</h1>");
};
const server = createServer( async (req, res) => {
  if (req.url === "/") {
    const data = await fs.readFile(createPath("app", "home.html"), "utf-8");
    res.write(data);
    res.end()
  } else if ((req.url === "/about")) {
    const data = await fs.readFile(createPath("app", "about.html"), "utf-8");
    res.write(data);
    res.end()
  } else if (req.url === "/contact") {
    const data = await fs.readFile(createPath("app", "contact.html"), "utf-8");
    res.write(data);
    res.end()
  } else if (req.url === "/content") {
    const data = await fs.readFile(createPath("app", "content.html"), "utf-8");
    res.write(data);
    res.end()
  } else {
    const data = await fs.readFile(createPath("app", "error.html"), "utf-8");
    res.write(data);
    res.end()
  }
});

const startServer = async () => {
  await createFolderAndFiles();

  server.listen(3000, (err) => {
    err ? console.log(err) : console.log("Server Is Running");
  });
};

startServer();