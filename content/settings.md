---
title: 'Settings'
excerpt: 'Configure the bot to your liking.'
date: '2022-11-22'
---

You can customize the bot's behavior by using the `/settings` command. Currently, you can change the following settings:

- **`response`**: The bot will respond to your DMs with a message confirming the tweet has been saved to your Todoist account. You can disable this feature by sending `/settings response false` by DM to the bot.

- **`tweet-label`** and **`thread-label`**: The bot will add a label to the saved tweets. You can change this labels by sending `/settings thread-label label` and `/settings tweet-label label` by DM to the bot. By default, this labels are "🐦Tweet" and "🧵Thread". You can also disable this feature by sending `/settings thread-label null` and `/settings tweet-label null` by DM to the bot.

- **`reset`**: If you want to reset all your settings, you can do it by sending `/settings reset` by DM to the bot. This will reset all your settings to their default values.
