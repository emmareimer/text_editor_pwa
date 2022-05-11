# text_editor_pwa
Text editor for creating snippets of code that works online and offline

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [Sources](#sources)

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Installation
### For the code:
1. Clone repo
2. Command `npm i`
5. Command `npm start`

### For the offline app:
1. Select "Install" in the application in the browser and follow the device prompts to install to your local device.

## Usage
The app is a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

To use the text editor, type in to the provided text area and to save the text, select out of the text editor (You can select the header in blue.) To download the app to be used offline, select "Install" and follow the prompts to install the app.

The deployed application can be found here:
[Link to Deployed App](https://text-editor-pwa-er.herokuapp.com/)

## Questions?

Contact Info:

Github profile: emmareimer

Email: emma@beinproximity.com

## Sources, Libraries, and Languages
Nodejs, Javascript, Indexedb, Webpack, Manifest, Codemirror, IDB