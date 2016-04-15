A simple password manager using node persist. Clone directory and open in terminal or PowerShell; you can create and store passwords in persist folder.
Includes encryption and error handling. E.g.

node app.js  get -h
(to get options for password)

node app.js create -n (username) -u (username) -p (password) -m (master password)
OR
node app.js get -n (and name) -m (and master password)

You will want to delete file in persist folder each time you wish to change the master password. 
