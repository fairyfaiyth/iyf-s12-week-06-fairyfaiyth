# IYF Season 12 - Week 6: Asynchronous JavaScript

Weather Dashboard built with the OpenWeatherMap API, plus the Lesson 11 and 12 task files.

## How to Run

1. Copy `config.example.js` to `config.js`:
   `cp config.example.js config.js`
2. Open `config.js` and add your OpenWeatherMap API key.
3. Start a local server: `python -m http.server 8000`
4. Open `http://localhost:8000` in your browser.

`config.js` is git-ignored, so your key is never committed.

## Features

- Search weather by city
- Temperature, feels like, humidity, wind, pressure, icon
- Error messages for invalid city, bad key, and network problems
- Loading state
- Last 5 searches saved in localStorage (click to search again)

## Tasks

The `tasks/` folder has my solutions for Lessons 11 and 12 (callbacks, Promises, async/await, fetch, POST, search and filter).
