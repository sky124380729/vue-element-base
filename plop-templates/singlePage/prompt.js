module.exports = {
    description: 'generate a single page',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'page name please',
            validate(value) {
                if (!/^[a-z]+-[a-z]+$/.test(value)) {
                    return 'name must like xxx-yyy'
                }
                return true
            }
        }
    ],
    actions: data => {
        const actions = [
            {
                type: 'add',
                path: `src/pages/${data.name.replace('-', '/')}/index.vue`,
                templateFile: 'plop-templates/singlePage/index.hbs',
                data: {
                    name: data.name,
                    route: data.name.replace('-', '/')
                }
            }
        ]

        return actions
    }
}
