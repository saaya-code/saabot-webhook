const express = require('express')
const Topgg = require('@top-gg/sdk')

const app = express() 

const webhook = new Topgg.Webhook("hunyan") 

app.post('/dblwebhook', webhook.listener(vote => {
  
  console.log(vote.user) 
})) 

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
