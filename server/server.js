import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.js';
import socketIo from 'socket.io';
import extractBeersIds from './util/extractBeersIds';
import getMultipleApi from './services/getMultipleApi';

// not required - just gives us an endpoint to show server is alive
// import beerTemps from './routes/beerTemps';

// const port = process.env.PORT || 4001;
var cors = require('cors');
const app = express();
app.use(
  cors({
    origin: 'http://localhost:8080/',
  })
);

// app.use(webpackMiddleware(webpack(webpackConfig)));

const server = app.listen(4001, () => {
  console.log('Listening...');
});

const io = socketIo(server);

const getTempsAndEmit = async (socket, beersIds) => {
  try {
    const beersTemps = await getMultipleApi(
      'https://temperature-sensor-service.herokuapp.com/sensor/',
      beersIds
    );
    socket.emit(
      'FromAPI',
      beersTemps.map(beersTemp => {
        return beersTemp.data;
      })
    );
  } catch (error) {
    console.error(`Error at getTempsAndEmit: ${error.code}`);
  }
};

let interval;

io.on('connection', socket => {
  // identify the beers IDs required from the query string
  let beersIds = socket.handshake.query.beers
    ? extractBeersIds(socket.handshake.query.beers)
    : '';
  console.log('new client connected, looking for temperatures of ' + beersIds);

  // create polling interval and call the api query function split out as separate function
  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => getTempsAndEmit(socket, beersIds), 15000);

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});
