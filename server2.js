const { createServer } = require("node:http");
const path = require("path");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 4100;

var page_header=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>


    <link rel="stylesheet" href="card.css" />

    <link
      href="https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=M+PLUS+Rounded+1c:wght@300;400;500;700&family=Manufacturing+Consent&family=Permanent+Marker&display=swap"
      rel="stylesheet"
    />

    <link
      href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700&family=Manufacturing+Consent&family=Permanent+Marker&display=swap"
      rel="stylesheet"
    />



  </head>`;

  var page_nav= `  <body class="backcolor">
    <header>
      <div class="main-nav">
        <div class="wish">
          <h1>SEND WISH</h1>
        </div>

        <nav>
          <li class="main-list">
            <ol>
              <a href="card.html">Home</a>
            </ol>
            <ol>
              <a href="pricing.html">Pricing</a>
            </ol>
            <ol>
              <a href="">Support</a>
            </ol>
            <ol>
              <a href="signin.html" target="_blank">Login</a>
            </ol>
          </li>
        </nav>
      </div>
      <div>
        <li class="order-list">
          <ol>
            <a href="birthday.html">
              <div>
                <img src="birthday.svg" alt="" class="nav-img" />
                Birthday
              </div>
            </a>
          </ol>

          <ol>
            <a href="farewell.html">
              <div>
                <img src="bye-bye.webp" alt="" class="nav-img" />
                Farewell
              </div>
            </a>
          </ol>

          <ol>
            <a href="baby.html">
              <div>
                <img src="baby-shower.svg" alt="" class="nav-img" />
                Baby shower
              </div>
            </a>
          </ol>

          <ol>
            <a href="thanku.html">
              <div>
                <img src="thank-you.webp" alt="" class="nav-img" />
                Thank You
              </div>
            </a>
          </ol>

          <ol>
          <a href="sympathy.html">
            <div>
              <img src="sympathy.svg" alt="" class="nav-img" />
              Sympathy
            </div>
          </a>
           </ol>

          <ol>
            <input
              type="text"
              name="text"
              placeholder="Search your occasion.... "
            />
          </ol>
        </li>
      </div>
    </header>
`;

const server = createServer((req, res) => {
  res.setHeader('content-type','text/html');
  const requested_file_path = path.join(__dirname, req.url);
  // const file_ext = path.extname(requested_file_path);
  console.log(`path ${requested_file_path}`);

  
  if (req.url == "/") {
    res.statusCode = 200;
    res.end(`
      ${page_header}
      ${page_nav}
          <main class="stars">
      <div class="gretting-card">
        <div class="service">
          <h1>Welcome to Our Card Services</h1>

          <p>
            <i class="fa-solid fa-circle-check"></i> Welcome to the Future of
            Card Services — Simple. Secure. Smart.
          </p>

          <p>
            <i class="fa-solid fa-circle-check"></i> Smart Cards, Smarter
            Services - Welcome to Excellence
          </p>

          <p>
            <i class="fa-solid fa-circle-check"></i> Unlock a World of Premium
            Card Services - Smart, Secure, and Effortless.
          </p>
        </div>

        <div class="animation"></div>
      </div>

    
    </main>

    <section>
      <div class="occasion">
        <div>
          <h1>Group Card Occasions</h1>
        </div>

        <div class="main-group-card">
          <div>
            <a href="birthday.html">
              <div class="group-card">
                <img src="birthday-23.png" alt="" class="card-images" />
              </div>
            </a>
          </div>

          <div>
            <a href="farewell.html">
              <div class="group-card">
                <img
                  src="farewell-group-cards.png"
                  alt=""
                  class="card-images"
                />
              </div>
            </a>
          </div>

          <div>
            <a href="baby.html">
              <div class="group-card">
                <img src="baby-shower-cards.png" alt="" class="card-images" />
              </div>
            </a>
          </div>

          <div>
            <a href="milestone.html">
              <div class="group-card">
                <img src="milestone-birthday.png" alt="" class="card-images" />
              </div>
            </a>
          </div>

          <div>
            <a href="thanku.html">
              <div class="group-card">
                <img
                  src="thank-you-cover-image.png"
                  alt=""
                  class="card-images"
                />
              </div>
            </a>
          </div>

          <div>
            <a href="boss.html">
              <div class="group-card">
                <img src="office-card-cover.png" alt="" class="card-images" />
              </div>
            </a>
          </div>

          <div>
            <a href="pet.html">
              <div class="group-card">
                <img src="pet-birthday.jpg" alt="" class="card-images" />
              </div>
            </a>
          </div>

          <div>
            <a href="sympathy.html">
              <div class="group-card">
                <img
                  src="sympathy-cover-image.png"
                  alt=""
                  class="card-images"
                />
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>

    <section></section>
  </body>
</html>

    `);}

    else if (req.url=="/form"){
      res.statusCode=200;
      // res.setHeader('content-type','text/html');
      res.end(`
        ${page_header}
        ${page_nav}
            <div class="main-form">
      <h1>Enter Card Receiver Details</h1>
      <div class="main-lable">
        <div>
          <label for="name">Recipient Name</label>
        </div>

        <div>
          <input type="text" placeholder="Recipient Name" />
        </div>
      </div>

      <div class="main-lable">
        <div>
          <label for="birthday">Recipint Email</label>
        </div>

        <div>
          <input type="datetime" placeholder="Recipient Email" />
        </div>
      </div>

      <div class="main-lable">
        <div class="lab">
          <label for="">Card Title</label>
        </div>

        <div>
          <textarea
            id="comments"
            name="comments"
            placeholder="Sample Title: Happy Birthday dear"
          ></textarea>
        </div>
      </div>

      <div class="main-lable">
        <div>
          <label for="color">Chouse Color</label>
        </div>

        <div>
          <input type="color" id="colorPicker" name="colorPicker" />
        </div>
      </div>

      <h1>Enter Sender Details</h1>

      <div class="main-lable">
        <div>
          <label for="">Sender Name</label>
        </div>

        <div>
          <textarea
            id="comments"
            name="comments"
            placeholder="Sender Name"
          ></textarea>
        </div>
      </div>

      <div class="submit">
         <button >Submit</button>
       </div>
     
    </div>
  </body>
</html>


        `)}

         else if (req.url === '/style.css') {
        // Serve CSS
        fs.readFile(path.join(__dirname, 'style.css'), (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('CSS file not found.');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        });
    }

    else{
          res.statusCode=404;
          res.end(`404 error`)
        }

   

});

server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});
