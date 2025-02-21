import { NightwatchAPI, Awaitable } from 'nightwatch'

declare module 'nightwatch' {
  export interface NightwatchCustomCommands {
     /**
     * When called from the afterEach test hook `endLambda` will update the temporary test run name
     * and status in the LambdaTest portal with the name of the actual test and the pass or fail
     * status of the it.
     * Should be called before closing the browser session.
     */
     endLambda(): Awaitable<NightwatchAPI, unknown>;
  }
}
