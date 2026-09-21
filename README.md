# Atarayo Taipei 2026 Fan Guide

Atarayo ASIA TOUR 2026『夕立が去ったその後で』台北場的非官方粉絲指南。網站整理演出資訊、官方座位圖、交通方式、官方 YouTube 影片預習與 2026 海外場參考歌單。

## 專案來源

本專案保留完整 Git 歷史，改作關係如下：

1. 原始專案：[limskyy123456-sudo/Vaundy-Seoul-2026](https://github.com/limskyy123456-sudo/Vaundy-Seoul-2026)
2. 繁中與 Vite 重構：[watain666/Vaundy-Taiwan-2026](https://github.com/watain666/Vaundy-Taiwan-2026)
3. Atarayo 台北場改作：本 repository

本機 remote 設定：

```text
origin           https://github.com/hachibye/atarayo-taipei-2026.git
taiwan-upstream  https://github.com/watain666/Vaundy-Taiwan-2026.git
upstream         https://github.com/limskyy123456-sudo/Vaundy-Seoul-2026.git
```

GitHub 的「Forked from」標籤只能在 GitHub 建立 fork 時產生，無法靠 `git remote` 或一般 push 補上。即使 repository 是獨立建立，本專案仍透過 Git 歷史、remote、README 與頁尾保留完整來源鏈。

## 已整理內容

- 演出：2026/12/19（六）19:00
- 場館：台北流行音樂中心・表演廳
- 售票：KKTIX，官方頁面目前標示完售
- VIP Upgrade：NT$1,200，不含演唱會門票
- 28 支 Atarayo 官方影片預習，包含馬來西亞專場 18 首完整入口
- 每首歌曲的原創繁中導讀，整理故事、心境與情緒轉折（非官方解說／非逐句翻譯）
- 「5 分鐘認識 Atarayo」入坑指南與依心情選歌的聆聽路線
- 2020–2026 作品與現場 Timeline，終點為 2026/12/19 台北場
- 官方座位圖與北流交通資訊
- ASIA TOUR 2026 完整站點（含香港追加、再追加公演）
- 2026 海外獨立專場：吉隆坡、曼谷（非本次亞巡站次）
- 2026/07/24 馬來西亞獨立專場參考歌單（日文原題、非本次亞巡站次）
- あたらよ現場風格與過往台北場合唱觀察
- 深色與淺色模式

台北場正式歌單尚未公布。網站中的劇透歌單來自 setlist.fm 使用者提交的 2026/07/24「ATARAYO ONE-MAN LIVE IN JAPAN EXPO MALAYSIA 2026」紀錄。這是同年度海外獨立專場，未列入 ASIA TOUR 2026『夕立が去ったその後で』官方站次，也不代表台北場實際演出曲目或順序。截至 2026/09/21，未找到可交叉驗證的 2026 日本國內場完整歌單。

歌曲頁會在瀏覽器中向開源歌詞服務取得日文歌詞與時間碼，並在本機產生假名／羅馬字讀音。繁中欄位只會顯示專案內已有對應的內容；歌詞服務失效時，官方影片與 Spotify／Apple Music 連結仍可使用。

## 開發

```bash
npm ci
npm run dev
npm run build
npm run preview
```

開發伺服器會使用 `http://localhost:5173/`。請使用終端機顯示的 `localhost` 網址，不要直接開啟 `index.html`，也不要改成 `127.0.0.1`；YouTube 可能拒絕後兩者的內嵌播放器來源。

正式建置輸出在 `dist/`。Cloudflare Pages 可設定建置指令為 `npm run build`、輸出目錄為 `dist`；`public/_headers` 會一併部署安全標頭。專案既有 GitHub Actions 也可在推送到 `main` 後建置並部署 GitHub Pages。

## 資料來源與素材

- 演出資料：[Atarayo 官方巡演頁](https://atarayo-jp.com/contents/tour/asia_tour2026)
- 馬來西亞獨立專場：[Atarayo 官方活動頁](https://atarayo-jp.com/contents/1075672)
- 曼谷獨立專場：[Atarayo 官方活動頁](https://atarayo-jp.com/contents/1075674)
- 台北場售票、票價與座位圖：[KKTIX 官方活動頁](https://binliveco.kktix.cc/events/kbrte)
- 影片：[Atarayo 官方 YouTube 頻道](https://www.youtube.com/@Atarayo)
- 2026 馬來西亞獨立專場歌單：[setlist.fm](https://www.setlist.fm/setlist/atarayo/2026/kl-convention-centre-kuala-lumpur-malaysia-4375d7df.html)
- 過往台北場合唱觀察：[Atarayo TOUR 2025 in Taipei 觀眾紀錄](https://mapleleaf3659.github.io/ml-blog/articles/life/atarayo-tour-2025-in-taipei.html)
- `images/atarayo-rainy-night.png`：為本專案生成的原創無文字主視覺，不是官方海報
- `images/atarayo-seating*.png`：KKTIX 公開的台北場官方座位圖，版權屬原權利人

本網站為非官方粉絲製作，與 Atarayo、唱片公司、主辦單位、售票平台及場館無隸屬或合作關係。活動規則如有變更，一律以官方公告為準。
