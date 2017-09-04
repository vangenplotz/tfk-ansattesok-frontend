[![Build Status](https://travis-ci.org/vangenplotz/tfk-ansattesok-frontend.svg?branch=master)](https://travis-ci.org/vangenplotz/tfk-ansattesok-frontend)
[![Greenkeeper badge](https://badges.greenkeeper.io/vangenplotz/tfk-ansattesok-frontend.svg)](https://greenkeeper.io/)

# Telemark Fylkeskommune, Web
###### Relaterte prosjekter
[https://github.com/vangenplotz/tfk-ansattesok-backend](https://github.com/vangenplotz/tfk-ansattesok-backend)

[![Greenkeeper badge](https://badges.greenkeeper.io/vangenplotz/tfk-ansattesok-frontend.svg)](https://greenkeeper.io/)

## Oppgave-forståelse/løsning
Vi har valgt å levere frontend, backend og drift.

Frontend er forsøkt utviklet i samme uttrykk som hjemmesiden til Telemark fylkeskommune, for å gi en helhet.

Både frontend og backend kjører på [Now.sh](https://now.sh). 

Data-lagring og søk foregår i `ElasticSearch` for å kunne utnytte muligheter som fasettering, paginering og bedre søk. 

Det forutsettes at det finnes en primærbase som kan seede ElasticSearch med korrekte data.


## Teknologivalg

* [ReactJS](https://facebook.github.io/react/) med [Redux](http://redux.js.org/) som state management-bibliotek.
* [Webpack](https://webpack.js.org/) som bundler.
* [Semantic UI](https://react.semantic-ui.com) for frontend
* [hapi.js](https://hapijs.com/) som applikasjonsserver
* [Caddy](https://caddyserver.com/) som frontend/asset-server
* Hele løsningen er skrevet i ES6-syntaks med elementer av ES7 (object spread, async/await)


## Drift

* Løsningen kjører på [now.sh](https://now.sh), som automatisk tar hånd om reverse proxy og SSL.

* Tjenestene overvåkes med [StatusCake](https://statuscake.com) og sender varsler til Slack og E-post. Tjenestene anses ikke som viktig nok til å varsle på SMS.

* Deployment gjøres automatisk av [Travis](https://travis-ci.org)



## Begrensninger
* ElasticSearch og Backend kjører i forskjellige verdensdeler, dette medfører unødvendig lang responstid. 
I et reelt case ville de kjørt nærmere hverandre.
* Frontend-server leveres med en egen Dockerfile for produksjon i stedet for å benytte (https://hub.docker.com/r/abiosoft/caddy/). Dette skyldes at `now.sh` bare supporterer 1 `EXPOSE`-port, mens Caddy-imaget har 3.

## Lokal utvikling

### Informasjon
Med mindre annet er spesifisert forventes det at alle terminal-kommandoer kjøres fra roten av prosjektet.

### Forutsetninger
For å kunne utvikle løsningen forventes det at man har [Docker](https://docker.com) og [Docker Compose](https://docs.docker.com/compose/) installert.

Det forventes at denne løsningen kommuniserer med følgende backend løsning: [https://github.com/vangenplotz/tfk-ansattesok-backend](https://github.com/vangenplotz/tfk-ansattesok-backend).

### Installasjon
Kjør `$ docker-compose -p telemark build` i terminalen for å bygge image(s).

**MERK!** Dersom du endrer dependencies i `package.json` må du rebuilde container image(s).

### Starte applikasjonen

Kjør `$ docker-compose -p telemark up` i terminalen for å starte applikasjonen.