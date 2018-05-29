## Reference
<<React Quickly: Painless web apps with React, JSX, Redux, and GraphQL>> Ch 18
- https://github.com/azat-co/react-quickly/tree/master/ch18/nile

## Key points
- How to pass data to a route and access it
- How to access URL parameters
- How to create modal windows with changing URLs
- How to use layouts by nesting routes

## Install
React Router has been broken into three packages: 
- react-router
- react-router-dom
- react-router-native.

You should almost never have to install react-router directly. That package provides the core routing components and functions for React Router applications. The other two provide environment specific (browser and react-native) components, but they both also re-export all of react-router's exports.

For building a website we will install react-router-dom.
```
    npm install --save react-router-dom
```