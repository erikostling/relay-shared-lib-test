module.exports = {
  root: './',
  sources: {
    src: 'main',
  },
  projects: {
    main: {
      schema: 'schema.graphql',
      language: 'typescript',
      output: 'src/__generated__',
    },
  }, 
}