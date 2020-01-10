module.exports = {
  create: {
    alias: 'c',
    description: 'create a project',
    examples: [
      'weibo-ad-cli create <project-name>',
    ],
  },
  config: {
    alias: 'conf',
    description: 'config project variable',
    examples: [
      'weibo-ad-cli config set <key> <value>',
      'weibo-ad-cli config get <key>',
    ],
  },
  '*': {
    alias: '',
    description: 'command not found',
    examples: [],
  },
}
