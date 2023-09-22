module.exports = {
  entry: {
    bundle: './src/index.ts',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  mode: 'development', //modeはproductionモードとdevelopmentモードの2つある
  resolve: {
    extensitons: ['.ts', '.js'], //拡張子を指定してくれる
  },
  devServer: {
    static: {
      directory: `${__dirname}/dist`,
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/, //拡張子が.tsのファイルをコンパイルする
        lorder: 'ts-lorder',
      },
    ],
  },
};
