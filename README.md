## hello-web-docker

Dockerfile of johndstein/hw published to the public
[Docker Registry](https://registry.hub.docker.com/u/johndstein/hw/).

Spins up a web app that displays docker host and port.

### Running the Image

    docker run -d -e PORT=1330 -p 1330:1330 johndstein/hw

### Usage

    $ curl localhost:1330
    hostname:port 9748a497d530:1330
