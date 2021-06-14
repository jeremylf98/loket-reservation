** INSTALLATION GUIDE FOR THE REPOSITORY**

1. If you don't have node.js and npm installed, go to "https://nodejs.org/en/download/", download the "installer" (depends on your device OS) and install it.

2. To check if your node already installed, open your command prompt and write "node -v", after that write "npm -v" to check npm versions. If its already installed, you should see the version of your node and npm.

3. After finish installing node and npm, type "npm install" in the terminal(or similar things as terminal) to install all of the dependencies. If you're not using VScode and using windows, you can use command prompt to run this command, but remember to open your command prompt on your current local project folders (ex: D:/work/project/loket-reservation), unless it won't work as intended.

4. You can test the API on Postman or other similar API Development App. You can download Postman here: "https://www.postman.com/downloads/". 

5. In this project, I'm using PostgreSQL as the database, so be sure to download it to make the database before testing it in the Postman. You can download PostgreSQL here: "https://www.postgresql.org/download/".

6. You can see my Postmant API Documentation here: "https://documenter.getpostman.com/view/6831642/TzY7cDER".

7. Before you run the project, you need to setup the postgresql connection to connect to your database. To do that, Open file "src -> db -> knexfile.js" you should see the inside of knexfile.js, And this is what you should change:

    connection: {
      database: process.env.DB_NAME || 'loket_reservation', -> change your database name, this is my database name
      user:     process.env.DB_USER || 'postgres', -> change your username if its not default, my database use default username
      password: process.env.DB_PASSWORD || 'Technika3', -> change password of your database
      host: process.env.DB_HOST || 'localhost', -> let it be like this
      port: process.env.DB_PORT || 5432 -> let it be like this
    },
    
    After you set this database configuration base on your postgresql local database, you can now go to step 8.

8. In This project, our migration use knex, and the seeding of data too. dont forget to do "npx knex migrate:latest --knexfile src/db/knexfile.js". My knexfile.js is in the src/db/ so we need to specify the path. If you don't have npx, it should automatically installed it before running the command. (If you run into problem and want to rollback the migration, type this "npx knex migrate:rollback --knexfile src/db/knexfile.js" instead). 

9. After running the migration, you need to run the initial seeds for this project, do this in the terminal "npx knex seed:run --knexfile src/db/knexfile.js" and hit enter. it should add 3 datas in postgresql in "locations" table.

10. Now before you type "npm start" to start the backend, press " ` + shift + ctrl " (if you're using vscode and in windows) to open new terminal or other similar things. You can also do this manually in the navigation bar, press "Terminal", and then "New Terminal". It should said that you're still in the "loket-reservation" folder. We want to run the Frontend of this, and to do that, we need to make this terminal to go to the client folder. In the termina, type this command "cd client", you should go to the client folder.

11. Last thing to run the backend and frontend, in your backend terminal (loket-reservation folder), type "npm start", and in your frontend terminal (loket-resevation/client folder), type "npm start" too. The UI of frontend should open automatically when its done processing the "npm start" of the frontend.

12. Done! you should see the frontend of this project.

13. Oh yeah, and for the guide of using the UI, we're using very very simple UI just to show the backend if its really worked. No Validation for the frontend like you should use numbers or strings. All of the projects backend already tested, and also the frontend, it should work as intended.

14. Basically the Frontend is just how the backend should work, so don't expect too much from the frontend.