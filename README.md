Tourism Website with AWS CDN

📌 Overview

This project is a tourism website hosted on AWS S3 and delivered through AWS CloudFront CDN to ensure faster and more secure access. The website provides information about various tourist destinations and includes a booking system backed by MongoDB.

🌍 Features

Static website hosted on AWS S3

CDN (Content Delivery Network) configured using AWS CloudFront

Secure HTTPS connection with SSL certificate

MongoDB database to store user bookings

Offline chatbot that provides predefined answers to user queries

Responsive frontend designed with HTML, CSS, and JavaScript

Node.js backend for handling booking submissions


🚀 Technologies Used

Frontend: HTML, CSS, JavaScript

Backend: Node.js

Database: MongoDB

Cloud Services: AWS S3, AWS CloudFront (CDN),Lambda and API Gateway



🛠 Setup Instructions

To run the project locally:

1. Clone this repository:

git clone https://github.com/yourusername/tourism-website.git
cd tourism-website


2. Install dependencies (if backend exists):

npm install


3. Start the backend server (if applicable):

node server.js


4. Open website.html in a browser.



🌐 Hosting Setup

1. Upload website files to AWS S3


2. Configure AWS CloudFront for CDN distribution


3. Set up a custom domain with SSL (optional)


4. Connect MongoDB for handling bookings(connect site to api gateway and gateway to lambda(serverless function) and connect to mongo db
   



⚡ Future Enhancements

Add dynamic content using APIs

Improve chatbot functionality with AI

Enable user authentication


📜 License

This project is open-source. Feel free to contribute or modify as needed.
