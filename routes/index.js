const path = require('path')
const router =require('express').Router()
const apiRoutes = require('./apiRoutes/todo')

// API routes
// router.use('/api', (req, res) => {
//     res.send("hello")
// })
router.use('/api', apiRoutes)

//If no API routesare hit, send the React App
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router