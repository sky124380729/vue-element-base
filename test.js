const fs = require('fs')

const x = `
    {
        path: 'fn',
        component: () => import('pages/test/fn'),
        name: 'test-fn',
        meta: { title: 'fn组件', menu: true }
    } /* SLOT */`

let temp = ''
try {
    temp = fs.readFileSync(`${__dirname}/src/router/modules/test.js`, 'utf8')
    fs.writeFileSync(`${__dirname}/src/router/modules/test2.js`, temp.replace(/\n {4}\/\* SLOT \*\//g, `${x}`), 'utf8')
} catch (e) {
    temp = `export default [
    /* SLOT */
]
`
    fs.writeFileSync(`${__dirname}/src/router/modules/test2.js`, temp.replace(/\n {4}\/\* SLOT \*\//g, `${x}`), 'utf8')
}
