/**
 * API Config
 *
 * */

export default {
  // The URL we're connecting to
  hostname: 'https://innowise-cv-builder.netlify.app',
  imgurHostname: 'https://api.imgur.com/3/image',

  endpoints: [
    { key: 'save', url: 'https://innowise-cv-builder.netlify.app/api/download/api/save', method: 'POST' },
    { key: 'download', url: 'https://innowise-cv-builder.netlify.app/api/download', method: 'GET' },
    { key: 'download', url: 'https://innowise-cv-builder.netlify.app/api/download/api/download', method: 'POST' },
  ],
};
