# Phising Site
This is a small website for `Phishing Attacks` for Facebook using `ExpressJS`

## Installation
### Installation
````powershell
npm install
# or
# yarn install
````
The above command installs all the packages required which are mentioned in the package.json file

### Configure
Open the [server.js](/server.js) file and update the variables as follows

### Execute
````
npm start
````
This command starts the server on port 3000. Once the server is started, you will see something like
````
Listening at https://localhost:3000
````
After the server is started, all you have to do is share the URL `https://localhost:3000` with your target. Once the target sign-in to "Facebook" through the phishing site, you will get mail to the email provided in the code with the target's credentials.

If you want to phish remotely, you either have to `PORT Forward` the required port i.e.` 3000`, or use Tunneling Host: [Ngrok](https://ngrok.com/)

## NOTE
__MUST CHANGE THE ASSISGNMENT OF VARIABLE USEREMAIL AND USERPASS TO YOUR CREDENTIALS OR CREATE ENVIRONMENT WITH NAME useremail / userpass for Credential__
__Email, containing phished data will be send to above email address.__

## IMPORTANT 
__ANYTHING UNUSUAL OR ILLEGAL HAPPENED, I WILL NOT BE SOME TO BLAME. USE THIS TEMPLATE ONLY FOR LEGAL PURPOSE OR WITH SOMEONE PERMISSION. DO NOT USE FOR ILLEGAL PURPOSE__
