#!/bin/bash

set -e

aws s3 cp hotkey-only.js s3://rwk-assets/hotkey-only.js --cache-control "max-age=0" --acl public-read
