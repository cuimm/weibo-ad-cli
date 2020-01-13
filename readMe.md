* 全局包weibo-ad-cli
    > package.json 下添加 bin 命令
    > npm link 引入全局包指令weibo-ad-cli


* 依赖包
    * commander
    > 用于处理命令行
    * ora
    > 用于显示加载中的效果,类似于前端页面的loading效果
    * inquirer
    > 交互式命令行用户界面集合
    * download-git-repo
    > git仓库下载
    * ncp
    > 文件拷贝 ncp 
    > ncp [source] [dest] [--limit=concurrency limit] [--filter=filter] --stopOnErr



* node
> process.stdout.isTTY：判断是否是文本终端
> process.stdout.rows：当前 TTY 的行数
> readline.cursorTo(stream, x, y)：移动光标到给定的 TTY stream 中指定的位置
> readline.clearScreenDown(stream)：从光标的当前位置向下清除给定的 TTY 流








```https://api.github.com/users/cuimm/repos
[
    {
        "id": 226673616,
        "node_id": "MDEwOlJlcG9zaXRvcnkyMjY2NzM2MTY=",
        "name": "corss-domain",
        "full_name": "cuimm/corss-domain",
        "private": false,
        "owner": {
            "login": "cuimm",
            "id": 33857933,
            "node_id": "MDQ6VXNlcjMzODU3OTMz",
            "avatar_url": "https://avatars2.githubusercontent.com/u/33857933?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cuimm",
            "html_url": "https://github.com/cuimm",
            "followers_url": "https://api.github.com/users/cuimm/followers",
            "following_url": "https://api.github.com/users/cuimm/following{/other_user}",
            "gists_url": "https://api.github.com/users/cuimm/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cuimm/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cuimm/subscriptions",
            "organizations_url": "https://api.github.com/users/cuimm/orgs",
            "repos_url": "https://api.github.com/users/cuimm/repos",
            "events_url": "https://api.github.com/users/cuimm/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cuimm/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/cuimm/corss-domain",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/cuimm/corss-domain",
        "forks_url": "https://api.github.com/repos/cuimm/corss-domain/forks",
        "keys_url": "https://api.github.com/repos/cuimm/corss-domain/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/cuimm/corss-domain/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/cuimm/corss-domain/teams",
        "hooks_url": "https://api.github.com/repos/cuimm/corss-domain/hooks",
        "issue_events_url": "https://api.github.com/repos/cuimm/corss-domain/issues/events{/number}",
        "events_url": "https://api.github.com/repos/cuimm/corss-domain/events",
        "assignees_url": "https://api.github.com/repos/cuimm/corss-domain/assignees{/user}",
        "branches_url": "https://api.github.com/repos/cuimm/corss-domain/branches{/branch}",
        "tags_url": "https://api.github.com/repos/cuimm/corss-domain/tags",
        "blobs_url": "https://api.github.com/repos/cuimm/corss-domain/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/cuimm/corss-domain/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/cuimm/corss-domain/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/cuimm/corss-domain/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/cuimm/corss-domain/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/cuimm/corss-domain/languages",
        "stargazers_url": "https://api.github.com/repos/cuimm/corss-domain/stargazers",
        "contributors_url": "https://api.github.com/repos/cuimm/corss-domain/contributors",
        "subscribers_url": "https://api.github.com/repos/cuimm/corss-domain/subscribers",
        "subscription_url": "https://api.github.com/repos/cuimm/corss-domain/subscription",
        "commits_url": "https://api.github.com/repos/cuimm/corss-domain/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/cuimm/corss-domain/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/cuimm/corss-domain/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/cuimm/corss-domain/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/cuimm/corss-domain/contents/{+path}",
        "compare_url": "https://api.github.com/repos/cuimm/corss-domain/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/cuimm/corss-domain/merges",
        "archive_url": "https://api.github.com/repos/cuimm/corss-domain/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/cuimm/corss-domain/downloads",
        "issues_url": "https://api.github.com/repos/cuimm/corss-domain/issues{/number}",
        "pulls_url": "https://api.github.com/repos/cuimm/corss-domain/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/cuimm/corss-domain/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/cuimm/corss-domain/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/cuimm/corss-domain/labels{/name}",
        "releases_url": "https://api.github.com/repos/cuimm/corss-domain/releases{/id}",
        "deployments_url": "https://api.github.com/repos/cuimm/corss-domain/deployments",
        "created_at": "2019-12-08T13:40:49Z",
        "updated_at": "2020-01-10T10:28:15Z",
        "pushed_at": "2020-01-10T10:28:27Z",
        "git_url": "git://github.com/cuimm/corss-domain.git",
        "ssh_url": "git@github.com:cuimm/corss-domain.git",
        "clone_url": "https://github.com/cuimm/corss-domain.git",
        "svn_url": "https://github.com/cuimm/corss-domain",
        "homepage": null,
        "size": 71,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "HTML",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
    },
    {
        "id": 209290272,
        "node_id": "MDEwOlJlcG9zaXRvcnkyMDkyOTAyNzI=",
        "name": "demo",
        "full_name": "cuimm/demo",
        "private": false,
        "owner": {
            "login": "cuimm",
            "id": 33857933,
            "node_id": "MDQ6VXNlcjMzODU3OTMz",
            "avatar_url": "https://avatars2.githubusercontent.com/u/33857933?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cuimm",
            "html_url": "https://github.com/cuimm",
            "followers_url": "https://api.github.com/users/cuimm/followers",
            "following_url": "https://api.github.com/users/cuimm/following{/other_user}",
            "gists_url": "https://api.github.com/users/cuimm/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cuimm/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cuimm/subscriptions",
            "organizations_url": "https://api.github.com/users/cuimm/orgs",
            "repos_url": "https://api.github.com/users/cuimm/repos",
            "events_url": "https://api.github.com/users/cuimm/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cuimm/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/cuimm/demo",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/cuimm/demo",
        "forks_url": "https://api.github.com/repos/cuimm/demo/forks",
        "keys_url": "https://api.github.com/repos/cuimm/demo/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/cuimm/demo/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/cuimm/demo/teams",
        "hooks_url": "https://api.github.com/repos/cuimm/demo/hooks",
        "issue_events_url": "https://api.github.com/repos/cuimm/demo/issues/events{/number}",
        "events_url": "https://api.github.com/repos/cuimm/demo/events",
        "assignees_url": "https://api.github.com/repos/cuimm/demo/assignees{/user}",
        "branches_url": "https://api.github.com/repos/cuimm/demo/branches{/branch}",
        "tags_url": "https://api.github.com/repos/cuimm/demo/tags",
        "blobs_url": "https://api.github.com/repos/cuimm/demo/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/cuimm/demo/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/cuimm/demo/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/cuimm/demo/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/cuimm/demo/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/cuimm/demo/languages",
        "stargazers_url": "https://api.github.com/repos/cuimm/demo/stargazers",
        "contributors_url": "https://api.github.com/repos/cuimm/demo/contributors",
        "subscribers_url": "https://api.github.com/repos/cuimm/demo/subscribers",
        "subscription_url": "https://api.github.com/repos/cuimm/demo/subscription",
        "commits_url": "https://api.github.com/repos/cuimm/demo/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/cuimm/demo/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/cuimm/demo/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/cuimm/demo/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/cuimm/demo/contents/{+path}",
        "compare_url": "https://api.github.com/repos/cuimm/demo/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/cuimm/demo/merges",
        "archive_url": "https://api.github.com/repos/cuimm/demo/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/cuimm/demo/downloads",
        "issues_url": "https://api.github.com/repos/cuimm/demo/issues{/number}",
        "pulls_url": "https://api.github.com/repos/cuimm/demo/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/cuimm/demo/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/cuimm/demo/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/cuimm/demo/labels{/name}",
        "releases_url": "https://api.github.com/repos/cuimm/demo/releases{/id}",
        "deployments_url": "https://api.github.com/repos/cuimm/demo/deployments",
        "created_at": "2019-09-18T11:20:45Z",
        "updated_at": "2020-01-10T09:26:54Z",
        "pushed_at": "2019-09-29T04:57:02Z",
        "git_url": "git://github.com/cuimm/demo.git",
        "ssh_url": "git@github.com:cuimm/demo.git",
        "clone_url": "https://github.com/cuimm/demo.git",
        "svn_url": "https://github.com/cuimm/demo",
        "homepage": null,
        "size": 16,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
    },
    {
        "id": 111513602,
        "node_id": "MDEwOlJlcG9zaXRvcnkxMTE1MTM2MDI=",
        "name": "hello-world",
        "full_name": "cuimm/hello-world",
        "private": false,
        "owner": {
            "login": "cuimm",
            "id": 33857933,
            "node_id": "MDQ6VXNlcjMzODU3OTMz",
            "avatar_url": "https://avatars2.githubusercontent.com/u/33857933?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cuimm",
            "html_url": "https://github.com/cuimm",
            "followers_url": "https://api.github.com/users/cuimm/followers",
            "following_url": "https://api.github.com/users/cuimm/following{/other_user}",
            "gists_url": "https://api.github.com/users/cuimm/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cuimm/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cuimm/subscriptions",
            "organizations_url": "https://api.github.com/users/cuimm/orgs",
            "repos_url": "https://api.github.com/users/cuimm/repos",
            "events_url": "https://api.github.com/users/cuimm/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cuimm/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/cuimm/hello-world",
        "description": "Hello World",
        "fork": false,
        "url": "https://api.github.com/repos/cuimm/hello-world",
        "forks_url": "https://api.github.com/repos/cuimm/hello-world/forks",
        "keys_url": "https://api.github.com/repos/cuimm/hello-world/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/cuimm/hello-world/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/cuimm/hello-world/teams",
        "hooks_url": "https://api.github.com/repos/cuimm/hello-world/hooks",
        "issue_events_url": "https://api.github.com/repos/cuimm/hello-world/issues/events{/number}",
        "events_url": "https://api.github.com/repos/cuimm/hello-world/events",
        "assignees_url": "https://api.github.com/repos/cuimm/hello-world/assignees{/user}",
        "branches_url": "https://api.github.com/repos/cuimm/hello-world/branches{/branch}",
        "tags_url": "https://api.github.com/repos/cuimm/hello-world/tags",
        "blobs_url": "https://api.github.com/repos/cuimm/hello-world/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/cuimm/hello-world/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/cuimm/hello-world/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/cuimm/hello-world/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/cuimm/hello-world/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/cuimm/hello-world/languages",
        "stargazers_url": "https://api.github.com/repos/cuimm/hello-world/stargazers",
        "contributors_url": "https://api.github.com/repos/cuimm/hello-world/contributors",
        "subscribers_url": "https://api.github.com/repos/cuimm/hello-world/subscribers",
        "subscription_url": "https://api.github.com/repos/cuimm/hello-world/subscription",
        "commits_url": "https://api.github.com/repos/cuimm/hello-world/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/cuimm/hello-world/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/cuimm/hello-world/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/cuimm/hello-world/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/cuimm/hello-world/contents/{+path}",
        "compare_url": "https://api.github.com/repos/cuimm/hello-world/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/cuimm/hello-world/merges",
        "archive_url": "https://api.github.com/repos/cuimm/hello-world/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/cuimm/hello-world/downloads",
        "issues_url": "https://api.github.com/repos/cuimm/hello-world/issues{/number}",
        "pulls_url": "https://api.github.com/repos/cuimm/hello-world/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/cuimm/hello-world/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/cuimm/hello-world/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/cuimm/hello-world/labels{/name}",
        "releases_url": "https://api.github.com/repos/cuimm/hello-world/releases{/id}",
        "deployments_url": "https://api.github.com/repos/cuimm/hello-world/deployments",
        "created_at": "2017-11-21T07:20:58Z",
        "updated_at": "2017-11-21T07:20:58Z",
        "pushed_at": "2017-11-21T09:35:39Z",
        "git_url": "git://github.com/cuimm/hello-world.git",
        "ssh_url": "git@github.com:cuimm/hello-world.git",
        "clone_url": "https://github.com/cuimm/hello-world.git",
        "svn_url": "https://github.com/cuimm/hello-world",
        "homepage": null,
        "size": 1,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
    },
    {
        "id": 226911400,
        "node_id": "MDEwOlJlcG9zaXRvcnkyMjY5MTE0MDA=",
        "name": "node-demo",
        "full_name": "cuimm/node-demo",
        "private": false,
        "owner": {
            "login": "cuimm",
            "id": 33857933,
            "node_id": "MDQ6VXNlcjMzODU3OTMz",
            "avatar_url": "https://avatars2.githubusercontent.com/u/33857933?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cuimm",
            "html_url": "https://github.com/cuimm",
            "followers_url": "https://api.github.com/users/cuimm/followers",
            "following_url": "https://api.github.com/users/cuimm/following{/other_user}",
            "gists_url": "https://api.github.com/users/cuimm/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cuimm/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cuimm/subscriptions",
            "organizations_url": "https://api.github.com/users/cuimm/orgs",
            "repos_url": "https://api.github.com/users/cuimm/repos",
            "events_url": "https://api.github.com/users/cuimm/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cuimm/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/cuimm/node-demo",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/cuimm/node-demo",
        "forks_url": "https://api.github.com/repos/cuimm/node-demo/forks",
        "keys_url": "https://api.github.com/repos/cuimm/node-demo/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/cuimm/node-demo/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/cuimm/node-demo/teams",
        "hooks_url": "https://api.github.com/repos/cuimm/node-demo/hooks",
        "issue_events_url": "https://api.github.com/repos/cuimm/node-demo/issues/events{/number}",
        "events_url": "https://api.github.com/repos/cuimm/node-demo/events",
        "assignees_url": "https://api.github.com/repos/cuimm/node-demo/assignees{/user}",
        "branches_url": "https://api.github.com/repos/cuimm/node-demo/branches{/branch}",
        "tags_url": "https://api.github.com/repos/cuimm/node-demo/tags",
        "blobs_url": "https://api.github.com/repos/cuimm/node-demo/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/cuimm/node-demo/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/cuimm/node-demo/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/cuimm/node-demo/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/cuimm/node-demo/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/cuimm/node-demo/languages",
        "stargazers_url": "https://api.github.com/repos/cuimm/node-demo/stargazers",
        "contributors_url": "https://api.github.com/repos/cuimm/node-demo/contributors",
        "subscribers_url": "https://api.github.com/repos/cuimm/node-demo/subscribers",
        "subscription_url": "https://api.github.com/repos/cuimm/node-demo/subscription",
        "commits_url": "https://api.github.com/repos/cuimm/node-demo/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/cuimm/node-demo/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/cuimm/node-demo/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/cuimm/node-demo/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/cuimm/node-demo/contents/{+path}",
        "compare_url": "https://api.github.com/repos/cuimm/node-demo/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/cuimm/node-demo/merges",
        "archive_url": "https://api.github.com/repos/cuimm/node-demo/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/cuimm/node-demo/downloads",
        "issues_url": "https://api.github.com/repos/cuimm/node-demo/issues{/number}",
        "pulls_url": "https://api.github.com/repos/cuimm/node-demo/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/cuimm/node-demo/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/cuimm/node-demo/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/cuimm/node-demo/labels{/name}",
        "releases_url": "https://api.github.com/repos/cuimm/node-demo/releases{/id}",
        "deployments_url": "https://api.github.com/repos/cuimm/node-demo/deployments",
        "created_at": "2019-12-09T16:03:35Z",
        "updated_at": "2019-12-09T16:05:07Z",
        "pushed_at": "2019-12-09T16:05:05Z",
        "git_url": "git://github.com/cuimm/node-demo.git",
        "ssh_url": "git@github.com:cuimm/node-demo.git",
        "clone_url": "https://github.com/cuimm/node-demo.git",
        "svn_url": "https://github.com/cuimm/node-demo",
        "homepage": null,
        "size": 1,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
    },
    {
        "id": 211618607,
        "node_id": "MDEwOlJlcG9zaXRvcnkyMTE2MTg2MDc=",
        "name": "promise",
        "full_name": "cuimm/promise",
        "private": false,
        "owner": {
            "login": "cuimm",
            "id": 33857933,
            "node_id": "MDQ6VXNlcjMzODU3OTMz",
            "avatar_url": "https://avatars2.githubusercontent.com/u/33857933?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cuimm",
            "html_url": "https://github.com/cuimm",
            "followers_url": "https://api.github.com/users/cuimm/followers",
            "following_url": "https://api.github.com/users/cuimm/following{/other_user}",
            "gists_url": "https://api.github.com/users/cuimm/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cuimm/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cuimm/subscriptions",
            "organizations_url": "https://api.github.com/users/cuimm/orgs",
            "repos_url": "https://api.github.com/users/cuimm/repos",
            "events_url": "https://api.github.com/users/cuimm/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cuimm/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/cuimm/promise",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/cuimm/promise",
        "forks_url": "https://api.github.com/repos/cuimm/promise/forks",
        "keys_url": "https://api.github.com/repos/cuimm/promise/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/cuimm/promise/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/cuimm/promise/teams",
        "hooks_url": "https://api.github.com/repos/cuimm/promise/hooks",
        "issue_events_url": "https://api.github.com/repos/cuimm/promise/issues/events{/number}",
        "events_url": "https://api.github.com/repos/cuimm/promise/events",
        "assignees_url": "https://api.github.com/repos/cuimm/promise/assignees{/user}",
        "branches_url": "https://api.github.com/repos/cuimm/promise/branches{/branch}",
        "tags_url": "https://api.github.com/repos/cuimm/promise/tags",
        "blobs_url": "https://api.github.com/repos/cuimm/promise/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/cuimm/promise/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/cuimm/promise/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/cuimm/promise/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/cuimm/promise/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/cuimm/promise/languages",
        "stargazers_url": "https://api.github.com/repos/cuimm/promise/stargazers",
        "contributors_url": "https://api.github.com/repos/cuimm/promise/contributors",
        "subscribers_url": "https://api.github.com/repos/cuimm/promise/subscribers",
        "subscription_url": "https://api.github.com/repos/cuimm/promise/subscription",
        "commits_url": "https://api.github.com/repos/cuimm/promise/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/cuimm/promise/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/cuimm/promise/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/cuimm/promise/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/cuimm/promise/contents/{+path}",
        "compare_url": "https://api.github.com/repos/cuimm/promise/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/cuimm/promise/merges",
        "archive_url": "https://api.github.com/repos/cuimm/promise/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/cuimm/promise/downloads",
        "issues_url": "https://api.github.com/repos/cuimm/promise/issues{/number}",
        "pulls_url": "https://api.github.com/repos/cuimm/promise/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/cuimm/promise/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/cuimm/promise/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/cuimm/promise/labels{/name}",
        "releases_url": "https://api.github.com/repos/cuimm/promise/releases{/id}",
        "deployments_url": "https://api.github.com/repos/cuimm/promise/deployments",
        "created_at": "2019-09-29T06:58:58Z",
        "updated_at": "2019-09-29T06:58:58Z",
        "pushed_at": "2019-09-29T06:58:59Z",
        "git_url": "git://github.com/cuimm/promise.git",
        "ssh_url": "git@github.com:cuimm/promise.git",
        "clone_url": "https://github.com/cuimm/promise.git",
        "svn_url": "https://github.com/cuimm/promise",
        "homepage": null,
        "size": 0,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
    },
    {
        "id": 231921498,
        "node_id": "MDEwOlJlcG9zaXRvcnkyMzE5MjE0OTg=",
        "name": "test",
        "full_name": "cuimm/test",
        "private": false,
        "owner": {
            "login": "cuimm",
            "id": 33857933,
            "node_id": "MDQ6VXNlcjMzODU3OTMz",
            "avatar_url": "https://avatars2.githubusercontent.com/u/33857933?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cuimm",
            "html_url": "https://github.com/cuimm",
            "followers_url": "https://api.github.com/users/cuimm/followers",
            "following_url": "https://api.github.com/users/cuimm/following{/other_user}",
            "gists_url": "https://api.github.com/users/cuimm/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cuimm/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cuimm/subscriptions",
            "organizations_url": "https://api.github.com/users/cuimm/orgs",
            "repos_url": "https://api.github.com/users/cuimm/repos",
            "events_url": "https://api.github.com/users/cuimm/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cuimm/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/cuimm/test",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/cuimm/test",
        "forks_url": "https://api.github.com/repos/cuimm/test/forks",
        "keys_url": "https://api.github.com/repos/cuimm/test/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/cuimm/test/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/cuimm/test/teams",
        "hooks_url": "https://api.github.com/repos/cuimm/test/hooks",
        "issue_events_url": "https://api.github.com/repos/cuimm/test/issues/events{/number}",
        "events_url": "https://api.github.com/repos/cuimm/test/events",
        "assignees_url": "https://api.github.com/repos/cuimm/test/assignees{/user}",
        "branches_url": "https://api.github.com/repos/cuimm/test/branches{/branch}",
        "tags_url": "https://api.github.com/repos/cuimm/test/tags",
        "blobs_url": "https://api.github.com/repos/cuimm/test/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/cuimm/test/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/cuimm/test/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/cuimm/test/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/cuimm/test/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/cuimm/test/languages",
        "stargazers_url": "https://api.github.com/repos/cuimm/test/stargazers",
        "contributors_url": "https://api.github.com/repos/cuimm/test/contributors",
        "subscribers_url": "https://api.github.com/repos/cuimm/test/subscribers",
        "subscription_url": "https://api.github.com/repos/cuimm/test/subscription",
        "commits_url": "https://api.github.com/repos/cuimm/test/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/cuimm/test/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/cuimm/test/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/cuimm/test/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/cuimm/test/contents/{+path}",
        "compare_url": "https://api.github.com/repos/cuimm/test/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/cuimm/test/merges",
        "archive_url": "https://api.github.com/repos/cuimm/test/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/cuimm/test/downloads",
        "issues_url": "https://api.github.com/repos/cuimm/test/issues{/number}",
        "pulls_url": "https://api.github.com/repos/cuimm/test/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/cuimm/test/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/cuimm/test/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/cuimm/test/labels{/name}",
        "releases_url": "https://api.github.com/repos/cuimm/test/releases{/id}",
        "deployments_url": "https://api.github.com/repos/cuimm/test/deployments",
        "created_at": "2020-01-05T13:28:40Z",
        "updated_at": "2020-01-05T13:28:40Z",
        "pushed_at": "2020-01-05T13:28:41Z",
        "git_url": "git://github.com/cuimm/test.git",
        "ssh_url": "git@github.com:cuimm/test.git",
        "clone_url": "https://github.com/cuimm/test.git",
        "svn_url": "https://github.com/cuimm/test",
        "homepage": null,
        "size": 0,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
    }
]
```

```https://api.github.com/repos/cuimm/corss-domain/tags
[
    {
        "name": "1.0.1",
        "zipball_url": "https://api.github.com/repos/cuimm/corss-domain/zipball/1.0.1",
        "tarball_url": "https://api.github.com/repos/cuimm/corss-domain/tarball/1.0.1",
        "commit": {
            "sha": "f50eeb3d2497e3739539ee17554a5621748ceaa9",
            "url": "https://api.github.com/repos/cuimm/corss-domain/commits/f50eeb3d2497e3739539ee17554a5621748ceaa9"
        },
        "node_id": "MDM6UmVmMjI2NjczNjE2OjEuMC4x"
    },
    {
        "name": "1.0.0",
        "zipball_url": "https://api.github.com/repos/cuimm/corss-domain/zipball/1.0.0",
        "tarball_url": "https://api.github.com/repos/cuimm/corss-domain/tarball/1.0.0",
        "commit": {
            "sha": "836dfd6a60c64689cb225dda9c720d9ad0d41f23",
            "url": "https://api.github.com/repos/cuimm/corss-domain/commits/836dfd6a60c64689cb225dda9c720d9ad0d41f23"
        },
        "node_id": "MDM6UmVmMjI2NjczNjE2OjEuMC4w"
    }
]
```
