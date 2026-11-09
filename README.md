# Week 6: Asynchronous JavaScript

## Author
- **Name:** Faith Mutisya
- **GitHub:** [@fairyfaiyth](https://github.com/fairyfaiyth)
- **Date:** November 9, 2026

## Project Description
A Weather Dashboard that uses the OpenWeatherMap API, plus my Week 6 practice on callbacks, Promises, async/await and fetch.

## Technologies Used
- HTML5
- CSS3
- JavaScript (async/await, Fetch API, localStorage)
- OpenWeatherMap API
- GitHub Actions and GitHub Pages

## Features
- Search weather by city (button or Enter)
- Temperature, feels like, humidity, wind, pressure and icon
- Loading state and clear error messages (unknown city, no internet)
- Last 5 searches saved in localStorage, click to search again

## How to Run
1. Clone this repository
2. Copy `config.example.js` to `config.js` and add your OpenWeatherMap key
3. Run `python -m http.server 8000` and open `http://localhost:8000`

`config.js` is git-ignored, so the key is never committed.

## Lessons Learned
Callbacks, Promises, async/await, Promise.all and allSettled, fetch with response.ok, and keeping API keys out of git.

## Challenges Faced
Fixing Termux setup errors, a GitHub token missing the workflow scope, and pasting long files on a phone.

## Live Demo
[View Live Demo](https://fairyfaiyth.github.io/iyf-s12-week-06-fairyfaiyth/)
