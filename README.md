## Website Performance Optimization portfolio project

This is a project from Udacity frontend nanodegree program. The task was to optimize online portfolio website for speed. 
The task consists of two parts: 1) Optimize PageSpeed Insights score for index.html 2) Optimize critical rendering path for pizza.html.
The following are the optimizations steps made to achieve the assignment objectives:

## 1. Optimizing index.html to achieve better PageSpeed Insights score

The achieved PageSpeed Insights score is: **99/100** - mobile and desktop.
Implemented optimizations: 

- Add `media="print"` to `css/print.css` call
- Add async attribute to the Google Analytics and to perfmatters.js scritp and point it to use minified versions of js and css
- Remove comment from index.html
- Remove google foonts
- Optimize images using Grunt imagemin and use them instead
- Inline style.css via Grunt task inline_css

On additional note here are the tasks for Grunt task-runner that were used in this project:
- Minify JavsScript files - `uglify`
- Minify CSS files - `cssmin`
- Inline CSS after minifying with `inlinecss`
- Compress images with `imagemin`
- Minify HTML files with `htmlmin`

Note: certain images were minified with Grunt task but some were still bad so for the final project the ones recommended by PageSpeed Insights were used.

## 2. Optimizing the critical rendering path for pizza.html

The first part was to optimize changePizzaSizes so that fps matches the specification. The following was done there:
- Added "use strict"
- pizzaSize element querySelector within changeSliderLabel is moved in front of the switch (DRY)
- content for determineDx used in changePizzaSizes is changed to use percents instead of pixels (as mentioned in Cam's lecture)
- the content of the changed determineDx function is moved in front of the loop in changePizzaSizes (it was inside and was executing on every iteration)

The second path was to optimize background pizza fps on scrolling. The following optimizatins were made:
- Lengthy: `var phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));` calculation was moved outside of the loop.
`i % 5` basically shows that we need only 5 different values that we need to calculate so instead of calculating phase for every component (200 of them)
we calculate only 5 values inside phases precalculation function and put them in `phases` array that we later use within the loop.
- The second optimization was to use translateX instead of setting style.left value each time. That lead to a slight change of DOMContentLoaded handler
since we had to calculate and set initial position for every component there and then to use translateX on scroll change.

## Running instructions

In order to see optimization results, open index.html file from the `dist` folder.
