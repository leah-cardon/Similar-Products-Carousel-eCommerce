# Similar Products Carousel (eCommerce)

A product details page for a beauty products site. This project contains the "Similar Products" carousel functionality.

## App Description

When a shopper views the product details page, this component shows them similar items they may also like in an easy-to-use and interactive format. 

The carousel presents 15 products over 3 pages, as well as incorporates a modal pop-up showing more details about the product and linking to the product details page for that similar product. 

Responsive arrows and "Loves" (hearts) provide instant and visual feedback to the user, and mouseover "Love" and Quick Look components keep the interface clean while also providing feedback, and an opportunity to see further information, to the user. 

Highlights:
- Carousel and modal are built with CSS Grid to ensure a responsive and visually consistent layout
- Modal is built using React Hooks to reduce prop drilling and localize UI interactivity to components, and React Portals to ensure correct Z-indexing of modal across browsers and other variables
- Google page load speed has been improved by 241% with Brotli text compression
- MongoDB database accounts for future flexibility of the inherently nested/detailed data structure

This component is part of the product details page overall and is designed to pull from the ID parameter in the URL of the overall page. When all put together in a proxy server, all pieces pull whatever data they need based on that product ID. 

"Add-to-cart" and "Loves" functionality are beyond the scope of this particular component; however, the server routes can be easily adapted to send that info to the appropriate API in the future. 

Future improvements to be made: 
- Ironing out small CSS inconsistencies
- Adding animations on modal pop-up, etc.
- Adding color tiles in modal
- Specifying exact location of modal when combined with all components on similar products page
- Building a graph data structure of related products and using those to provide smart recommendations
- Optimize for mobile compatibility

## Usage

From within the root directory:
1. Install dependencies: 
```sh
npm install
```
2. Seed database with dummy product information: 
```sh
npm run seed
```
3. Start server: 
```sh
npm start
```
4. Open an additional terminal and start Webpack bundling: 
```sh
npm run build
```

## Primary Technologies Used

- React.js
- MongoDB
- CSS (Grid and Flexbox)
- React Portals
- Brotli text compression
- Node.js
- Express.js
- Styled Components
- React Hooks
- HTML5
- Webpack

## Related Organization

https://github.com/Sethora/
