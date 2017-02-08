# ng-webpack
Building angular app with webpack  
Testing..

## File architecture
Entry file in /src initiates an angular module (ng-app)  
This file contains require statements to pull in angular components (controllers, services, directives, etc)  
Note: custom directives that use a templateUrl referencing an html file will throw a cross-origin error if you are opening with a browser (file://) instead of using a server. To get around it we use ES6 template literal notation to avoid referencing an html file.  
Webpack bundles these files into a bundle.js file, which an index.html file references with a single script tag. This avoids a big list of scripts. Recommend to uglify/compress this file. Other build tools may be more efficient at building angular projects (gulp/grunt).