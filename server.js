const { createServer } = require("node:http");
const path = require("path");
const fs = require("fs");
// const { join } = require("node:path");
// const { error } = require("node:console");
const hostname = "127.0.0.1";
const port = 3500;

const server = createServer((req, res) => {
  const req_url = req.url;
  const requested_file_path = path.join(__dirname, req_url);
  const file_ext = path.extname(requested_file_path);
  console.log(`file url ${req_url}`);
  console.log(`req file path ${requested_file_path}`);
  console.log(`file ext ${file_ext}`);
  
  // res.setHeader("Content-Type", "text/plain");
  const content_types = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/js",
    ".jpg": "image/jpg",
    ".png": "image/png",
   ".gif": "image/gif",
    ".svg": "image/svg"
  };

  const content_type = content_types[file_ext];

  const html_pages = {
    "/": "/views/index.html",
    "/about": "/views/about.html",
    "/blog": "/views/blog.html",
    "/contact": "/views/contact.html",
    "/projects": "/views/projects.html",
    "/project-details": "/views/project-details.html",
    "/blog-details": "/views/blog-details.html"
  };
  const html_page = html_pages[req_url];
  console.log(`Html Page ${html_page}`);

  if (html_page) {
    const home_page = path.join(__dirname, html_page);
    // res.setHeader('Content-Type',`${content_type}`)
    var page = fs.readFile(home_page, (err, data) => {
      if (err) {
        res.setHeader("Content-Type", `${content_type}`);
        res.statusCode = 404;
        res.end("<h1> Error 404 page is not found </h1>");
      } else {
        res.setHeader("Content-Type", `${content_type}`);
        res.statusCode = 200;
        res.end(data);
      }
    });


  }

   else if (req_url.includes("assets/css")) {
        // var home= path.join('Content-Type','text/css')

    var page = fs.readFile(requested_file_path, (err, data) => {
      if (err) {
        res.setHeader("Content-Type", `${content_type}`);
        res.statusCode = 404;
        res.end("<h1> Error 404 page css is not found </h1>");
      } else {
        res.setHeader("Content-Type", `${content_type}`);
        res.statusCode = 200;
        res.end(data);
      }
    });


  } else if (req_url.includes("assets/js")) {
    var page = fs.readFile(requested_file_path, (err, data) => {
      if (err) {
        res.setHeader("Content-Type", `${content_type}`);
        res.statusCode = 404;
        res.end("<h1> Error 404 page js is not found </h1>");
      } else {
        res.setHeader("Content-Type", `${content_type}`);
        res.statusCode = 200;
        res.end(data);
      }
    });


  } else if (req_url.includes("assets/images")) {
    var page = fs.readFile(requested_file_path, (err, data) => {
      if (err) {
        res.setHeader("Content-Type", `${content_type}`);
        res.statusCode = 404;
        res.end("<h1> Error 404 page images is not found </h1>");
      } else {
        res.setHeader("Content-Type", `${content_type}`);
        res.statusCode = 200;
        res.end(data);
      }
    });


  }
   else if (req_url.includes("assets/scss")) {
    var page = fs.readFile(requested_file_path, (err, data) => {
      if (err) {
        res.setHeader("Content-Type", `${content_type}`);
        res.statusCode = 404;
        res.end("<h1> Error 404 page scss is not found </h1>");
      } else {
        res.setHeader("Content-Type", `${content_type}`);
        res.statusCode = 200;
        res.end(data);
      }
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`server is running at http://${hostname}:${port}`);
});
