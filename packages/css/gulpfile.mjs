import gulp from "gulp";
const { series, src, dest, watch } = gulp;

import gulpSourcemaps from "gulp-sourcemaps";
const { init, write } = gulpSourcemaps;

import * as dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

import autoprefixer from "autoprefixer";
import postcss from "gulp-postcss";
import cssnano from "cssnano";
import { deleteAsync } from "del";

const paths = {
  sources: ["**/*.scss", "index.css"],
  destination: "dist",
};

function style() {
  return src(paths.sources)
    .pipe(init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(write("."))
    .pipe(dest(paths.destination));
}

function watchStyles() {
  style();
  watch(paths.sources, style);
}

async function clean() {
  await deleteAsync(paths.destination);
}

function build() {
  return series(clean, style)();
}

export { watchStyles as watch, build, clean };
