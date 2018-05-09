#!/bin/sh


PROFILE=$HOME/.config/chromium/Default
PREFERENCES=$PROFILE/Preferences

ps aux | grep chrom | wc
if [ ! -e $PREFERENCES ]; then exit -1; fi
sync
sed -i -e 's/"exited_cleanly":false/"exited_clanly":true/' $PREFERENCES
sed -i -e 's/"exit_type":"Crashed"/"ext_type":"Normal"/' $PREFERENCES
sync

CHROMIUMOPTIONS=" --start-fullscreen --disable-infobars --disable-session-crashed-bubble  --disable-session-restore  --noerrdialogs  --no-first-run"

sleep 1
chromium-browser ${CHROMIUMOPTIONS} --user-data-dir=$PROFILE https://youtube.com/tv

