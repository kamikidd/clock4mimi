# Clock4mimi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

/*Notes*/
/*
1. ng build --configuration production --output-path docs --base-href /clock4mimi/
2. images' path: under root sytles.css with './assets/xxx.png' instead of under component css. So that locally and on the server all the images could work well.
3. using scale to reduce the size of the two arrows for smaller screen
4. need to add precise position to "transform-origin" for arrows' turning point
5. using arrows original width and height instead of relative percentages (in #hour and #minute).
6. copy index.html and rename it to 404.html
7. using background-size: cover to make the background image fill the container
*/