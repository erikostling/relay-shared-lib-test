module.exports = {
  root: '../../',
  sources: {
    'apps/core/src': 'main',
    'packages/relay/src': 'main',
  },
  projects: {
    main: {
      schema: 'apps/core/schema.graphql',
      language: 'typescript',
      output: 'apps/core/src/__generated__',
    },
  }, 
}