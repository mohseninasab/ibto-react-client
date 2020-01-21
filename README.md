This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Client Services
All the services are in `src/actions/basic-actions.js` directory.<br> 

All the queries are in `src/queries/queries.js` directory.<br>

Add new donation to the database:<br>
`donation`

Get all the donations from database:<br>
`getDonations`

Update the selecte donation:<br> 
`updateDonation`

Delete the selected donation:<br>
`deleteDonation`

Add new office:<br>
`office`

Get all the offieces from database:<br>
`getOffices`

Update the selected office:<br>
`updateOffice`

Delete the selected office from database:<br>
`deleteOffice`

Add new donor or pateint to the database:<br>
`subject`

Get all the donors an pateints from the database:<br>
`getSubjects`

Update the selected subject which are donors and pateints:<br>
`updateSubject`

Delete the selected subject:<br>
`deleteSubject`

Add new staff the database:<br>
`staff`

Get all the staff from database:<br>
`getStaff`

Update the selected staff data:<br>
`updateStaff`

Delete the selected staff from database:<br>
`deleteStaff`

Get all the donations from a selected donor:<br>
`getUserDonations`






