const app = require('index.js')
const config = require('./app/config')

const port = config.app.port

app.listen(port, () => console.log('Listening on port ' + port))
