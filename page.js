/*
 * fast add new module script
 */
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const reslove = file => path.resolve(__dirname, './src', file)
// symbol const
const RouterSymbol = Symbol('router'),
    PagesSymbol = Symbol('pages')
// root path
const rootPath = {
    [RouterSymbol]: reslove('router/modules'),
    [PagesSymbol]: reslove('pages')
}
//loggs
const errorLog = error => console.log(chalk.red(`${error}`))
const defaultLog = log => console.log(chalk.magenta(`${log}`))
// module name
let moduleName = new String()
// let fileType = new String()
//const string
const vueFile = module => `<template>
    <div>'${module}'</div>
</template>

<script>
export default {
    name: '${module}',
    data() {
        return {}
    },
    methods: {},
    created() {}
}
</script>

<style lang="scss" scoped></style>
`
// route file
const routerFile = module => `// 默认创建的模板...
import Layout from 'pages/layout/Layout'
export default [
    {
        path: '/${module}',
        name: '${module}',
        component: Layout,
        children: [
            {
                path: 'index',
                name: '${module}-index',
                component: () => import(/* webpackChunkName: '${module}' */ '@/pages/${module}/index')
            }
        ]
    }
]
`
/**
 * generate file
 * @param {*} filePath
 * @param {*} content
 * @param {*} dirPath
 */
const generateFile = async (filePath, content, dirPath = '') => {
    try {
        // create file if file not exit
        if (dirPath !== '' && !(await fs.existsSync(dirPath))) {
            await fs.mkdirSync(dirPath)
            defaultLog(`created ${dirPath}`)
        }
        if (!(await fs.existsSync(filePath))) {
            // create file
            await fs.openSync(filePath, 'w')
            defaultLog(`created ${filePath}`)
        }
        await fs.writeFileSync(filePath, content, 'utf8')
    } catch (error) {
        errorLog(error)
    }
}
// module-method map
const generates = new Map([
    [
        'page',
        async module => {
            // module file
            const filePath = path.join(rootPath[PagesSymbol], module)
            const vuePath = path.join(filePath, '/index.vue')
            await generateFile(vuePath, vueFile(module), filePath)
        }
    ],
    // router is not need new folder
    [
        'router',
        async module => {
            const routerPath = path.join(rootPath[RouterSymbol], `/${module}.js`)
            await generateFile(routerPath, routerFile(module))
        }
    ]
])
console.log(chalk.cyanBright('请输入模块的英文名称(name)'))
// files
const files = ['page', 'router']
// 和命令行进行交互 获取的创建的模块名称
process.stdin.on('data', chunk => {
    try {
        if (!moduleName) {
            moduleName = chunk
        } else {
            chunk = chunk.slice(0, -2) // delete /n
            files.forEach(async (el, index) => {
                // 执行创建语句
                await generates.get(`${el}`).call(null, chunk.toString())
                if (index === files.length - 1) {
                    console.log(chalk.blueBright('恭喜你，文件创建成功~'))
                    process.stdin.emit('end')
                }
            })
        }
    } catch (error) {
        errorLog(error)
    }
})
/* process.stdin.on('end', () => {
    defaultLog('create module success')
}) */
