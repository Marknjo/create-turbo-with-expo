// Learn more: https://docs.expo.dev/guides/monorepos/
const { getDefaultConfig } = require("@expo/metro-config");
const path = require("path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

// Create the default Metro config
/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(projectRoot, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages and in what order
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];
// 3. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
config.resolver.disableHierarchicalLookup = true;

module.exports = config;
