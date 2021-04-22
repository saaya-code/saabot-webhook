const express = require('express')
const Topgg = require('@top-gg/sdk')
const app = express() 
const axios = require("axios")
const webhook = new Topgg.Webhook("hunyan") 
app.post('/dblwebhook', webhook.listener(vote => {
 axios.post(process.env.web, {
   content:`<@${vote.user}> voted yar7em waldih`
 })
})) 

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});


