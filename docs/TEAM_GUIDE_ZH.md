# 发给组员的操作说明

1. 注册或登录自己的 GitHub，把用户名发给项目负责人，接受私有仓库邀请。
2. 使用 GitHub Desktop、Git，或让自己的 Codex 克隆仓库。请克隆，不要只下载 ZIP，这样之后才能同步。
3. 电脑需要 Python 3.10 以上。Windows 双击 START_TEAM_WEBSITE.cmd；Mac 在项目目录运行 python3 serve_local.py --open。
4. 下载完整素材：Windows 双击 DOWNLOAD_TEAM_ASSETS.cmd；Mac 在项目目录运行 python3 scripts/download_assets.py。下载约 10 GB，请预留约 21 GB 空间。首次如需登录 GitHub，运行 git credential-manager github login --browser，使用自己的账户。已下载完成的分卷会自动跳过，导入时逐个校验素材。
5. 让自己的 Codex 打开这个项目并先读 AGENTS.md。每次改动用自己的分支，完成后提交、推送，再发起合并到 main 的请求。
6. 接收全组的最新版：回到没有未提交修改的 main 分支，双击 SYNC_UPDATES.cmd。Windows 的 START_LIVE_SYNC.cmd 可以每 30 秒自动检查更新；Mac 运行 python3 scripts/team_sync.py --watch。
7. 更新合并后，网页会自动刷新。服务器 Python 代码更新后需要重启本地服务器。
8. 3D 生成需要另配 GPU 服务；没有生成环境也可以搜索、拼贴、浏览和编辑现有模型。各人浏览器里的拼贴和保存历史不会随 Git 同步。
9. 原公用网站有独立发布流程，提交到本仓库不会自动改变它。

可以直接发给 Codex：
先阅读 AGENTS.md 和 README.md，拉取最新 main，建立我自己的修改分支。按我的要求修改，运行检查；改展览源代码后重新构建，提交并推送分支，准备合并请求。不要把大型素材、生成模型或登录凭据提交进 Git，不要部署原公用网站。
