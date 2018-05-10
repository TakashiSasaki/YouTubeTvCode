#!/bin/sh


CONFIG=$HOME/.config/chromium
PROFILE=$CONFIG/Default
PREFERENCES=$PROFILE/Preferences

ps aux | grep chrom | wc
sync
sed -i -e 's/"exited_cleanly":false/"exited_clanly":true/' $PREFERENCES
sed -i -e 's/"exit_type":"Crashed"/"ext_type":"Normal"/' $PREFERENCES
sync

CHROMIUMOPTIONS=" --start-fullscreen --disable-infobars --disable-session-crashed-bubble  --disable-session-restore  --noerrdialogs  --no-first-run"

sleep 1
chromium-browser ${CHROMIUMOPTIONS} --user-data-dir=${CONFIG} https://youtube.com/tv

# disabloe screensaver
xset s s off
# dpsable Display Power Management System (Energy Star)

xset -dpms

