let scss = `/** @define top-bar */
.top-bar {
    div {} /*not ok, tag with weak semantics*/
    a {} /* ok */
    ul {} /* ok too */
}

/** @define notification */
.notification {
    a {} /*ok*/
    .notification__board {} /*ok typical BEM */
}
`
const postcss = require('postcss')
const bemLinter = require('postcss-bem-linter');

const allowedTags = ["h[1-6]", "ul", "li", "a"].join("|")

const linter = bemLinter({
    componentName: "^[A-Za-z-]+",
    componentSelectors: {
        initial: `^\\.{componentName}(?:(__|--)\\w[\\w-_]*)?$`,
        combined: `^(\\.{componentName}(?:(__|--)\\w[\\w-_]*)?|${allowedTags})$`
    }
  });

postcss()
    .use(linter)
    .process(scss, {from:undefined})
    .then(result => {
        for(const msg of result.messages){
            console.log(msg.text, `line:${msg.line}`)
        }
    });
