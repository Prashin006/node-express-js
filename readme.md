### Steps to follow to clone this repository:
- When we push our code to GitHub we follow the steps:
1. Create an empty repo on GitHub
2. Copy the link (http/ssh)
3. Make a .gitignore file & add "/node_modules" as we are not uploading our node modules that we have installed locally on our system as the file size will be too big
4. We have already created `package.json` file so the person who clones our repo with the command `git clone <link>` where <link> = http/ssh link of our repo
5. He/she simply runs `npm install` on his/her terminal & it will automatically install all the dependencies required for the project 
=> REMEMBER THE DEPENDENCIES ARE IN THE package.json FILE
