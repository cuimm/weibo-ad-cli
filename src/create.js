const path = require('path')
const { promisify } = require('util')
const inquirer = require('inquirer')
let ncp = require('ncp')
let downLoadGitRepo = require('download-git-repo')
const { waitFnLoading } = require('./util/helpers')
const { fetchRepoList, fetchTagList } = require('./api')
const { defaultDownloadDirectory } = require('./constants')

ncp = promisify(ncp)
downLoadGitRepo = promisify(downLoadGitRepo)

// 选择模板仓库
const handleRepos = async () => {
  const repos = await waitFnLoading(fetchRepoList, 'fetching template...')()
  const { repo } = await inquirer.prompt({
    name: 'repo',
    type: 'list',
    choices: repos,
    message: 'please choose a template to create project',
  })
  return repo
}

// 选择tag标签
const handleTags = async (repo) => {
  const tags = await waitFnLoading(fetchTagList, 'fetch tags...')(repo)
  const { tag } = await inquirer.prompt({
    name: 'tag',
    type: 'list',
    choices: tags,
    message: 'please choose a tag',
  })
  return tag
}

// 下载模板
const downloadRepo = async (repo, tag) => {
  let api = `cuimm/${repo}`
  tag && (api += `#${tag}`)
  const dest = `${defaultDownloadDirectory}/${repo}`
  await downLoadGitRepo(api, dest)
  return dest
}

module.exports = async (projectName) => {
  const repo = await handleRepos()
  const tag = await handleTags(repo)
  const source = await waitFnLoading(downloadRepo, 'download template...')(repo, tag)
  await ncp(source, path.join(path.resolve(), projectName)) // 将下载的文件拷贝到当前执行命令的目录下
  console.log(source, projectName);
}
