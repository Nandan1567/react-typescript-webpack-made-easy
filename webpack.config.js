const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
//  const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'

index_path=""
if(devMode)
index_path="./public";
else
index_path= "./";


module.exports = {
    // mode: "production",

    devtool: "source-map",
    entry:[ 
            path.join(__dirname, '/src/index.tsx'),
    ],

    resolve: {
        extensions: [".ts", ".tsx", ".js",".css"]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './'
    },

    module: {
        rules: [
            {
                // test: /(?<!\.d)\.tsx?$/,
                test: /\.ts(x?)$/,
                // exclude: /(node_modules|src_old|smarthire)/,
                use: [
                    {
                        loader: "ts-loader",
                        // query: {
                        //     cacheDirectory: true,
                        //     presets: ['react', 'es2015']
                        //   },
                        options: {
                            transpileOnly: true,
                            happyPackMode: true,
                            configFile: path.join(__dirname, 'tsconfig.json'),
                        },
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader', 
                exclude: /(node_modules|src_old|smarthire)/,
                // options: {
                //     presets: ['es2015','env','@babel/preset-env']
                // }
                options: {
                    transpileOnly: true,
                    happyPackMode: true,
                    configFile: path.join(__dirname, 'babelconfig.json'),
                },
            },
            // {
            //     test: /\.scss$/,     
            //     use: [
            //       {
            //         loader: 'style-loader',
            //       },
            //       {
            //         loader: 'css-loader',
            //         options: {
            //           sourceMap: true,
            //           importLoaders: 2,
            //         },
            //       },
            //       { loader: 'scoped-css-loader' },
            //       {
            //         loader: 'sass-loader',
            //       },
            //     ],
            //   },
            
            {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ]
              }
              ,
            {
                test: /\.css$/,                
                loader: 'style-loader!css-loader',
                

            },

            {
                test: /\.(svg|png|jpg|jpeg|gif")$/,
                use: [
                    {
                        loader: "file-loader"
                    },

                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM",
    //     "react-router": "ReactRouter"
    // },
    plugins: [
        
        // new ForkTsCheckerWebpackPlugin({
        //     tslint: true,      // change to 'true' later
        //     useTypescriptIncrementalApi: true,
        //     checkSyntacticErrors: true,
        // }),
        
    ],
    // plugins: [
    //     new HtmlWebpackPlugin({
    //       template: './proj/index.html'
    //     })
    //   ]
    //   ,
    devServer: {
        publicPath: "/",
        contentBase: index_path,
        historyApiFallback: {
            index: '404.html'
          },
        hot: true,
        // port: 3000,
        proxy: {
            "/server": {
              target: "http://localhost:7000",
              pathRewrite: {
                '^/server/test_code/': '/test_code/',
                "^/server/test": "/test/",
                "^/server/admin_status": "/admin_status/",
                "^/server/sess": "/sess/",
                "^/server/del": "/del/",
                "^/server/login": "/login/",
                "^/server/signup": "/signup/",
                "^/server/que": "/que/",
                "^/server/addcat": "/addcat/",
                "^/server/setexam": "/setexam/",
                "^/server/addque": "/addque/",
                "^/server/addexam": "/addexam/",
                "^/server/addset": "/addset/",
                "^/server/getcat": "/getcat/",
                "^/server/getexam": "/getexam/",
                "^/server/ver": "/ver/",
                "^/server/count_malpractices": "/count_malpractices/",
                "^/server/exam_status": "/exam_status/",
                "^/server/view_res_user/$": "/view_res_user/",
                "^/server/view_cat_res/$": "/view_cat_res/",
                "^/server/view_res/$": "/view_res/",
                "^/server/view_det_res": "/view_det_res/",
                "^/server/remove_user": "/remove_user/",
                "^/server/remove_cat": "/remove_cat/",
                "^/server/send_cred": "/send_cred/",
                "^/server/sent_cred": "/sent_cred/",
                "^/server/exam_del": "/exam_del/",
                "^/server/get_questions": "/get_questions/",
                "^/server/get_select_que_count": "/get_select_que_count/",
                "^/server/bulk_reg": "/bulk_reg/",
                "^/server/retrive_email_status": "/retrive_email_status/",
                "^/server/email_status_in_db": "/email_status_in_db/",
                "^/server/remove_questions": "/remove_questions/"
              }
            }
          }
    },
};










// const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './src/index.tsx',
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js']
//   },
//   output: {
//     path: path.join(__dirname, '/dist'),
//     filename: 'bundle.min.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         exclude: /(node_modules|src_old|smarthire)/,
//         loader: 'awesome-typescript-loader'
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './proj/index.html'
//     })
//   ]
// }











// var BUILD_DIR = path.resolve(__dirname, './dist');
// var APP_DIR = path.resolve(__dirname, './src/');

// var config = {
//   entry: APP_DIR + '/index.tsx',
//   output: {
//     path: BUILD_DIR,
//     filename: 'bundle.js'
//   }
// };

//  module : {
//     loaders: [
//       { test: /\.tsx?$/,  loaders: [
//         'react-hot-loader',
//         'awesome-typescript-loader'
//     ], exclude: /node_modules/ }
//     ]
//   }

// module.exports = config;