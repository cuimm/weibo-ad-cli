const axios = require('axios')

// 拉取所有项目列表
const fetchRepoList = async () => {
  const api = 'https://api.github.com/users/cuimm/repos'
  const { data } = await axios.get(api)
  return data
}

// 拉取仓库标签
const fetchTagList = async (repo) => {
  const api = `https://api.github.com/repos/cuimm/${repo}/tags`
  const { data } = await axios.get(api)
  return data
}

module.exports = {
  fetchRepoList,
  fetchTagList,
}
