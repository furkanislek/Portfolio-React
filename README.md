# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



.nameBorder {
  /* background-color: black; */
  min-width: 100%;
  height: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: left;

  color: #3730a3;
}

.bordernameline {
  border-bottom: 1px solid #3730a3;
  width: 3%;
  margin-bottom: 0.2rem;
  margin-right: 0.6rem;
}

.aboutContainer {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.leftSide {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
}

.leftSide h5 {
  font-weight: 400;
}

.leftSide p {
  margin-top: 1rem;
  font-weight: 500;
  font-family: "Inter", sans-serif;
}

.rightSide {
  margin-left: 10rem;
  max-width: 30%;
  max-height: 10px;
  text-align: center;
}

.profileImg {
  border-radius: 1rem;
  min-width: 300px;
  min-height: 300px;
  max-height: 300px;
  box-shadow: -10.8px -10.8px 9.1px rgba(136, 2, 2, 0.38),
    -17.7px -17.7px 21.9px rgba(127, 0, 0, 0.204),
    -19.1px -19.1px 41.3px rgba(152, 11, 11, 0.15),
    -11.6px -11.6px 73.7px rgba(132, 9, 9, 0.113),
    13.3px 13.3px 137.9px rgba(0, 0, 0, 0.079),
    100px 100px 330px rgba(0, 0, 0, 0.042);
}