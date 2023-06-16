import Lunova from ".";


const lunova = new Lunova();

lunova.get("/", async (req, res) => {
    console.log('GETTING the info')
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('{id: 1, name: "John Smith"}');
})

lunova.get("/hello", async (req, res) => {
    console.log('GETTING the info')
}) 
lunova.post("/", async (req, res) => {
    console.log('POSTING the info')
})
lunova.put("/", async (req, res) => {
    console.log('PUTTING the info')
})
lunova.patch("/", async (req, res) => {
    console.log('PATCHING the info')
})

lunova.delete("/", async (req, res) => {
    console.log('DELETED the info')
})

lunova.listen(3000, () => {
    console.log("Listening on port 3000")
})