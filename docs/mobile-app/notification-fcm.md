---
sidebar_position: 10
---

# How to set Notification

1. Go to your firebase project in project settings -> general. Copy your project id from there as below image.

   ![FCM 1](/images/app/fcm_11.png)

2. Go to project settings -> service accounts. For download service json file click on Generate new private key button as below image.

   ![FCM 2](/images/app/fcm_12.png)

3. Now add your project id and downloaded service json file in admin panel Settings > Notification Settings and save it.

   ![FCM 3](/images/app/fcm4.png)

## For iOS you need to perform below given step

1. In Xcode, open the project.
2. In the Project Navigator (the left-hand menu), select the project icon that represents your app.
3. In the top-left corner of the right-hand pane in Xcode, select your app's target.
4. Navigate to the Capabilities tab.
5. Enable Push Notifications.
6. Check Remote Notifications and Background Fetch from Enabling Background Modes.

   ![iOS Notification 1](/images/app/iosNotification1.png)

7. APNs (Apple's Push Notification service) currently supports two types of connections: token-based (.p8) and certificate-based (.p12). You can follow either one of them.

## For Token-based (.p8)

1. Log in to the Apple Developer Portal.
2. Navigate to Certificates, IDs & Profiles > Identifiers > App IDs and click the App ID associated with your app.
3. On the screen for your App ID, check Capabilities > Push Notifications.

   ![iOS Notification 2](/images/app/iosNotification2.png)

   ![iOS Notification 3](/images/app/iosNotification3.png)

4. Select App ID in next page & click continue.
5. And then create Development SSL Certificate & Production SSL Certificate by adding CSR certificate. Follow Apple's [Create a certificate signing request instructions](https://help.apple.com/developer-account/).
6. Navigate to Certificates, IDs & Profiles > Keys Section and add a Universal key for Notifications, which you can use for more than one apps as well.

   ![iOS Notification 4](/images/app/iosNotification4.png)

7. Just save and Download & keep it safe, as it will be downloaded only once.

   ![iOS Notification 5](/images/app/iosNotification5.png)

8. Then go to Firebase and add this .p8 file along with Your Key ID and Team ID.

   ![iOS Notification 6](/images/app/iosNotification6.png)

## FOR certificate-based (.p12)

1. Log in to the Apple Developer Portal.
2. Navigate to Certificates, IDs & Profiles > Identifiers > App IDs and click the App ID associated with your app.
3. On the screen for your App ID, check Capabilities > Push Notifications.
4. Click Save and respond to the Modify App Capabilities dialog box that appears.
5. To create the certificate, we will use to communicate with Apple when sending push notifications:

   - In a new browser tab, follow Apple's [Create a certificate signing request instructions](https://help.apple.com/developer-account/#/devbfa00fef7).
   - In the Apple Developer Portal, navigate back to your App ID.
   - Click Capabilities > Push Notifications > Configure.
   - Click one of the following buttons:
     - Development SSL Certificate > Create Certificate (for testing push notifications while developing an iOS app)
     - Production SSL Certificate > Create Certificate (for sending push notifications in production)
   - Click Choose File and select the certificate signing request you created above.
   - Click Continue.
   - Click Download to download the certificate.
   - Use this file to export a .p12 file in the next step.

6. On your Mac, double-click the .cer file to open it in Keychain Access.
7. In Keychain Access, in the lower-left corner, select Category > Certificates.
8. Select the certificate to export.
9. Choose File > Export Items.
10. Enter a name in the Save As field.
11. Accept the default .p12 file format and click Save. Respond to the prompts, and enter a password for the file if necessary.
12. Keep track of this file, since you'll upload it to firebase in a later step.

    ![iOS Notification 7](/images/app/iosNotification7.png)

    ![iOS Notification 8](/images/app/iosNotification8.png)
