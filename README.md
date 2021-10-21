Challenge 1: Code analysis

=============


The first step was to check ramda documentation in https://ramdajs.com/.

I created a project folder named "offlineTest", where I installed ramda dependency with npm install ramda. (npm and nodejs were already installed in the computer).

I use the "vscode" code editor and inside of it, I initialized the repository.

Then I created a .gitignore file, to ignore the "/node_modules/" folder.

In the project folder I created the "/src/" folder, where I  created the main file, which will have the attached code, in a file named app.js.

Running "node src/app.js", the result of the ramda code is [ 46, 15, 0 ].

My next step is to analyze the code, wich uses currying, a concept I need to research further.


Analyzing the code:
R.reduce((acc,x) => R.compose(R.flip(R.prepend)(acc), R.sum,R.map(R.add(1)))([x,...acc]), [0])([13, 28]);


