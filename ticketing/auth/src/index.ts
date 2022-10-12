
import express from 'express'
import { json } from 'body-parser'
import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signUpRouter } from './routes/signup'
import { signOutRouter } from './routes/signout'
 
const app = express()
 
app.use(json())
 
app.use(currentUserRouter)
app.use(signinRouter)
app.use(signUpRouter)
app.use(signOutRouter)
 
app.listen(3000, () => {
    console.log('Auth service listening')
});