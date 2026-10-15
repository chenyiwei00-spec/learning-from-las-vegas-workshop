# 把雕塑建筑接入团队展览界面

打开 `exhibition.html`，在原有视角按钮旁点击 **雕塑建筑 / Inhabit**。

- 在展厅选中了模型：直接把选中模型的真实 GLB 送入建筑模块。
- 正在预览一个已完成的模型：模型工具区的 **进入雕塑建筑** 使用这个预览的真实 GLB。
- 没有选中模型：从模型列表选择，或者点击 **导入 GLB**。列表读取此浏览器的已保存模型及展厅模型，不启动 AI 建模。
- 模型载入后自动生成。使用 **Cutaway** 查看真实内部挖空，**First Person View** 进入；点击画面后用 WASD 和鼠标探索。Esc 释放鼠标，**Exterior View** 返回外部。
- 顶部的 **返回展厅** 恢复原界面。拼贴、已摆放模型和浏览器草稿保留；建筑探索不会把建筑放回原来的白房间。

一个雕塑对应一栋独立建筑，没有连接走廊。三个初始 GLB 没有提交到 GitHub。队友可以用自己的模型库或 GLB 文件；代码同步不会自动同步浏览器里的私有模型和拼贴。

## 本机模型目录（可选）

`serve_local.py` 额外提供只读模型列表。默认扫描 `external-assets/inhabitable-sculptures` 顶层的 `.glb`，也可在 **不提交的** `settings.local.json` 中设置 `inhabitableModelRoot`，指向自己的模型文件夹。修改服务器配置后重启本地服务器。

`GET /api/inhabitable/models` 只列出该目录顶层、100 MB 以内的 GLB。`/inhabitable-models/<filename>.glb` 支持只读读取及 Range；拒绝路径穿越、目录外符号链接、子目录及其他扩展名。没有配置素材也可使用文件导入和模型库。

## 实现边界

原界面继续使用原来的 Three.js 版本、模型库和摆放逻辑。建筑模块位于同源嵌入视图 `site/inhabitable-sculpture/`，自带预编译代码，不要求另开 Vite 或访问 5173 端口。

`site/inhabitable-integration.js` 是适配层，只传递 GLB 的二进制副本，不改动源文件。父页面和子页面使用带协议版本、请求标识、精确来源和窗口检查的消息握手。模块校验 GLB 后，统一执行体素重建、距离侵蚀、连通内部空间与入口的布尔扣除。可视外壳、真实剖面和碰撞使用同一体素实体。

这是一层内部空间的几何原型。楼层会选择雕塑较厚、可容纳人的区域，可能高于地面；当前没有地面到入口的楼梯、坡道或电梯。细枝可能保持实心；不适合挖空的参数会报告原因。模型颜色和原始 GLB 均保留。

## 修改与重建

运行网站只需原项目的 Python 启动方式。仅在修改建筑模块源码后需要 Node.js：

```powershell
cd extensions/inhabitable-sculpture
npm ci
cd ../..
node scripts/build-inhabitable.mjs
python scripts/check_project.py
```

模块源码在 `extensions/inhabitable-sculpture/src/`，团队适配器在其中的 `integration/`。构建结果写入 `site/inhabitable-sculpture/`；提交源码、锁文件及构建结果，GLB 和 node_modules 不提交。三个模型不在构建清单中，不会打包私人素材。

## 验证

自动测试使用实际三个 GLB；源文件只读：

```powershell
$env:INHABITABLE_TEST_MODELS = '你的三个 GLB 所在文件夹'
cd extensions/inhabitable-sculpture
node --test tests/*.test.mjs
```

15 项检查覆盖消息来源、输入边界、真实体素扣除、净高、厚度、内部连通、可行走入口、碰撞、真实剖切以及可复现性。浏览器集成测试：

```powershell
# 本机已安装 Playwright 或 playwright-core，并且具备 Edge。
$env:PLAYWRIGHT_CORE_PATH = 'playwright-core 的安装目录'
$env:TEAM_PREVIEW_URL = 'http://127.0.0.1:8066'
node qa/inhabitable-integration.cjs
```

浏览器测试在隔离的临时上下文运行，不改动日常浏览器数据。需要在只读本机目录配置三个初始模型。结果和截图写入被 Git 忽略的 `runtime/inhabitable-qa/`。

目前记录为自动化测试与截图检查；没有把它们称为真人手动验收。
