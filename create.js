const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const program = require('commander')
const inquirer = require('inquirer')
// 彩色打印方法
const print = (log, color = 'cyanBright') => console.log(chalk[color](`${log}`))
// 递归创建目录 同步方法
const mkdirsSync = (dirname, baseUrl = './src/pages') => {
    // 创建到
    dirname = path.resolve(__dirname, baseUrl, dirname)
    if (fs.existsSync(dirname)) {
        return true
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname)
            return true
        }
    }
}

const getFile = (url, name) => fs.readFileSync(path.resolve(__dirname, 'template/vue', url), 'utf8').replace(/__name__/g, name || '未定义')

// vue文件选项
const vuePrompt = {
    name: 'type',
    type: 'list',
    message: `Please pick a page type:`,
    choices: [
        {
            name: 'single page',
            value: '__single__'
        },
        {
            name: 'multiple page',
            value: '__multiple__'
        }
    ]
}

program.version(require('./package').version).usage('<command> [options]')
program
    .command('create <template>')
    .description('create a new vue template')
    .option('-d, --default', 'Skip prompts and use default preset')
    .action(async name => {
        if (!/^[a-z]+-[a-z]+$/.test(name)) {
            print('请输入正确的格式哦亲(ಥ﹏ಥ)', 'red')
            return
        }
        // vue文件映射
        const mVueMap = new Map([
            ['bus', getFile('multiple/common-bus.vue', name)],
            ['list', getFile('multiple/common-list.vue', name)],
            ['opt', getFile('multiple/common-opt.vue', name)]
        ])
        const sVueMap = new Map([['index', getFile('single/index.vue', name)]])
        const path = name.replace('-', '/')
        const vueName = name.split('-')[1]
        // 创建目录
        await mkdirsSync(path)
        // 选择是单页还是多页(是否带跳转)
        const answer = await inquirer.prompt([vuePrompt])
        // 写入文件
        if (answer.type === '__single__') {
            const url = `${__dirname}/src/pages/${path}/index.vue`
            fs.writeFileSync(url, sVueMap.get('index'), 'utf8')
            print(`(*^▽^*) created ${url}`)
        } else {
            mVueMap.forEach((v, k) => {
                const url = `${__dirname}/src/pages/${path}/${vueName}-${k}.vue`
                fs.writeFileSync(url, v, 'utf8')
                print(`(*^▽^*) created ${url}`)
            })
        }
    })

program.parse(process.argv)
