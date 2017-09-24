# NPX

We have all our dependencies local to the project, so run `npx cordova` instead of just `cordova`.

# Setup (iOS)

See [Cordova iOS guide](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/).

* Install XCode
* Run `xcode-select --install`
* Run `npm install`
* Run `open ./platforms/ios/DIM.xcworkspace`

# Running in Simulator

* `npx cordova run ios --list`: list simulators/devices
* `npx cordova run ios`: run in simulator
