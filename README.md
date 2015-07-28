## hello-web Dockerfile

Dockerfile of johndstein/hello-web published to the public
[Docker Registry](https://registry.hub.docker.com/u/johndstein/hello-web/).

Spins up a web app that says hello with host and port info.

### Running the Image

    docker run -d -p 1337:1337 johndstein/hello-web

### Usage

    $ curl localhost:1337
    <h1>http://tmpc1:1337 says hello!</h1>

