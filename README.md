# spectral-lab

## Project Docs
See [HERE!](https://scrapbox.io/frontier-of-music/Project_Starling_Docs_Main_Page)

## Development
### Project setup
```
yarn install:all
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```
Compiled files will be placed in `./projects/spectral_extractor/node_content/dist`

## Build M4L devices
See [here](https://scrapbox.io/frontier-of-music/WIP:_How_to_build_M4L_devices).

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Remove all caches
Max automatically generates various cache files, which causes unwanted side effects.  
To remove them, take the following step.

1. Make `config.json` file at root, and set the `cacheDirs` property as Array.
`config.json` will look like below.
```json
{
  "cacheDirs": [
    "/Users/UserName/Library/Application Support/Cycling '74/Max 8/Settings/temp64-live/mxt", 
    "/Users/UserName/Documents/Max 8/Max for Live Devices", 
    "/Users/UserName/.Trash",
  ]
}
```
2. Run script
```
yarn run rm-cache
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).