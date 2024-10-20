import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import createCockpitApp from 'adonis-cockpit/inertia'
import { DefineComponent } from 'vue'

createCockpitApp({
  resolve: (name) => {
    return resolvePageComponent(
      `../pages/${name}.vue`,
      import.meta.glob<DefineComponent>('../pages/**/*.vue')
    )
  },
}, {})