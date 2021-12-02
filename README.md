# React Compendium

## Learning Objectives
- Use the `useEffect` hook to fetch external data
- Use `.map` to iterate over an array and render new elements for each item in an array.
- Add a unique `key` to each element rendered from a `.map` in React.
- Make an api request using the `fetch` api
- Update the state based on user input
- Make an api request after a form submission in react
- Update state with `useEffect` based on dropdown change
- conditionally render components based on state


### Description

For this app, we'll be using the `useEffect` react hook to fetch data inside of our applications and show the data to the user. We will be responding to different user actions to show updated data being fetched from our api. 

Create a new React app using `npx create-react-app <app name>` and be sure to add in your `.eslint` and prettier [configs](https://github.com/alchemycodelab/config-build-deploy/tree/main/eslint).

### Acceptance Criteria

- Users should be able to see a list of characters when the page loads
- Users should be able to search their favorite character name
- Users should be able to filter data from the api ( Can use any type of filter you want from the api you choose to work with)
- Users should be able to sort the data retrieved from the api
  
### Rubric

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------| ----------: |
| See a loading state while data is being fetched on page load |    2 |
| See a list of characters when the page loads |    2 |
| Search their favorite character name |    2 |
| Filter the data retrieved |    2 |

| Events . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Conditionally render a loading state |           2 |
| Make an api request with `fetch` and `useEffect` when page loads  |     2 |
| Add a `key` to each item rendered from data fetched                 |           2 |
| Make an api request upon form submission         |           2 |
| Update state with `useEffect` using empty dependency array   |           1 |
| Update state with `useEffect` conditionally using empty dependency array   |           1 |
| Snapshot testing   |           2 |


