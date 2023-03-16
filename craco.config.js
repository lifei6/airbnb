const CracoLessPlugin = require("craco-less");
const path = require('path')
// 路径拼接
const resolve = pathname=>path.resolve(__dirname,pathname)


module.exports = {
    // less
    plugins: [
        {
          plugin: CracoLessPlugin,
          options: {
            lessLoaderOptions: {
              lessOptions: {
                modifyVars: { "@primary-color": "#1DA57A" },
                javascriptEnabled: true
              }
            }
          },
        },
      ],
    // webpack
    webpack:{
        // 配置别名
        alias:{
            '@':resolve('src'),
            'components':resolve('src/components'),
            'utils':resolve('src/utils'),
            // 配置m-ui
            // '@mui/styled-engine': '@mui/styled-engine-sc'
        }
    }
}