// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// Add custom configuration
config.maxWorkers = 4; // Limit the number of workers
config.transformer.minifierConfig = {
  keep_classnames: true, // Preserve class names
  keep_fnames: true, // Preserve function names
  mangle: {
    keep_classnames: true,
    keep_fnames: true,
  },
};

// Increase timeouts
config.server = {
  ...config.server,
  timeoutInterval: 30000, // 30 seconds
};

module.exports = config;