# Emotion Diary — Week 9: Data with JavaScript

## Data Type
This project displays mood entries from my “Emotion Diary.”  
Each entry includes:
- Date
- Mood (emoji + text)
- Note (short reflection)

## How JavaScript Creates the HTML
The `script.js` file defines an array of mood entries.  
Using a `forEach()` loop, JavaScript dynamically generates HTML elements (`<article>`, `<h3>`, `<p>`) for each entry and appends them to the container `#entries` inside `record.html`.  
When a new entry is saved, it is added to the array and appears immediately without reloading the page.

## Challenges
- Connecting the new JavaScript file correctly to the HTML file  
- Making the dynamically created cards display properly in grid layout  
- Making sure content updates when new entries are added  

## Repository Link
[https://github.com/gt2561-debug/emotion-diary](https://github.com/gt2561-debug/emotion-diary)

## Live Site (GitHub Pages)
[https://gt2561-debug.github.io/emotion-diary/](https://gt2561-debug.github.io/emotion-diary/)
