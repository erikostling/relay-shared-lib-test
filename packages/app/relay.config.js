module.exports = {
  root: '../',
  sources: {
    'app/src': 'main',
    'relay/src': 'main',
  },
  projects: {
    main: {
      schema: 'app/schema.graphql',
      language: 'typescript',
      output: 'app/src/__generated__',
    },
  }, 
}