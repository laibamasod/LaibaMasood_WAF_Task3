import http from 'http';
import url from 'url';
import fs from 'fs';


const chatHistoryFile = 'chatHistory.txt';

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  const message = parsedURL.query.message;

  if (req.url === '/') {
    // Respond with "Laiba's Chat Room" for the root URL
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Local Chat Room Using IP addresses by \nName:Laiba Masood\nCourse: WAF\nRegistration:04072013002\n");
  } else {
    if(message){
  fs.appendFile(chatHistoryFile, message + '\n', (err) => {
    if (err) {
      console.error('Error saving the message to chat history:', err);
    } else {
      console.log('Message saved to chat history:', message);
    }
  });


  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(message);
}
}
});


server.listen(8080, () => {
  console.log(`Server is listening on port 8080`);
});


// my IP
//my IPv4 Address: 10.141.223.82
// her IPv4 address:  10.141.223.72