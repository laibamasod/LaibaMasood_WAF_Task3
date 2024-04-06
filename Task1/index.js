import http from 'http';
import url from 'url';
import querystring from 'querystring';
import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();
const server=http.createServer((req,res)=>{
   
    if (req.url === '/') {
        // Respond with your name as a string
        res.end('Specify a name in URL');
      }
    else{
        const parsedUrl = url.parse(req.url);
        const queryParams = querystring.parse(parsedUrl.query);
        
        const name = queryParams.name;
        // for string
    //     res.end(name);
    //    eventEmitter.emit('Stringresponse', 'A String response has been sent!');

        // for json 
        //  const jsonResponse = JSON.stringify({ name: `${name}` });
        //     res.end(jsonResponse);
        // eventEmitter.emit('JSONresponse', 'A JSON response has been sent!');
        
        // for html
        const htmlResponse = `<p style="color: red;">${name}</p>`;
        res.end(htmlResponse);
        eventEmitter.emit('HTMLresponse', 'An HTML response has been sent!');
      }
    
   

    
})


server.listen(8080,  () => {
    console.log('Server is running on port 8080');
});

eventEmitter.on('HTMLresponse', (message) => {
    console.log(message);
});

eventEmitter.on('JSONresponse', (message) => {
    console.log(message);
});

eventEmitter.on('Stringresponse', (message) => {
    console.log(message);
});