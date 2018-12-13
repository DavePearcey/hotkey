#!/bin/bash

set -e

if [[ "$OS" != "Windows_NT" ]]; then
  aws s3 cp hotkey-only.js s3://rwk-assets/hotkey-only.js --cache-control "max-age=0" --acl public-read --profile personal
  aws s3 cp chatmod.js s3://rwk-assets/chatmod.js --cache-control "max-age=0" --acl public-read --profile personal
  aws s3 cp chatmod.js s3://rwk-assets/enhancements.js --cache-control "max-age=0" --acl public-read --profile personal
else
  aws s3 cp hotkey-only.js s3://rwk-assets/hotkey-only.js --cache-control "max-age=0" --acl public-read
  aws s3 cp chatmod.js s3://rwk-assets/chatmod.js --cache-control "max-age=0" --acl public-read
  aws s3 cp chatmod.js s3://rwk-assets/enhancements.js --cache-control "max-age=0" --acl public-read 
fi
curl 'http://rwk2.racewarkingdoms.com/cgi-bin/rwk.cgi' --compressed -H 'Referer: http://rwk2.racewarkingdoms.com/cgi-bin/rwk.cgi' -H 'Content-type: application/x-www-form-urlencoded' -H 'Cookie: login=Auctioneer; password=; timing=1262813443.789997' -H 'Connection: keep-alive' --data 'login=Auctioneer&timing=undef1262813443.789997&password=testing&action=chat&otherb=none&target=FUCK RAMZA IN HIS FACE.&other=0&'
