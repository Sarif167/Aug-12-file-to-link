![GitHub contributors](https://img.shields.io/github/contributors/Botsthe/AV-FILE-TO-LINK?style=flat&color=green)
![GitHub repo size](https://img.shields.io/github/repo-size/Botsthe/AV-FILE-TO-LINK?color=green)
![GitHub](https://img.shields.io/github/license/Botsthe/AV-FILE-TO-LINK?color=green)

<h1 align="center">Prime File to Link Bot (Bangla Translated & Fixed)</h1>

<p align="center">
  <img src="https://envs.sh/aWi.jpg" alt="Cover Image" width="650">
</p>

<p align="center">
  A Telegram bot to turn all media and document files to instant direct download and stream links.
  <br />
  <strong>This repository has been fully fixed for Koyeb deployment and translated to Bengali!</strong>
</p>

<hr>

## 🛠️ RECENT FIXES & UPDATES (By AI Studio)

This repository includes several major bug fixes specifically implemented to make it run flawlessly on Koyeb and other cloud platforms:

1. **Fixed Download 0.00 KB Error**: Resolved the issue where Android download managers failed to download large files. Corrected the HTTP `Content-Range` header logic in `web/stream_routes.py` so that normal downloads use `Content-Length` and only seeking/video players use `Content-Range`.
2. **Fixed `webav.html` Not Found Error**: Fixed a typo in `web/utils/render_template.py` that caused server crashes (Errno 2) when generating video streaming pages. The code now correctly points to `weba.html`.
3. **Fully Translated UI to Bengali**: The frontend streaming and download pages (`weba.html` and `dl.html`) have been natively translated to Bangla (e.g., "অনলাইনে দেখুন", "ডাউনলোড", "ডার্ক মোড") providing a localized experience.
4. **Node.js Dummy Server Added**: Added `package.json` and `dev_server.js` strictly for AI Studio's preview compatibility without touching your Python Telegram bot's functionality or deployment files. 

---

## 🚀 HOW TO RUN & DEPLOY (Koyeb/Heroku/VPS)

### 1. Bot Run Command
To start the bot, simply run the following command in your terminal:
```bash
python3 bot.py
```
*(Note: Ensure you have installed all dependencies via `pip install -r requirements.txt` before running the command).*

### 2. Port Configuration
For web deployments like **Koyeb**, **Render**, or **Heroku**, cloud providers dynamically assign a port. 
- The bot automatically listens to the environment variable `$PORT`.
- **Default Port**: If `$PORT` is not defined in your environment variables, the bot falls back to listening on port `2626` (or `8080` depending on your `info.py` configuration).
- **In Koyeb:** You do not need to hardcode the port. Just expose Web service port (usually 8000 or 8080) in Koyeb settings, and Koyeb will bind it correctly.

---

### ALL VARIABLES

<details>
<summary>Tap On Me For Environment Variable</summary>
  <p>
  * `BOT_TOKEN` - Get bot token from <a href="https://t.me/BotFather" target="/blank">Bot Father</a>
  * `API_ID` - Get api id from <a href="https://my.telegram.org" target="/blank">Telegram Auth</a>
  * `API_HASH` - Get api hash from <a href="https://my.telegram.org" target="/blank">Telegram Auth</a>
  * `ADMINS` - Bot admin/owner user id Separate multiple Admins by space.
  * `BOT_USERNAME` : Your Bot Username Without @
  * `OWNER_USERNAME` : Your Username Without @
  * `DATABASE_URI` - Mongo Database URL from <a href="https://cloud.mongodb.com" target="/blank">Mongo DB</a>
  * `DATABASE_NAME` - Your database name from mongoDB. `(Optional)`
  * `BIN_CHANNEL` : Create a new channel (private/public) and add that channel id in this field.
  * `LOG_CHANNEL` :  A channel to log the activities of bot. Make sure bot is an admin in the channel.
  * `AUTH_CHANNEL` - Your force sub channel with -100 `Optional`
  * `PICS` - Start message photo. `Optional`
  * `URL` : Your Server App Link With https:// and in last make sure one / is given.
  * `PORT` : The port that you want your webapp to be listened to. Defaults to `2626` (Used automatically by Koyeb).
  * `BANNED_CHANNELS` : Put IDs of Banned Channels where bot will not work. You can add multiple IDs & separate with Space.
  </p>
</details>

### ALL COMMANDS

<details>
<summary>Tap On Me For commands</summary>

```
start - Check if the bot is running.
help - Check if the help
about - Check if the about 
ban - user ban [FOR ADMINS USE ONLY]
unban - user unban [FOR ADMINS USE ONLY]
users - Check bot users [FOR ADMINS USE ONLY]
broadcast - Message Broadcast command [FOR ADMINS USE ONLY]
restart - To restart the bot [FOR ADMINS USE ONLY]
```
</details>

### DEPLOY ON KOYEB

<p>
  <a href="https://app.koyeb.com/deploy?type=git&repository=github.com/Botsthe/AV-FILE-TO-LINK&branch=main&name=AV-FILE-TO-LINK"><img src="https://www.koyeb.com/static/images/deploy/button.svg" alt="DEPLOY ON KOYEB"></a>
</p>
Make sure to select **Builder** as `Dockerfile` or `Buildpacks` and Koyeb will automatically run `python3 bot.py` via the provided Procfile.

---

### CONTACT DEVELOPER
- [𝙰𝙼𝙰𝙽 𝚅𝙸𝚂𝙷𝚆𝙰𝙺𝙰𝚁𝙼𝙰](https://telegram.me/BOT_OWNER26)

### CREDIT DEVELOPER
- [𝙰𝙼𝙰𝙽 𝚅𝙸𝚂𝙷𝚆𝙰𝙺𝙰𝚁𝙼𝙰](https://telegram.me/BOT_OWNER26)
- [Rᴀᴊ Vᴇʀᴍᴀ ⚝](https://telegram.me/Rjverma6435)

### 📌 NOTE
𝘊𝘰𝘱𝘺𝘪𝘯𝘨 𝘰𝘳 𝘚𝘦𝘭𝘭𝘪𝘯𝘨 𝘵𝘩𝘪𝘴 𝘳𝘦𝘱𝘰 𝘪𝘴 𝘴𝘵𝘳𝘪𝘤𝘵𝘭𝘺 𝘱𝘳𝘰𝘩𝘪𝘣𝘪𝘵𝘦𝘥.
