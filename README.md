# DIM Mobile (and Desktop)

This is a Cordova 7.x project that wraps the DIM website in mobile (and eventually desktop) clients. It's still under development.


# NPX

We have all our dependencies local to the project, so run `npx cordova` instead of just `cordova`.

# Setup (iOS)

See [Cordova iOS guide](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/).

* Install XCode 9
* Run `xcode-select --install`
* Run `npm install`
* Run `open ./platforms/ios/DIM.xcworkspace`

# Running in Simulator

* `npx cordova run ios --list`: list simulators/devices
* `npx cordova run ios --target="iPhone-7"`: run in simulator
