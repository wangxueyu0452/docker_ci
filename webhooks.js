const http = require('http')
const createHandler = require('github-webhook-handler')
const handler = createHandler({
    path: '/docker_deploy',
    secret: 'mySecret',

})

http.createServer((req, res) => {
    handler(req, res, err => {
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(7777, () => {
    console.log('Webhook listen at 7777')
})

handler.on('error', err => {
    console.error('Error', err.message)
})

// handler.on('*') 所有的行为
handler.on('push', event => {
    console.log('Revice push', event.payload )
    console.log(3)
})