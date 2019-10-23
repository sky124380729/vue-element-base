const viewSingleGenerator = require('./plop-templates/singlePage/prompt')
const viewMultipleGenerator = require('./plop-templates/multiplePage/prompt')
const componentGenerator = require('./plop-templates/component/prompt')

module.exports = function(plop) {
    plop.setGenerator('single-view', viewSingleGenerator)
    plop.setGenerator('multiple-view', viewMultipleGenerator)
    plop.setGenerator('component', componentGenerator)
}
