const withPWA = require('next-pwa')({pwa:{ dest:'public', disable: process.env.NODE_ENV === 'development', register:true}})

module.exports = {
    poweredByHeader: false,
    images: {
      domains: ['restcountries.eu'],
    },
    withPWA,
  }