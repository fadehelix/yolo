# YOLO
### You Only Learn Once Gulp

Gulp configuration boilerplate with most popular tasks. There are also some predefined .scss partials based on SMACSS idea.

## Features:
* Autoprefixer
* Sass Sourcemaps
* Generate .png sprite and sass mixin from many .png files
* Generate .svg sprite and sass mixin from many .svg files
* Optionaly setup [Bourbon](https://www.bourbon.io/docs/latest/) with [Neat grid](https://neat.bourbon.io/docs/latest/)

## How to use
1. `npm install`
2. `gulp`

## How to generate sprites from images
1. __PNG:__ `gulp sprite` - the command assumes that all your images are in _images/sprites/_ folder
2. __SVG:__ `gulp sprite-svg` - all svg images have to be inside _images/sprites-svg/_ folder

## How to use Bourbon and Neat
`npm run setup:bourbon`
