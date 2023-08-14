const FILES_AND_UPLOAD_TYPE_FILTERS = {
  images: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/tiff', 'image/tif', 'image/x-icon',
    'image/svg+xml', 'image/bmp', 'image/x-ms-bmp', 'image/vnd.microsoft.icon'],
  documents: [
    'application/pdf',
    'text/plain',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/msword',
    'application/vnd.ms-excel',
    'application/vnd.ms-powerpoint',
    'application/csv',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'text/x-tex',
    'application/x-pdf',
    'application/vnd.ms-excel.sheet.macroenabled.12',
    'file/pdf',
    'image/pdf',
    'text/csv',
    'text/pdf',
    'text/x-sh',
    'application/pdf',
  ],
  audio: ['audio/mpeg', 'audio/mp3', 'audio/x-wav', 'audio/ogg', 'audio/wav', 'audio/aac', 'audio/x-m4a',
    'audio/mp4', 'audio/x-ms-wma'],
  code: ['application/json', 'text/html', 'text/javascript', 'application/javascript', 'text/css', 'text/x-python',
    'application/x-java-jnlp-file', 'application/xml', 'application/postscript', 'application/x-javascript',
    'application/java-vm', 'text/x-c++src', 'text/xml', 'text/x-scss', 'application/x-python-code',
    'application/java-archive', 'text/x-python-script', 'application/x-ruby', 'application/mathematica',
    'text/coffeescript', 'text/x-matlab', 'application/sql', 'text/php'],
};

export default FILES_AND_UPLOAD_TYPE_FILTERS;