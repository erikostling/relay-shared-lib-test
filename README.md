# Test on sharing Relay components between apps

## To run
`npm install -g lerna`
`lerna bootstrap && lerna run build --scope=relay && lerna run start --scope=app`
`http://localhost:8080`