const app = require('./src/app');
const PORT = process.env.PORT
// 3030, 3333, 6666, 6060, 8080, 8000

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
