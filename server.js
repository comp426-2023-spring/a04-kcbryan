import express from 'express';
import minimist from 'minimist';
import { rps, rpsls } from './lib/rpsls.js';


const args = minimist(process.argv.slice(2));
const app = express();

let port = args.port
if (port==null) {
	port=5000;
}

app.get('/', (req, res) => {
    res.status(404);
  });

app.get('/app/', (req, res) => {
    res.status(200);
})

app.post('/app/rps/', (req, res)=> {
    res.send("entered post block")
    res.send(rps())
})

app.post('/app/rpsls/', (req, res)=> {
    res.send(rpsls())
})

app.listen(port, () =>
  console.log('RPSLS listening on port ' + port),
);