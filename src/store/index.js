import Tinax from '@tinajs/tinax'

import test from './modules/test'

export const tinax = new Tinax({
  modules: {
    test
  },
})

// for debug
global.tinax = tinax
