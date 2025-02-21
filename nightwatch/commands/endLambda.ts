import { NightwatchAPI, NightwatchCustomCommandsModel } from 'nightwatch'

export default class EndLambda implements NightwatchCustomCommandsModel {
  async command(this: { api: NightwatchAPI }): Promise<NightwatchAPI> {
    if (this.api.options.webdriver?.host === 'localhost') {
      console.info(
        'Test was not run against LambdaTest. Update not required. Exiting endLambda().'
      )

      return this.api
    }

    const lambdaSettings = {
      user: this.api.options.username,
      key: this.api.options.accessKey
    }

    if (!lambdaSettings.user || !lambdaSettings.key) {
      console.error(
        'Missing one or more LambdaTest configuration options (username or access_key). Exiting.'
      )

      return this.api
    }

    const jobName = this.api.currentTest.name
    const moduleName = this.api.currentTest.module
      ? `${this.api.currentTest.module} - `
      : ''
    const status =
      this.api.currentTest.results.testcases[jobName].failed +
        this.api.currentTest.results.testcases[jobName].errors ===
        0 ? 'passed' : 'failed'
    await this.api.execute(`lambda-status=${status}`)
    await this.api.execute(`lambda-name=${moduleName + jobName}`)

    return this.api
  }
};