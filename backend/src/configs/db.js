module.exports = {
    dialect: 'postgres', // Certifique-se de que o dialect está correto
    host: 'localhost',
    username: 'whatzasDev',
    password: 'whatzasDev',
    database: 'dev2dev',
    port: 5432, // Porta padrão do PostgreSQL
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}
