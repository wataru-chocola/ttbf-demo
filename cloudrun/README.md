# ttfb-demo for cloudrun

Simple SSR server to run on Cloud Run.

## Build server

```
$ npm run build
```

## Run server locally

```
$ npm run start
```

## Build and Upload image

```
$ gcloud builds submit --tag <url>
```

## Deploy image on Cloud Run

```
$ gcloud run deploy <service> --image <url> --region <region>
```
