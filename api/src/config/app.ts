export default {
  name: 'VTPayments - Virtual Terminal',
  environment: process.env.APP_ENV,
  interpreter: process.env.INTERP || 'ts',
  port: process.env.APP_PORT,
  url: process.env.APP_URL,

  isProduction() {
    return process.env.APP_ENV === 'production'
  },
}
