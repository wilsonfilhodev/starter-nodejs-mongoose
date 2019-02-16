# starter-nodejs-mongoose
Starter simple for create API CRUD using NodeJs and Mongodb database with mongoose.

**Warning**

> Verify that you are running at least node 8.x and npm 5.x by running node -v and npm -v in a terminal/console window. Older versions produce errors, but newer versions are fine.

> This api use mongodb database, then is necessary configure your database in index.js of this project.

## Running the project

```
$ git clone https://github.com/wilsonfilhodev/starter-nodejs-mongoose.git
$ cd express-app
$ npm install
$ npm start
```

## Examples

* **POST** http://localhost:3000/api/products (*Create new product*)
```

  Example data: (all fields in example is required)
  
  {
    "name": "Node JS",
    "description": "JavaScript runtime built on Chrome's V8 JavaScript engine.",
    "url": "https://nodejs.org"
  }
  
```

* **GET** http://localhost:3000/api/products?page=1 (*Get products. The return is paginated with size 3. A "page" query is optional.*);
* **GET** http://localhost:3000/api/products/<id_product> (*Show one product.*);
* **DELETE** http://localhost:3000/api/products/<id_product> (*Delete one product*)
* **PUT** http://localhost:3000/api/products/<id_product> (*Update data of product. Changes the value of the attribute passed in the body.*)

## Authors

* **Wilson Filho**  - [Linkedin](https://www.linkedin.com/in/wilson-filho)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
