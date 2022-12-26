/**
 * API Config
 *
 * */

export default {
  // The URL we're connecting to
  hostname: 'https://innowise-cv-builder.netlify.app',
  imgurHostname: 'https://api.imgur.com/3/image',

  endpoints: [
    { key: 'save', url: '/api/save', method: 'POST' },
    { key: 'download', url: '/api/download', method: 'GET' },
    { key: 'download', url: '/api/download/api/download', method: 'POST' },
  ],
};
