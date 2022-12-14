const http = require("http");
const fs = require("fs");

let home_Content = "";
let project_Content = "";
let registration_Form_Content = "";

fs.readFile("./home.html", (err, home) => {
  if (err) {
    throw err;
  }
  home_Content = home;
});

fs.readFile("./project.html", (err, project) => {
  if (err) {
    throw err;
  }
  project_Content = project;
});

fs.readFile("./registration.html", (err, registrationForm) => {
  if (err) {
    throw err;
  }
  registration_Form_Content = registrationForm;
});

http
  .createServer(function (request, response) {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "./project":
        response.write(project_Content);
        response.end();
        break;
      case "./registration":
        response.write(registration_Form_Content);
        response.end();
        break;
      default:
        response.write(home_Content);
        response.end();
        break;
    }
  })
  .listen(5000);
