# OpenVideo

This application is similar to YouTube but without ads. It uses **Invidious** as a backend, and I created my own GUI using **React**.

## Features
- Search for videos
- Play a video
- Get recommendations for a video
- Play recommended videos by clicking on them

## UI
The UI is designed by me using the Caterpchine Mocha theme.

## Tools Used
- React
- Vite
- CSS

## What I Learned from This Project
I learned the basics of React. While working on this project, I learned about useState and React Router.


## Requirements
- Node.js
- npm
- self hosted invidous instance

## Installation

Clone the repo
```bash
git clone https://github.com/AndreSmalheer/OpenVideo
```

Go into the project folder
```bash
cd OpenVideo
```

Install the modules
```bash
npm install
```

Change the config in /src/config/config.json
```bash
{
  "apiUrl": "http://locahost:3000"
}

```

Run the server
```bash
npm run dev
```
