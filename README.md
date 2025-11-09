# Emotion Diary — Week 9: Data with JavaScript

## Data Type
This project displays mood entries from my personal “Emotion Diary.”  
Each entry includes:
- Date
- Mood (emoji + text)
- Note (short reflection)

## How JavaScript Creates the HTML
I created an array of objects inside `script.js`.  
Each object contains the data for one mood entry.  
Using the `forEach()` loop, JavaScript dynamically generates HTML elements (`<article>`, `<h3>`, `<p>`) for every entry and appends them into a container (`#entries`) inside `record.html`.  
When a new entry is saved, it is also added to the array and instantly displayed without reloading the page.

## Challenges
- Linking the new JavaScript file correctly to the HTML file.  
- Making sure the loop dynamically clears and re-renders the content.  
- Adjusting CSS so that the generated cards align properly in the grid layout.  

## Repository Link
[https://github.com/gt2561-debug/emotion-diary](https://github.com/gt2561-debug/emotion-diary)

## Live Site (GitHub Pages)
[https://gt2561-debug.github.io/emotion-diary/](https://gt2561-debug.github.io/emotion-diary/)
