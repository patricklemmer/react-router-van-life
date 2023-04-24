# React Router v6 - Vanlife🚌

# Project Description

This is a basic React application built to demonstrate the use of [React Router v6](https://reactrouter.com/en/main)

Throughout the development process of this app, MirageJS was used to mimick a database holding all the relevant information such as images, profiles and user details. After finishing up the router setup I connected this app to Google Firestore.

## Concepts I learned

- Router Setup 
- Route 
- Link
- Route Parameters
- Nested Routes and Outlet
- Relative Paths
- NavLink 
- Link State
- 404 Page / Splat Routes
- Loaders
- Actions
- Form & form data
- defer()
- Await
- Suspense
- Error Handling, errorElement
- useRouteError, useNavigate, useNavigation, useLocation, useLoaderData, useActionData
- Protected Routes

## Documentation

### Routes
- /
- /host
- /host/income
- /host/vans
- /host/reviews
- /host/vans/:id
- /host/vans/:pricing
- /host/vans/:photos
- /about
- /vans
- /vans/:id/:name

### Search Filter

A user can filter by camper van type. Selecting a type (simple, rugged or luxury) will return a list of camper vans of that type.

![App Screenshot](https://github.com/patricklemmer/assets/blob/f95e1f13fb1b60e821a6f52e0aa482184074c2ce/search_filter.png)

Choosing a type will add a search parameter with the respective type selection to the URL (https://statuesque-kashata-fa42d8.netlify.app/vans?type=rugged)

![App Screenshot](https://github.com/patricklemmer/assets/blob/f95e1f13fb1b60e821a6f52e0aa482184074c2ce/search_filter_selected.png)

The results of that search can be viewed and selected. Clicking on any listing will take the user to the details of that listing. (https://statuesque-kashata-fa42d8.netlify.app/vans/2/Beach%20Bum).

![App Screenshot](https://github.com/patricklemmer/assets/blob/f95e1f13fb1b60e821a6f52e0aa482184074c2ce/search_results.png)

Clicking the "Back to rugged vans" sends the user back to the overview of all rugged vans, including the previously selected search parameters in the URL (https://statuesque-kashata-fa42d8.netlify.app/vans?type=rugged)

![App Screenshot](https://github.com/patricklemmer/assets/blob/dca8b391a242ff12299a89221a28101c651950dd/search_back.png)

### Login

I have created an user account, to test the protected routes and log in to the hosts dashboard. To log in, use the following login details:

- Username: user@vanlife.com
- Password: van123

I also added a very basic logout scenario, that logs out a user and revokes access to all protected routes.

## Usage

This project contains protected routes for the sensitive data of a host. To test the full functionality of this app, you can use the following login details:

- Username: user@vanlife.com
- Password: van123

## Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/e3cdeda5-3e41-41f8-9d5c-84b8bde6368f/deploy-status)](https://app.netlify.com/sites/statuesque-kashata-fa42d8/deploys)

## Contact
[![Personal Website](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://patricklemmer.dev)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/patricklemmer/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/patrick_lemmer)
