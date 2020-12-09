module.exports = {
  apps: [
    {
       name: 'entertainme - Client',
       script: 'cd client && npm install && npm start',
    },
    {
      name: 'entertainme - Orchestrator',
      script: 'cd server/orchestrator/graphql && npm install && nodemon app.js',
      PORT: 4000
    },
    {
      name: 'entertainme - Service Movies',
      script: 'cd server/services/movies && npm install && nodemon app.js',
      env: {
        DATABASE_NAME: "entertainMe-db",
        COLLECTION_NAME: "movies",
        PORT: 3004
      },
    },
    {
      name: 'entertainme - Service TV Series',
      script: 'cd server/services/series && npm install && nodemon app.js',
      env: {
        DATABASE_NAME: "entertainMe-db",
        COLLECTION_NAME: "series",
        PORT: 3002
      },
    },
  ],
};