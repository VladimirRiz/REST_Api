let io;

module.exports = {
  init: (httpServer) => {
    io = require('socket.io').listen(httpServer);
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error('Socket not initialize');
    }
    return io;
  },
};
