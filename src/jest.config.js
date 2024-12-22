module.exports = {
    // Set the root directory for your project.
    rootDir: 'path/to/your/project/root',
  
    // Configure Jest to find test files in the same directory as the components.
    testMatch: ['**/src/components/**/*.{spec,test}.{js,jsx}'],
  
    // Other Jest configuration options...
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },
  };