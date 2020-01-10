const { promisify } = require('util')
const inquirer = require('inquirer')
let downLoadGitRepo = require('download-git-repo')
const { waitFnLoading } = require('./util/helpers')
const { fetchRepoList, fetchTagList } = require('./api')
const { defaultDownloadDirectory } = require('./constants')

downLoadGitRepo = promisify(downLoadGitRepo)

// 选择模板仓库
const handleRepos = async () => {
  const repos = await waitFnLoading(fetchRepoList, 'fetching template...')()
  console.log(repos);
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

module.exports = async (projectName) => {
  const repo = await handleRepos()
  const tag = await handleTags(repo)

  console.log(repo, tag, defaultDownloadDirectory);
}
