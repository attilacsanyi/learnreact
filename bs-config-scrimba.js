module.exports = {
  port: 2301,
  startPath: '/scrimba',
  open: 'external',
  host: 'dev.localhost',
  server: {
    baseDir: './dist/apps/scrimba.prod',
    middleware: {
      1: require('compression')(),
    },
  },
};
