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
