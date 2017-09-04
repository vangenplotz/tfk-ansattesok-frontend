[![Build Status](https://travis-ci.org/vangenplotz/tfk-ansattesok-frontend.svg?branch=master)](https://travis-ci.org/vangenplotz/tfk-ansattesok-frontend)
[![Greenkeeper badge](https://badges.greenkeeper.io/vangenplotz/tfk-ansattesok-frontend.svg)](https://greenkeeper.io/)

# Telemark Fylkeskommune, Web

[![Greenkeeper badge](https://badges.greenkeeper.io/vangenplotz/tfk-ansattesok-frontend.svg)](https://greenkeeper.io/)

## Oppgave-forståelse/løsning
Vi har valgt å levere frontend, backend og drift.

Frontend er forsøkt utviklet i samme uttrykk som hjemmesiden til Telemark fylkeskommune, for å gi en helhet.

Både frontend og backend kjører på [Now.sh](https://now.sh). 

Data-lagring og søk foregår i `ElasticSearch` for å kunne utnytte muligheter som fasettering, paginering og bedre søk. 

Det forutsettes at det finnes en primærbase som kan seede ElasticSearch med korrekte data.


## Teknologivalg

* React og Redux som state management-bibliotek.
* Webpack som bundler.
* Semantic UI for frontend
* Hele løsningen er skrevet i ES6-syntaks med elementer av ES7 (object spread, async/await)
* [hapi.js](https://hapijs.com/) som applikasjonsserver

## Drift

Løsningen kjører på [now.sh](https://now.sh), som automatisk tar hånd om reverse proxy og SSL.

Tjenestene overvåkes med [StatusCake](https://statuscake.com) og sender varsler til Slack og E-post. Tjenestene anses ikke som viktig nok til å varsle på SMS.

Deployment gjøres automatisk av [Travis](https://travis-ci.org)

## Begrensninger
* ElasticSearch og Backend kjører i forskjellige verdensdeler, dette medfører unødvendig lang responstid. 
I et reelt case ville de kjørt nærmere hverandre.

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