import { boot } from 'quasar/wrappers'
import VuePlugin from '@quasar/quasar-ui-qoverlay'

export default boot(({ app }) => {
  app.use(VuePlugin)
})

