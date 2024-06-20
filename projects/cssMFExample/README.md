# This project uses a micro frontend to unify several projects

https://webpack.js.org/concepts/module-federation/

Each child project should be configured as a module

<img alt="img.png" src="documents/images/childConfig.png" width="600"/>

Each project contains `remoteEntry.js` path where it is started

<img alt="img_1.png" src="documents/images/childEntry.png" width="600"/>

Next step is add DynamicComponent in the project

<img alt="img_2.png" src="documents/images/dynamicComponent.png" width="600"/>

It is necessary to run all projects using `yarn start` in each of them.


Finally, we can start this project.
All css  encapsulation approaches in the one project 
<img alt="img_3.png" src="documents/images/finalResult.png" width="600"/>
