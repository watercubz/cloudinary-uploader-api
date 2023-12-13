# cloudinary-api-uploader

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
```

## Technologies

- Node.js
- Express
- Cloudinary
- MongoDB
- Cors
- dotenv

## Getting Started

1. Make sure you have Node.js installed on your system.
2. Clone this repository: `git clone <URL>`
3. Navigate to the repository directory: `cd <REPO_DIRECTORY>`
4. Install the required dependencies: `npm install`
5. Run the server: `npm run server`

## download project

> [!TIP]
> To download the project and contribute use the following command

```bash
 git clone https://github.com/watercubz/cloudinary-uploader-api.git
```

## Endpoint

- List products

```bash
 http://localhost:3000/products
```

- Create product

```bash
   http://localhost:3000/products
```

> [!IMPORTANT]
> To create a product you need the following parameters

```json
{
  "img": "url the your img",
  "name": "mouse",
  "description": "minimalist mouse gamer for gamer",
  "price": 140
}
```

- Update Products

```bash
   http://localhost:3000/products/{id}
```

- Delete Products

```bash
   http://localhost:3000/products/{id}
```

### Contributing

If you want to contribute to this project, feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License - see the LICENSE file for details.
