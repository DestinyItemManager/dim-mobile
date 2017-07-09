#!/bin/sh -ex

# Generate all our icon images from SVG. Requires a mac (or a system w/ a shell and rsvg-convert installed).

which rsvg-convert || brew install librsvg

rm res/icon/ios/*.png

rsvg-convert -w 180 -h 180 -o "res/icon/ios/icon-60@3x.png" "apple-touch-icon-release.svg"
rsvg-convert -w 120 -h 120 -o "res/icon/ios/icon-60@2x.png" "apple-touch-icon-release.svg"
rsvg-convert -w 60 -h 60 -o "res/icon/ios/icon-60.png" "apple-touch-icon-release.svg"

rsvg-convert -w 76 -h 76 -o "res/icon/ios/icon-76.png" "apple-touch-icon-release.svg"
rsvg-convert -w 152 -h 152 -o "res/icon/ios/icon-76@2x.png" "apple-touch-icon-release.svg"

rsvg-convert -w 40 -h 40 -o "res/icon/ios/icon-40.png" "apple-touch-icon-release.svg"
rsvg-convert -w 80 -h 80 -o "res/icon/ios/icon-40@2x.png" "apple-touch-icon-release.svg"

rsvg-convert -w 57 -h 57 -o "res/icon/ios/icon.png" "apple-touch-icon-release.svg"
rsvg-convert -w 114 -h 114 -o "res/icon/ios/icon@2x.png" "apple-touch-icon-release.svg"

rsvg-convert -w 72 -h 72 -o "res/icon/ios/icon-72.png" "apple-touch-icon-release.svg"
rsvg-convert -w 144 -h 144 -o "res/icon/ios/icon-72@2x.png" "apple-touch-icon-release.svg"

rsvg-convert -w 167 -h 167 -o "res/icon/ios/icon-167.png" "apple-touch-icon-release.svg"

rsvg-convert -w 29 -h 29 -o "res/icon/ios/icon-small.png" "apple-touch-icon-release.svg"
rsvg-convert -w 58 -h 58 -o "res/icon/ios/icon-small@2x.png" "apple-touch-icon-release.svg"

rsvg-convert -w 50 -h 50 -o "res/icon/ios/icon-50.png" "apple-touch-icon-release.svg"
rsvg-convert -w 100 -h 100 -o "res/icon/ios/icon-50@2x.png" "apple-touch-icon-release.svg"

rsvg-convert -w 167 -h 167 -o "res/icon/ios/icon-83.5@2x.png" "apple-touch-icon-release.svg"

