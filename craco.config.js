const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#0F5EDD',
              '@text-color': '#000',
              '@btn-danger-bg': '#EE1B24',
              '@input-height-base': '40px',
              '@height-base': '40px',
              '@border-radius-base': '6px',
              '@select-selection-item-border-color': '#237804',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
