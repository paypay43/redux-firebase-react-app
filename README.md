This is a simple project using Firebase, Redux and React in order to show a clients table

## Info

In this project, I simply created a new firebase project and fed in the json file into the database using "import json" function in the console. Then I simply used redux and thunk middleware to automatically get the clients from the database. Then I simply rendered them to the screen by providing them as props to each component. Inside the ClientItemView which will show a specific client, I used the parameters of the url to find the id from within the array, then I displayed them to the user

### Other Notes

Purposefully left .env in the git in order for this demonstration to work (usually would not)
This project uses React Hooks

## Get Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
