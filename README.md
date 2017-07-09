# gulpfile.js
simple gulpfile to get you started with using gulp, sass, browser-sync, and auto-prefixer all together

### To get started
Clone this repo, download it, or copy the gulpfile.js into your project structure.  **Remember** to put it in the root of your directory, or it won't work.

### Download dependenices
Install node, then run `npm init` if you haven't already.

After that, run these commands below:
<br>
- `npm install gulp -g` to download gulp globally
- `npm install gulp gulp-sass gulp-autoprefixer browser-sync --save-dev` to download and save your dependencies in the dev section because we will not need these dependencies once you bring your application into production.

### Dependencies
- `gulp` : the task runner that will be running the tasks 
- `gulp-sass` : engine that will convert your SASS files into CSS files
- `gulp-autoprefixer` : engine that will parse the generated CSS files and add vendor prefixes to CSS rules
- `browser-sync` : used for cross-device testing and hot-reloading of the browser to strip manual refreshing from your workflow

### File structure
If you want to hit the ground running quick, and you have a brand spanking new project, set up your file strucure as follows:
<br>
```
.
|____app
| |____css
| |____html
| |____sass
```

- This is the way the gulp file is currently set up to work.

- If you would like to change the file structure, or you already have a file structure set up, then you will have to change the folders that gulp is watching, otherwise, it won't be able to see your changes.
- If you have sub folders inside the folder structure used by this gulp file, all you have to change is, before the `*.(file-type)`, put a `/**/` which will allow gulp to look into the sub-folders of the upper level folder.  Very handy if you like to seperate your files into sub-folders. It will then look like, for example, `app/scss/**/*.scss`

### Running
To run this script, all you have to do is go the root of your directory, and type in the terminal of your choice `gulp` and it will automatically run and open your browser at the `app` folder level with the directory showing.

Anytime you make a change, browsersync will automatically reload your page with the changes inside the folders it is watching.

**I hope this helps you out!**

