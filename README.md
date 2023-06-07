# React Starter

## Environment

- React Version: 16.13.1
- Node Version: 14(LTS)
- Default Port: 8000

## Project Specifications

**Requirements:**

- The selected month in the dropdown filters the list of stocks so that only the stocks for that month show in the UI
- Clicking the sort button will sort the stocks listed by Profit from highest profit to lowest profit
- Calculate the Profit for each Stock item rounded to the nearest 2 decimal places
    - if the profit is in the positive it should show the ✅ icon and be green in color (`#1ba94c`)
    - if the profit is in the negative it should show the ❌ icon and be red in color (`red`)
    - Profit should be calculated on the difference between the `open` and `close` values for the individual stock rounded to the nearest 2nd decimal place
- **Total Profit** displayed at the bottom of the list of stocks should show the total amount of positive profit and for ONLY the stocks that are visible in the UI
- **Total Loss** displayed at the bottom of the list of stocks should show the total amount of negative profit and for ONLY the stocks that are visible in the UI

**Read Only Files**
- `src/App.css`
- `src/App.js`
- `src/App.test.js`
- `src/index.css`
- `src/index.js`
- `src/registerServiceWorker.js`


**Commands**
- run:
```bash
npm start
```
- install:
```bash
npm install
```
- test:
```bash
npm test
```

