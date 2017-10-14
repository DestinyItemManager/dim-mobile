/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// See https://taco.visualstudio.com/en-us/docs/create-a-hosted-app/ for info on this style of "hosted app".

const DIM_URL = 'https://app.destinyitemmanager.com';

function onDeviceReady() {
  window.StatusBar.overlaysWebView(false);
  window.StatusBar.styleBlackOpaque();
  window.StatusBar.backgroundColorByHexString('#222');
  if (window.indexedDB) {
    alert(window.navigator.userAgent);
  } else {
    alert("I'm in UIWebView");
  }
  checkConnection();
  navigator.splashscreen.hide();
}
document.addEventListener("deviceready", onDeviceReady, false);

function checkConnection() {
  if (navigator.connection.type == Connection.NONE) {
    document.getElementById("noconn").style.display = "block";
    document.getElementById("loading").style.display = "none";
  } else {
    window.location.replace(DIM_URL + '?utm_medium=mobile-app&utm_source=' + cordova.platformId + '-mobile-app');
  }
}

function retryConnection() {
  document.getElementById("noconn").style.display = "none";
  document.getElementById("loading").style.display = "block";
  // adding delay for UX
  setTimeout(function(){
    checkConnection();
  }, 500);
}

function openInAppBrowser(url) {
  var iab = window.open(url + '?utm_source=mobile-app', "_blank", "location=no,zoom=no,toolbar=no,hidden=yes,transitionstyle=crossdissolve");

  iab.addEventListener('loadstop', function() {
    iab.show();
  });

  iab.addEventListener('loadstart', function(obj) {
    if (navigator.network.connection.type == Connection.NONE) {
      navigator.notification.alert("Internet connection was not detected, check your connection and retry", null, "No Internet");
    }
  });

  iab.addEventListener('loaderror', function() {
    document.getElementById("noconn").style.display = "block";
    document.getElementById("loading").style.display = "none";
  });
}

