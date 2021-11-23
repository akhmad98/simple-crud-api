const { PORT } = require('./common/config');
const app = require('./app');

app.listen(PORT, () => {
    console.log(`App listening to PORT on http://localhost:${PORT}`)
});
