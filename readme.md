#Setup env

Create .env. 

Get the following from the mentorbot app on slack:
 
```
clientId
clientSecret
clientSigningSecret
```

Add port:
`PORT=3000`

#Setup LocalTunnel

Install localtunnel: `yarn global add localtunnel` or `npm -g install localtunnel`

Then run it: `lt --port 3000 --subdomain mentorbot`

#Authorize with slack

Visit https://mentorbot.localtunnel.me/oauth

Start chatting with the bot 
