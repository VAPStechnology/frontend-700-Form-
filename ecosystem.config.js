module.exports = {
    apps: [
      {
        name: 'vite-dev',
        script: 'npm',
        args: 'run dev',
        env: {
          NODE_ENV: 'development',
        }
      },
      {
        name: 'vite-build',
        script: 'npm',
        args: 'run build',
        env: {
          NODE_ENV: 'productnpm ion',
        }
      },
      {
        name: 'vite-preview',
        script: 'npm',
        args: 'run preview',
        env: {
          NODE_ENV: 'production',
        }
      }
    ]
  };
  