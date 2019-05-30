# m4l-mpe-tools

## Project Docs
See [HERE!](https://scrapbox.io/frontier-of-music/Project_Starling_Docs_Main_Page)

## Development
### Project setup
```
yarn
```
### Build M4L devices
See [here](https://scrapbox.io/frontier-of-music/WIP:_How_to_build_M4L_devices).

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
    "/Users/UserName/.Trash"
  ]
}
```
2. Run script
```
yarn run rm-cache
```
