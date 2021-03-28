'use strict';

self.addEventListener('push', function(event) {
  var promise = self.registration.showNotification('Push notification!');
  event.waitUntil(promise);  
  const title = 'Comunicacion Angular Web Push Notification';
  const options = {
    body: event.data.text(),
  };
  event.waitUntil(self.registration.showNotification(title, options));

});
