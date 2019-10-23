module.exports = {
    description: 'generate a multiple page',
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
        const name = '{{name}}'
        const vueName = data.name.split('-')[1]
        const actions = [
            /*  {
                type: 'addMany',
                destination: `src/pages/${data.name.replace('-', '/')}`,
                base: 'plop-templates/multiplePage/',
                templateFiles: ['plop-templates/multiplePage/', '*.hbs'],
                globOptions: {
                    expandDirectories: {
                        files: ['*.hbs'],
                        extensions: ['vue']
                    }
                },
                data: {
                    name: data.name
                }
            } */
            {
                type: 'add',
                path: `src/pages/${data.name.replace('-', '/')}/${vueName}-bus.vue`,
                templateFile: 'plop-templates/multiplePage/common-bus.hbs',
                data: {
                    name: name
                }
            },
            {
                type: 'add',
                path: `src/pages/${data.name.replace('-', '/')}/${vueName}-list.vue`,
                templateFile: 'plop-templates/multiplePage/common-list.hbs',
                data: {
                    name: name
                }
            },
            {
                type: 'add',
                path: `src/pages/${data.name.replace('-', '/')}/${vueName}-opt.vue`,
                templateFile: 'plop-templates/multiplePage/common-opt.hbs',
                data: {
                    name: data.name
                }
            }
        ]

        return actions
    }
}
