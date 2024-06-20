### Main package .json
It works with  yarn v1.22.22 or npm

It contains common to all projects things such as
* Linters
* React
* Axious

### Available Scripts
#### MSW project
* `yarn msw:start`  shows serverless mode with a `?serverless` flag
* `yarn msw:sb` shows storybook with server worker
* `yarn msw:test` shows tests with server worker
#### cssEncapsulation projects

Approaches to encapsulation of CSS with the scope of the component in a project
### [CSS Babel encapsulation](./projects/cssBabelEncapsulation/README.md)
### [CSS Emotion encapsulation](./projects/cssEmotionEncapsulation/README.md)
### [CSS Modules encapsulation](./projects/cssModulesEncapsulation/README.md)
### [CSS Styled Components encapsulation](./projects/cssStyledComponentsEncapsulation/README.md)

* `yarn styled:start` shows styled components example with native theme
* `yarn babel:start` shows babel example with css variable theme
* `yarn modules:start` shows css modules example

### [Module Federation micro frontends example](./projects/cssMFExample/README.md)

* `yarn mf:start` shows how to work micro frontends with lazy load dynamic components
