# Lunova 

```
 / \__
(    @\___
 /         O
/   (_____/
/_____/   U
```

A non-opininated, lightweight web application framework for nodejs. Written with tender love and care by indie hackers.


## Example usage

```
const Lunova = require('lunova').default;

console.log(Lunova);
const lunova = new Lunova();

lunova.get("/", async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Your Response Here');
})

lunova.get("/hello", async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
})

lunova.post("/", async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('{id: 1, name: "John Smith"}');
})

lunova.listen(3000, () => {
    console.log("Listening on port 3000")
})
```
