# Anagrams Fullstack

## Setup instrucations

* Assuming you have cloned the repo in directory `anagrams-fullstack`
* For Back-end
  * Go to the server directory `cd anagrams-fullstack/server`
  * Create a virtual environment for python  `virtualenv env`
  * Activate the virtual environment that we just created `source env/bin/activate`
  * Install all the dependencies `pip install -r requirements.txt`
  * Run the backend `uvicorn index:app`
  * The app should start running at port 8000 by default
  * Go to <http://localhost:8000/docs> to see and test the backend APIs via swagger UI
* For Front-end
  * Go to the client directory `cd anagrams-fullstack/client`
  * Install the dependencies `npm install`
  * Run the frontend `npm run start`
  * The app should start running at port 3000 by default and launch itself in the default browser
  * You can also manually go to <http://localhost:3000> to use the app
