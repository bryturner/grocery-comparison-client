# Compare Grocery Prices in Switzerland
This app lets the user compare grocery prices from several of the primary grocery stores in Switzerland. The products are displayed by category and the store in which they can be found. Users can also save products on a grocery list or favorites list. 

## Features
The user has the choice of selecting a category of grocery after which the products are sorted and displayed based on the store in which they can be found. They can then use a search input to filter groceries based on the product title. They may also choose to click a compare button on a particular product which matches that product title with other products titles based on similarity and filters out anything that doesn't match.  

After the user finds a product they like, they may choose to add it to their grocery list or favorites list. Both lists sort and display products based on the product's store name to help the user see which products they will find in which stores and are stored in local storage. If the user wishes to visit the product page or store website, links are provided for both.

## Motivation
Due to the rising cost of groceries and overall high prices for groceries in Switzerland, a friend asked me to build an app that would compare these prices to help them find the best deals. As many of the grocery stores are within walking distance of each other, saving even a small amount of money would be worth the time to use the app.

## Technologies
- React 
- JavaScript
- CSS
- React-testing-library
- Jest 
- Styled-components
- Puppeteer 
- Node.js 
- MongoDB 

## More About the Project
I built this project using modern React hooks: useState, useCallback, useReducer, useContext, and useEffect. I practiced handling errors and testing front-end functionality as well as fetching data from a relational database (MongoDB). While structuring the database schema, I learned about storage effeciency best practices and indexing for quicker document lookup. 

In order to collect the grocery data, I used the Puppeteer headless browser to gather, format and save the data into a MongoDB database. To do this I had to use a lot of boilerplate code due to the different structures of the various grocery store websites. To check out the not so pretty code that is on occassion error prone, [click here](https://github.com/bryturner/ch-grocery-web-scraper)

## Possible Future Features
- User can share the list with another person or save to their phone for reference while in the grocery store.
- A 'counter' added to each product based on how many user favorites lists they're on affecting the order in which they are displayed based on popularity.
- Sale or price change notifications could be sent to the user if an item is on favorites/grocery list.
- Store locator to find stores that are closest to each other.
- Price comparison indicator that shows the user the cheapest price through some kind of visual highlight.

## Author
**Bryan Turner**
- [My LinkedIn Profile](https://www.linkedin.com/in/bryanturnerdev/)
