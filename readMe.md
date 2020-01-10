1. 全局包weibo-ad-cli
    - package.json 下添加命令: 
    ```json
    {
         "bin": {
             "weibo-ad-cli": "./bin/www.js"
         }
    }
    ```
    - npm link 引入全局包指令weibo-ad-cli
    ```
    /usr/local/bin/weibo-ad-cli -> /usr/local/lib/node_modules/weibo-ad-cli
    /usr/local/lib/node_modules/weibo-ad-cli -> /Users/mengmeng19/Documents/work/code/weibo-ad-cli
    ```


