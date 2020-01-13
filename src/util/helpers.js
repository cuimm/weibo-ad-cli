const ora = require('ora')

exports.waitFnLoading = (fn, message) => async (...args) => {
  const spinner = ora(message).start()
  const data = await fn(...args)
  spinner.succeed()
  return data
}
