const express = require( 'express' )
var app = express()

app.set( 'view engine', 'html' )

app.use( '/', express.static( 'dest/' ) )
app.use( '/images', express.static( 'dest/images' ) )
app.use( '/css', express.static( 'dest/css' ) )
app.use( '/static/js', express.static( 'dest/js' ) )

app.use( '*', ( req, res ) => {
  res.sendFile( __dirname + '/dest/index.html' )
} )

const server = app.listen( 80, function() {
  var host = server.address().address
  var port = server.address().port

  console.log( 'Server listening at http://localhost/' )
} )
