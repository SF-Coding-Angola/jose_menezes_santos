/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.group(()=>{
  router.group(()=>{
    router.post('register', "#controllers/auth_controller.register")
    router.post('login', "#controllers/auth_controller.login")
  }).prefix('auth')

  router.group(()=>{
    router.resource('store', "#controllers/stores_controller")
  })

  router.group(()=>{
    router.resource('product', "#controllers/products_controller")
  })
}).prefix('api/v1')
