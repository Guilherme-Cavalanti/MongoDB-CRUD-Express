## ABOUT THIS SERVER

This is a simple REST API created using Express, to ruin this you will node installed in your computer and add it to your path environments.

With this done, on the Backend directory run:
```bash
    npm install
```
It should install all the dependencies

## .ENV FILE

This server needs a .env file to function, which will be using your personal MongoDB Atlas database information, on this directory, create a file named .env
You will this 2 variables in it:
 ```env
    #env

    MONGO_USERNAME=<your_username>
    CONNECTION_STRING=<your_connection_string>
```

Make sure the connection string has the password field filled with the correct password, you can check all that in MongoDB interface on their website.