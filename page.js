/*
 * fast add new module script
 */
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const reslove = file => path.resolve(__dirname, './src', file)
// symbol const
const RouterSymbol = Symbol('router')
const PagesSymbol = Symbol('pages')
// root path
const rootPath = {
    [RouterSymbol]: reslove('router/modules'),
    [PagesSymbol]: reslove('pages')
}
//loggs
const errorLog = error => console.log(chalk.red(`${error}`))
const defaultLog = log => console.log(chalk.magenta(`${log}`))

const vueFile = module => `<template>
    <div>${module}</div>
</template>

<script>
export default {
    name: '${module}',
    props: {
        id: String
    },
    data() {
        return {}
    },
    methods: {},
    created() {
        console.log(this.id)
    }
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
        redirect: '/${module}/list',
        component: Layout,
        children: [
            {
                path: 'list',
                name: '${module}-list',
                component: () => import(/* webpackChunkName: '${module}' */ '@/pages/${module}/List')
            },
            {
                path: 'opt/(view/)?:id?',
                props: true,
                name: '${module}-opt',
                component: () => import(/* webpackChunkName: '${module}' */ '@/pages/${module}/Opt')
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
const generates = new Map([
    // 创建页面的逻辑
    [
        'page',
        async module => {
            const filePath = path.join(rootPath[PagesSymbol], module)
            await generateFile(path.join(filePath, '/List.vue'), vueFile(module), filePath)
            await generateFile(path.join(filePath, '/Opt.vue'), vueFile(module), filePath)
        }
    ],
    // 窗机路由的逻辑
    [
        'router',
        async module => {
            const routerPath = path.join(rootPath[RouterSymbol], `/${module}.js`)
            await generateFile(routerPath, routerFile(module))
        }
    ]
    // TODO:创建api的逻辑
])
console.log(chalk.cyanBright('请输入模块的英文名称(name)'))
// files
const files = ['router', 'page']
// 和命令行进行交互 获取的创建的模块名称
process.stdin.on('data', async chunk => {
    try {
        // 获取输入的模块名称并删除/n
        chunk = chunk.slice(0, -2)
        await files.forEach(async el => {
            // 执行创建语句
            await generates.get(`${el}`).call(null, chunk.toString())
        })
        setTimeout(() => {
            console.log(chalk.blueBright('恭喜你，文件创建成功~'))
        }, 0)
        process.stdin.emit('end')
    } catch (error) {
        errorLog(error)
    }
})
/* process.stdin.on('end', () => {
    defaultLog('create module success')
}) */
