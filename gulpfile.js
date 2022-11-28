const { src, dest, series, watch } = require('gulp')

// Rutas
const dir = {
  allFolders: './**/',
  allFiles: './**/*',
  themes: './themes/*/*.pug',
  xml: './themes/*/*.xml'
}

const blogger = {
  jsHack: `&lt;textarea id=&quot;bjs&quot; readonly hidden&gt;</body>&lt;/textarea&gt;
  <script>document.getElementById('bjs').remove()</script>&lt;/body&gt;`,
  tags: /<(b:*[^/>]*)>\s*<\/(b:*[^>]*)>/g,
}

// Plugins
const rename = require("gulp-rename")
const pug = require('gulp-pug')

const replace = require('gulp-replace')

const build = () => {
  return src( [dir.themes, `!${dir.allFolders}_*`], { base: "." } )
    .pipe(pug({
      pretty: true,
      basedir: "./"
    }))
    .pipe(replace(blogger.tags, "<$1/>"))
    .pipe(replace('</body>', blogger.jsHack))
    .pipe( rename( { extname: '.xml' } ) )
    .pipe( dest( './' ) )
}

const watchFiles = () => {
  watch(
    [ dir.allFiles, `!${dir.xml}` ],
    series( build )
  );
};

exports.build = build;
exports.watch = watchFiles;
exports.default = watchFiles;