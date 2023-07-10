module.exports = {
  '{apps,libs,tools}/**/*.{ts,js,json,md,html,css,sccss}': [
    'nx affected --target lint --uncommitted --fix true',
    'nx affected --target test --uncommitted',
    'nx format:write --uncommitted',
  ],
};
