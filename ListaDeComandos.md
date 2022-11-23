# Lista de comandos utilizados


```console
use ecommerce;
```


```console
db.createCollection('productos');
db.createCollection('carritos');
```


```console
db.productos.insertMany([
    {
        "timestamp": ISODate(),
        "title": "Product 1",
        "price": 100,
        "description":"Some description for product 1",
        "code": "XP-1",
        "image": "someUrlProduct1.com",
        "stock": 100
    },
    {
        "timestamp": ISODate(),
        "title": "Product 2",
        "price": 320,
        "description":"Some description for product 2",
        "code": "XP-2",
        "image": "someUrlProduct2.com",
        "stock": 200
    },
    {
        "timestamp": ISODate(),
        "title": "Product 3",
        "price": 930,
        "description":"Some description for product 3",
        "code": "XP-3",
        "image": "someUrlProduct3.com",
        "stock": 300
    },
    {
        "timestamp": ISODate(),
        "title": "Product 4",
        "price": 1140,
        "description":"Some description for product 4",
        "code": "XP-4",
        "image": "someUrlProduct4.com",
        "stock": 400
    },
    {
        "timestamp": ISODate(),
        "title": "Product 5",
        "price": 2250,
        "description":"Some description for product 5",
        "code": "XP-5",
        "image": "someUrlProduct5.com",
        "stock": 500
    },
    {
        "timestamp": ISODate(),
        "title": "Product 6",
        "price": 3360,
        "description":"Some description for product 6",
        "code": "XP-6",
        "image": "someUrlProduct6.com",
        "stock": 600
    },
    {
        "timestamp": ISODate(),
        "title": "Product 7",
        "price": 4470,
        "description":"Some description for product 7",
        "code": "XP-7",
        "image": "someUrlProduct7.com",
        "stock": 700
    },
    {
        "timestamp": ISODate(),
        "title": "Product 8",
        "price": 5000,
        "description":"Some description for product 8",
        "code": "XP-8",
        "image": "someUrlProduct8.com",
        "stock": 800
    },
    {
        "timestamp": ISODate(),
        "title": "Product 9",
        "price": 3450,
        "description":"Some description for product 9",
        "code": "XP-9",
        "image": "someUrlProduct9.com",
        "stock": 900
    },
    {
        "timestamp": ISODate(),
        "title": "Product 10",
        "price": 2860,
        "description":"Some description for product 10",
        "code": "XP-10",
        "image": "someUrlProduct10.com",
        "stock": 1000
    }
]);
```


```console
db.carritos.insertMany([{timestamp: ISODate()}, {timestamp: ISODate()}])
```

- Para listar todos los productos

```console
db.productos.find();
```




```console
db.productos.countDocuments();
```


```console
db.productos.insertOne({
        "timestamp": ISODate(),
        "title": "Product 11",
        "price": 3860,
        "description":"Some description for product 11",
        "code": "XP-11",
        "image": "someUrlProduct11.com",
        "stock": 1100
    });
```


```console
db.productos.find({code: "XP-11"}, {title: 1, _id:0});
```

- Listar productos con precio menor a 1000 pesos:

```console
db.productos.find({price: {$lt: 1000}});
```

- Listar los productos con precio entre los 1000 a 3000 pesos.

```console
db.productos(find {price: {$gt: 1000, $lt: 3000 });
```

- Listar los productos con precio mayor a 3000 pesos.

```console
db.productos.find({price: {$gt: 3000}});
```



```console
db.productos.find({},{title:1, _id:0}).sort({price:1}).skip(2).limit(1);
```



```console
db.productos.updateMany({}, {$inc: {stock: 100}});
```



```console
db.productos.updateMany({price: {$gt: 4000}}, {$set: {stock: 0}});
```



```console
db.productos.deleteMany({price: {$lt: 1000}});
```


  
```console
db.createUser({user: "pepe", pwd: "asd456", roles: [{role: "read", db: "ecommerce"}]});
```


```console
mongo -u pepe -p --authenticationDatabase ecommerce 
```


```console
> show dbs
ecommerce  0.000GB
```


```console
> use ecommerce
switched to db ecommerce
> db.productos.insertOne({nombre: "someName"})
uncaught exception: WriteCommandError({
	"ok" : 0,
	"errmsg" : "not authorized on ecommerce to execute command { insert: \"productos\", ordered: true, lsid: { id: UUID(\"0472ecf7-1bf2-47c1-8616-00278992617c\") }, $db: \"ecommerce\" }",
	"code" : 13,
	"codeName" : "Unauthorized"
})
```


```console
security:
  authorization: "enabled"
```
