# cloudinary-api-uploader

This is an API developed in Node.js that allows you to obtain endpoints for your personal or professional projects. It is open source, simple and easy to configure. The API responds to an endpoint with JSON that contains information about all the products.

# PROYECT STRUCTURE

```
└── 📁api-cloudinary
    └── .env
    └── app.js
    └── 📁cloudinay
        └── cloud-img.js
    └── config.js
    └── 📁controllers
        └── products.controllers.js
    └── 📁database
        └── db.js
    └── LICENSE
    └── 📁middlewares
        └── cors.js
    └── 📁models
        └── products.models.js
    └── package-lock.json
    └── package.json
    └── README
```

## Getting Started

1. Make sure you have Node.js installed on your system.
2. Clone this repository: `git clone <URL_OF_YOUR_REPO>`
3. Navigate to the repository directory: `cd <REPO_DIRECTORY>`
4. Install the required dependencies: `npm install`
5. Run the server: `npm run server`
6. Open your web browser and go to `http://localhost:3000/products`

## Code Explanation

This code allows you to obtain several endpoints to obtain, create, update, delete and obtain by ID, the different products that are in your database. This project is in version v0.1.0 Any contribution for the improvement of the API is accepted.

### Prerequisites

- Node.js

### Running the Server

To start the server, use the following command: `npm run server`

### Server Configuration

- Port: 3000

## Endpoint

### GET ALL

> .[IMPORTANT].
> this data is need to come from the database

- URL: `http://localhost:3000/pruducts`
- Method: GET

### GET ID

> .[NOTE].
> The ID is necessary when searching for the product

- URL: `http://localhost:3000/proctuds/dcdd0fad-a94c-4810-8acc-5f108d3b18c3`
- Method: GET:ID

### POST

> .[NOTE].
> If you want to upload an image, use multipart/form-data,
> All fields are required name,description,price ect.

- URL: `http://localhost:4000/movies`
- Method: POST

```json
{
  "image": "you pass the img from local"
  "name": "ryzen 5 5500",
  "description": "high performance ryzen processor",
  "price": 150
}
```

### DELETE

> .[IMPORTANT].
> To delete a product, you have two ways from the database or from the cloud using cloudinary

URL: http://localhost:3000/products/6a360a18-c645-4b47-9a7b-2a71babbf3e0
Method: DELETE

> .[IMPORTANT].
> This api is still in development, if you find an error do not hesitate to open an issue and comment on your problem

### Contributing

If you want to contribute to this project, feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License - see the LICENSE file for details.
