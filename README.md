# Load balancer test

A test resource for load balancing :)

## Reproduce

Add the nginx.conf to nginx and start it

Enter commands below in two different Powershells to start the server on the different ports
```bash
$env:PORT=8081; node app.js
$env:PORT=8082; node app.js
```

Or if u want to use the Command Prompt:
```bash
set PORT=8081 && node app.js
set PORT=8082 && node app.js  
```

Create a curl get request with the command prompt or with a tool as postman

For command prompt:
```bash
curl 127.0.0.1:8080/hello
```