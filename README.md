<h1 align="center"> 
GET YOUTUBE SUBSCRIBERS
</h1>
<p align="center">Node.js application to get all details of youtube subscribers.</p>


<h2 align='center'>
<a href='https://get-youtube-subscribers-eight.vercel.app/' target="_blank"></a>
</h2>


# Hi, I'm Avinash Ghadge! 👋


## 🚀 About Me
I'm a Student learning Full Stack web Development.


## Acknowledgment
We'd like to thank the open-source community and the creators of Node.js, Express, and MongoDB for their valuable contributions.

We would also like to thank the contributors to this project for their valuable contributions.

## Demo
Here a link of demostartion video -

 - [YouTubeSubscriber-Backend](https://youtube-clone-qsob.onrender.com/) 


# YouTubeSubscriber-Backend 
## Table of Contents

- [Introduction ](#introduction)
- [Features ](#features)
- [Tech Stack ](#tech-stack)
- [Prerequisites ](#prerequisites)
- [Installation & Run](#installation-and-run)
- [API Reference ](#api-reference)
- [Contribute ](#contribute)
- [Contributors ](#contributors)
- [License ](#license)
- [Contact ](#contact)
- [Acknowledgments ](#acknowledgments)


## Introduction
Get YouTube Subscribers is an Application that serves as a RESTful API created by using Mongodb in Node.js. It is designed to fetch all subscribers information related to YouTube channel subscribers. The primary technologies used to develop this application are Node.js and Express.js which are used to create API endpoint and manage HTTP request. Additionally, this application utilizes MongoDB as the database to store and manage subscribers data efficiently.

## Features

The following features are available in the API:

- Get an array of all subscribers in JSON format.
- Get an array of all subscribers' names and subscribed channels in JSON format.
- Get details about a particular subscriber based on their ID, including their name, subscribed channel, and subscribed date.
- Handle error cases, such as when an incorrect subscriber ID is provided or when a user accesses an unknown endpoint.


## API Endpoints

1. GET http://localhost:3000/ → The client will see the “User Homepage” which is used to verify that application is working properly.

2. GET http://localhost:3000/subscribers → When the user hit this, **endpoint /subscribers**, the client will **get an array of all subscribers in JSON format** from the database where the data is stored in local MongoDB database.

3. GET http://localhost:3000/subscribers/names → When the user hit this, endpoint **/subscribers/names** the client will to get an array of all subscribers in JSON format with **only name and subscribed Channel fields** from the database, where the data is stored in local MongoDB database.

4. GET http://localhost:3000/subscribers/:id → When the user hit this, endpoint **/subscribers/:id** in ID, the user needs to enter the USER’S ID which is stored in the database to get a particular **user’s details like name, subscribed Channel and subscribed Date** from the database, where the data is stored in local MongoDB database.

5. GET http://localhost:3000/subscribers/:id → When the client gives **incorrect USER’S ID instead of correct USER’S ID** (where the ID does not match) which is stored in database, the **Client will get an Error message like “Subscriber doesn't exist with the given \_id: sdijvrbv” in JSON format with 400 error status code.**

6. GET http://localhost:3000/something → when the user hit the unwanted route which is not mentioned above (which is used to handle all other unwanted requests), they will get an error message like **Route not found** in JSON format with an 404 error status code.






## 🛠 Skills
 Node.js, Express.js, MongoDB, Mongoose,React, Javascript, JSX, HTML...


## Deployment

For Deployment of this project we use render.

First the project is push to git and through render we connect out git. After this the deployment is so easy we set couple of terms and click for deployment.

Keep in mind during deployment put...
* build command is  `node build`
* start command is `node app.js`

## Run Locally

Clone the project

```bash
  git clone https://github.com/Usernamecopieded/YouTube
```

Install dependencies

```bash
  npm init
```

Start the server

```bash
  node run dev 
```



## Documentation
- [NodeJs](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

[Api Documentation](https://documenter.getpostman.com/view/26908207/2s9YeD7Cr1)



## Environment Variables

To run this project, we created a env file and  add the following environment variables in .env file

`MONGO_URL`

`PORT` (optional)


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/avinash-ghadge)

## Badges

[![Node.js](https://img.shields.io/badge/Node.js-v21.6.1-green.svg)](https://nodejs.org/)

[![Express](https://img.shields.io/badge/Express-v4.19.2-blue.svg)](https://expressjs.com/)

[![MongoDB](https://img.shields.io/badge/MongoDB-v7.0.8-green.svg)](https://www.mongodb.com/)

[![Mongoose](https://img.shields.io/badge/Mongoose-v8.3.4-blue.svg)](https://mongoosejs.com/)



## Contact
If you have any questions or suggestions, feel free to reach out to us at [Gmail](avinash.ghadge20@vit.edu).




## Happy Learning

<p align="center">
<a href="https://github.com/Usernamecopieded" title="GET youtube subscriber projects">
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
    
</a>
</p>
