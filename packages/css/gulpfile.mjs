import gulp from "gulp";
import gulpSourcemaps from "gulp-sourcemaps";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "autoprefixer";
import postcss from "gulp-postcss";
import concat from 'gulp-concat'
import cssnano from "cssnano";
import importCss from "gulp-import-css";
import { exclude } from 'gulp-ignore';
import { deleteAsync } from "del";

const { series, src, dest, watch } = gulp;
const { init, write } = gulpSourcemaps;
const sass = gulpSass(dartSass);

const paths = {
  source: "src/**/*.{css,scss}",
  resetStyles: "src/reset.css",
  destination: "dist",
};

function transpileStyles() {
  return src(paths.source)
    .pipe(exclude("src/reset.css"))
    .pipe(init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(concat('index.css'))
    .pipe(write("."))
    .pipe(dest(paths.destination));
}

function transpileResetStyles() {
  return src(paths.resetStyles).pipe(importCss()).pipe(dest(paths.destination));
}

const transpileAll = series(transpileStyles, transpileResetStyles);

function watchStyles() {
  transpileAll();
  watch(paths.source, transpileAll);
}

async function clean() {
  await deleteAsync(paths.destination);
}

function build() {
  return series(clean, style)();
}

export { watchStyles as watch, build, clean };
