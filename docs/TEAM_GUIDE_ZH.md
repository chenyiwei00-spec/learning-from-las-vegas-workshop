# 组员协作说明

仓库：https://github.com/chenyiwei00-spec/learning-from-las-vegas-workshop

1. 分别登录自己的 GitHub 账号并接受项目邀请。可在 GitHub 邮件通知或仓库页面确认。
2. 让自己的 Codex 克隆仓库（或用 GitHub Desktop）。不要只下载代码 ZIP，否则后续不能正常同步。
3. 安装 Python 3.10 或以上。Windows 双击 START_TEAM_WEBSITE.cmd；Mac 在仓库目录运行 python3 serve_local.py --open。
4. 完整拼贴和展台需要素材。Windows 双击 DOWNLOAD_TEAM_ASSETS.cmd；Mac 运行 python3 scripts/download_assets.py。下载约 10 GB，预留约 21 GB 磁盘空间。不需要再从负责人电脑拷贝原始 165 GB 资料。
5. 代码修改：让 Codex 先读 AGENTS.md，每人开自己的 work/姓名/任务 分支，修改、检查、提交并推送，发起合并到 main 的请求。
6. 合并后，在干净的 main 上运行 SYNC_UPDATES.cmd。START_LIVE_SYNC.cmd 会每 30 秒自动同步已合并的代码。Mac 运行 python3 scripts/team_sync.py --watch。
7. 自动更新遇到未提交改动或个人分支时会暂停，不会覆盖个人的工作。网页代码变化会自动刷新；Python 服务器修改后需重启。
8. 这是合并之后的版本同步，不是多人同时在同一个文件里打字。原公用网站有独立发布流程，不会随 GitHub 提交自动改变。
9. 3D 生成需要另配兼容的 GPU 环境；没有 AI 环境也能浏览、拼贴和编辑现有模型。浏览器草稿和保存的模型历史仍是各人本地数据，不随代码同步。

给组员 Codex 的启动提示：

请克隆 https://github.com/chenyiwei00-spec/learning-from-las-vegas-workshop.git，先阅读 AGENTS.md 和 README.md，检查 Python、Git 环境并启动本地网页。下载和安装团队素材包。我要修改时，请拉取最新 main，创建我自己的工作分支，完成后运行检查、提交并推送，准备合并请求。不要提交大型素材、登录凭据或个人绝对路径，不要自动部署原公用网站。

负责人本机：
协作网页通常为 http://127.0.0.1:8065/。
旧本地网页 http://127.0.0.1:8055/ 保留。
以后需要共享的修改应在这个协作仓库中进行。
