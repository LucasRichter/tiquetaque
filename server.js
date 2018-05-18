const express = require( 'express' )
var app = express()

app.set( 'view engine', 'pug' )

app.use( '/', express.static( 'dest/' ) )
app.use( '/image', express.static( 'dest/image' ) )
app.use( '/css', express.static( 'dest/css' ) )
app.use( '/static/js', express.static( 'dest/js' ) )

app.use( '*', ( req, res ) => {
  res.sendFile( __dirname + '/dest/index.html' )
} )

var server = app.listen( 8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Server listening at http://localhost:8081/")
} )
