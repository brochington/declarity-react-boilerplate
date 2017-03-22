const fs = require('fs')
const Koa = require('koa')
const path = require('path')

const webpack = require('webpack')
const webpackMiddleware = require('koa-webpack')

const router = require('koa-router')()

const config = require('./webpack.config')

const PORT = 3037

const indexHTML = () =>  new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'index.html'), {encoding: 'utf8'}, (err, data) => {
        if(err) return reject(err)
        resolve(data)
    })
})

const app = new Koa()

app.use(webpackMiddleware({
    config: config
}))

router.get("*", async (ctx, next) => {
    ctx.res.setHeader('Content-Type', 'text/html')
    ctx.body = await indexHTML()
    await next()
})

app.use(router.routes())

app.listen(PORT, (err) => {
    if (err) {
        return console.error(err)
    }

    console.log(`Listening on ${PORT}`)
})
