### How to reproduce

1. install dependencies with `yarn` and do `yarn worspace panel run dev`
2. go to `http://localhost:7777/p` and try to click on a navlink; it wont work

It will if you first build and run the build version with `yarn workspace panel run build` and `yarn workspace panel run start`

#### HMR issue

1. Try change something in `panel` and see that the changes are not reflected in the browser
