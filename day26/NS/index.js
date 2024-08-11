const io = require('socket.io')(8000, {
    cors: {
        origin: 'http://127.0.0.1:5501',
        methods: ['GET', 'POST']
    }
});

const users = {}; // Store user data

io.on('connection', socket => {
    console.log('A user connected');

    socket.on('new-user-joined', name => {
        console.log("New user:", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        console.log('Message received:', message);
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
        delete users[socket.id];
    });
});
