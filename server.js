const { createServer } = require("node:http");
const path = require("path");
const fs = require("fs");
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

  //creat object of all content types

  const content_types = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/js",
    ".jpg": "image/jpg",
    ".png": "image/png",
   ".gif": "image/gif",
    ".svg": "image/svg"
  };

  //content_types[file_ext]  = is use to send the content type to the brouser like html,css,js...etc

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

  //"User ne jo URL request kiya hai (req_url), uske according html_pages object se corresponding HTML page ka content ya file name ya path nikaal lo."
 const html_page = html_pages[req_url];
  // console.log(`Html Page ${html_page}`);

  if (html_page) {
    const home_page = path.join(__dirname,html_page);
     fs.readFile(home_page, (err,data) => {  

      if (err) {
        res.setHeader("Content-Type", `${content_type}`);
        res.statusCode = 404;
        res.end("<h1> Error 404 page is not found </h1>");
      } 
      
      else {
          data=data.toString() //local scope and global , toString is used because data is rinning in buffering and common head in not replaceing 
          const common_header_page= path.join(__dirname, '/views/common_head.html');
          console.log(common_header_page)
          fs.readFile(common_header_page,(err1,commonhead)=>{
            if(err1)
            {
              res.setHeader('Content-Type','text/plain');
              res.statusCode=404;
              res.end('Error common-head is nor found')
            }

            else{
            console.log(commonhead);
            
            data=data.replace('[common_head]',commonhead.toString());  //replace is use to common_head in all pages
  
            }
          });

          
           //common menu part start
           //give path to common manu html page

           const common_menu_page= path.join(__dirname,'/views/common_menu.html');
           fs.readFile(common_menu_page,(err3,commonmenu)=>{

            if(err3)
            {
              res.setHeader('Content-Type',`${content_type}`);
              res.statusCode= 404;
              res.end('Error 404 menu is not found');

            }
            else{
              data=data.replace('[common_menu]',commonmenu.toString());
              
            }

          });

          //common footer part start
          //give path to common footer page
            const common_footer_page= path.join(__dirname,'/views/common_footer.html')
           fs.readFile(common_footer_page,(err2,commonfooter)=>{
            if(err2)
            {
              res.setHeader('Content-Type',`${content_type}` );
              res.statusCode= 404;
              res.end('Error 404 footer is not found')
            }

            else
            {
              data=data.replace('[common_footer]' ,commonfooter.toString());
               res.setHeader('Content-Type',`${content_type}`);
              res.statusCode = 200;
              res.end(data);
       
            }
           }); 

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
