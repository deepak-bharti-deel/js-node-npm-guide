NPM, Node, NVM instalation 

1. Install nvm
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

2. Install node (You can install any node version)
    nvm install <node_version>

3. nvm ls , This command tells all the node versions installed

4. nvm ls-remote , This command tells all the node versions available in cloud

5. nvm use <node_version> , to use any other node version 

6. nvm alias default <node_version>

7. nvm alias latest <node_version>

    by default nvm uses default node version 

    You need not to install npm separately, it comes with node installatio i.e when you do
    nvm install <node_version> with that node version comes npm as well :-)

8.  uninstalling nvm, use following 2 commands 
    - nvm use system
    - npm uninstall -g a_module

### FAQs

What is Node ?

    Node is a runtime environment for executing javascript code.

What is a runtime environment?

    Well, Before node application were build in javascript which run into browsers. 
    
    Different browsers use different javascript engines which provides a runime environment to js code.
    this js engine converts the js code to machine readable code.

    Eg. 
    Google              => V8 engine
    firefox             => Spider Monkey
    Internet Explorer   => Chakra

    That is why different browsers may show different result for same js code. 
    
    Before 2009 the only way to execute js code was browsers, but in 2009 Ryan Dahl came up with an idea 
    to run js code out of browsers. So he took the chrome's v8 js engine(which is fastest js engine) 
    and embedded it into a c++ program which he called node.exe or Node.

So similar to a browser Node is a runtime environment for javascript code which contains a js engine
that executes a js code. besides node provides module and objects to work with networks and fs etc which
is not available in browsers.

So both node and browsers have a js engine but provide different runtime environment.

### Miscellaneous


$ npm install package_name --save        
   
    -- save option not only installs the package but also saves it as a dependency in package.json file.


$ jshint js_file.js
   
    tells the javascripts related errors in the js_file module


In production, it is recommended to minify any JavaScript code that is included with your application. 
Minification can help your website load several times faster, especially as the size of your 
JavaScript source code grows.

Here's one way to set it up:

    npm init -y in your project folder (don't skip this step!)
    npm install terser

Now, to minify a file called like_button.js, run in the terminal:
     
    npx terser -c -m -o like_button.min.js -- like_button.js

This will produce a file called like_button.min.js with the minified code in the same directory. If you're typing this often, you can create an npm script to give this command a name.


Adding custom npm scripts
https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633

