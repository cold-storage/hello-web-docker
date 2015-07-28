## hello-web-docker

Dockerfile of johndstein/hello-web published to the public
[Docker Registry](https://registry.hub.docker.com/u/johndstein/hello-web/).

Spins up a web app that says hello with host and port info.

### Running the Image

    $ docker run -d -p 1337:1337 johndstein/hello-web

### Usage

    $ curl localhost:1337
    <h1>http://3c9cc49ab61f:1337 says hello!</h1>

If you would like to display the hostname of the host instead of the docker 
image, run like this. You can specify any port you like. 1337 is the default.

    $ docker run -d --net=host johndstein/hello-web /data/index.js 1337

Now you get the actual hostname.

    $ curl localhost:1337
    <h1>http://abccorp.local:1337 says hello!</h1>
