#!/bin/sh
sed -i -e 's/"exited_cleanly":false/"exited_clanly":true/' /home/pi/.config/chromium/Default/Preferences
sed -i -e 's/"exit_type":"Crashed"/"ext_type":"Normal"/' /home/pi/.config/chromium/Default/Preferences

chromium-browser --start-fullscreen --disable-infobars --disable-session-crashed-bubble --disable-session-restore --noerrdialogs

