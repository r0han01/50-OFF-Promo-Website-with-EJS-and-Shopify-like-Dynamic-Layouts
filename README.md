### 50% OFF Promo Website with EJS and Shopify Integration
![222](https://github.com/user-attachments/assets/fea6c582-b81a-4bbc-a288-1c9ef9b43b72)
#### Overview
- This project demonstrates a simple web application that displays a 50% OFF promotion message on the top of the page. It uses EJS (Embedded JavaScript) for rendering HTML content dynamically and provides an efficient way to reuse layouts, like the top bar, across multiple pages.

- The website follows the general structure of many e-commerce sites (like those built with Shopify), featuring dynamic content and promotional banners that stay consistent across all pages of the site.

### Shopify and EJS Usage
- In Shopify stores, JavaScript is heavily used for interactive elements, such as promotional banners, product carousels, and cart updates. EJS is also commonly used for dynamically rendering product information, prices, and user-specific data.

### Shopify websites typically:

- Use JavaScript for real-time updates (e.g., price changes, inventory updates).
- Use EJS templates to dynamically generate product pages, blog posts, and other content.
- Include promotional top bars to notify customers about sales, new arrivals, or special offers.
- ![1](https://github.com/user-attachments/assets/80c1c888-865d-494d-b552-68a27a11b672)

####  Features
- `Reusable Top Bar`: Displays a 50% OFF message on the top of every page.
- `Dynamic Content Rendering`: Uses EJS templates to render content on the webpage.
- `Brand Images`: Includes images of popular brands, showcasing how top bars are implemented across different e-commerce sites.
- `JavaScript`: Uses JavaScript to add interactivity.
- `Shopify Integration`: The project draws inspiration from how Shopify websites display promotional banners and use dynamic content with JavaScript and EJS templates.
### How This Program Works
- `EJS Layouts`: The program uses EJS (Embedded JavaScript) to create dynamic templates. These templates allow us to inject content (like the 50% OFF bar) across different pages without having to repeat the same HTML code on each page.

- The layout.ejs file defines the top bar, and individual page content is injected into the <%- body %> section.
Top Bar: The 50% OFF message is displayed as a top bar across all pages. This is commonly seen on e-commerce websites to highlight time-sensitive promotions.

### JavaScript & Shopify Integration:

- JavaScript is used to handle any client-side interactivity (like button clicks, animations, etc.).
- The program draws inspiration from Shopify websites, which use EJS and JavaScript for dynamic content and promotional messaging.
### How to Run This Project
To get the project up and running, follow these steps:

1. Clone the Repository
```bash
git clone use_ssh_url
cd cloned_filename
```

2. Install Dependencies
- This project uses Node.js and Express to serve the website. Make sure Node.js is installed on your system.

```bash
npm install express ejs express-ejs-layouts path
```
3. Start the Server
- Run the following command to start the Express server:

```bash
npm start
```
- This will launch the app on http://localhost:3000. You can visit this URL in your browser to view the promotional site.

### How It Works
- `Server`: The server runs on Node.js and uses Express as the web framework. It serves the pages dynamically using EJS as the view engine.

- `Routes`: There are multiple routes defined for different pages. Each page has its own content, but the 50% OFF top bar is included through the layout.

- `Brand Images`: Various brand images are included to demonstrate how companies use similar top bars for their promotional messaging across all pages of their websites.

### Example of Top Bar in Other Brands
Many e-commerce websites use a top bar for promotions, similar to the one in this project. For example:

`Amazon`: Amazon often displays banners at the top for flash sales, discounts, and other offers.
`Nike`: Nike uses top bars to display offers on new product launches and sales events.
`Adidas`: Adidas also uses a similar layout for discounts and promotions.
![2](https://github.com/user-attachments/assets/c25c7968-21d0-43c5-a9c9-f0c95c5b3522)



## Conclusion
This project demonstrates how to set up a basic e-commerce website with dynamic content rendered using EJS templates. By utilizing Express and JavaScript, this approach allows us to implement a 50% OFF top bar and create reusable layouts across all pages.
