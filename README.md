[![Build Status](https://travis-ci.org/vangenplotz/tfk-ansattesok-frontend.svg?branch=master)](https://travis-ci.org/vangenplotz/tfk-ansattesok-frontend)
# Telemark Fylkeskommune, Web

## Development

### Info
Unless stated otherwise, all terminal commands are expected to be executed from the project root.

### Prerequisites
You must have Docker and Docker-Compose installed.

### Installation
Run `$ docker-compose -p telemark build` in your terminal to build the image(s).

**Note!** If you change dependencies in `package.json` you will need to rebuild the container image(s).

### Running the application

Run `$ docker-compose -p telemark up` in your terminal to start the application.