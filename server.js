import cors from 'cors';
import express from 'express';
import minimist from 'minimist';
import { rps, rpsls } from './lib/rpsls.js';


const args = minimist(process.argv.slice(2));
const app = express();

let port = args.port
if (port==null) {
	port=5000;
}

app.use(cors());



//oprq3
app.get('/app/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send("200 OK");
 
})

//oprq4
app.get('/app/rps/', (req, res)=> {
    res.send(rps())
})

//oprq5
app.get('/app/rpsls/', (req, res)=> {
    res.send(rpsls())
})

//oprq6
app.get('/app/rps/play/:shot', (req, res)=> {
    try {
        res.send(rps(req.params.shot));
    }
    catch (e) {
        if(e) {
            res.status(404).send("Invalid shot, please try again!")
        }
    }
    
})

//oprq7
app.get('/app/rpsls/play/:shot', (req, res) => {
    try {
        res.send(rpsls(req.params.shot));
    }
    catch (e) {
        if(e) {
            res.status(404).send("Invalid shot, please try again!")
        }
    }
})

//oprq8
app.get('/app/rps/play/rock/', (req, res)=> {
    res.send(rps('rock'));
})
app.get('/app/rps/play/paper/', (req, res)=> {
    res.send(rps('paper'));
})
app.get('/app/rps/play/scissors/', (req, res)=> {
    res.send(rps('scissors'));
})

//oprq9
app.get('/app/rpsls/play/rock/', (req, res)=> {
    res.send(rpsls('rock'));
})
app.get('/app/rpsls/play/paper/', (req, res)=> {
    res.send(rpsls('paper'));
})
app.get('/app/rpsls/play/scissors/', (req, res)=> {
    res.send(rpsls('scissors'));
})
app.get('/app/rpsls/play/lizard/', (req, res)=> {
    res.send(rpsls('lizard'));
})
app.get('/app/rpsls/play/spock/', (req, res)=> {
    res.send(rpsls('spock'));
})

// oprq2
app.use((req, res, next) => {
    res.status(404).send("404 NOT FOUND")
    })



app.listen(port, () =>
  console.log('RPSLS listening on port ' + port),
);
