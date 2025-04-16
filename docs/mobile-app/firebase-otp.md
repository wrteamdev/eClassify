---
sidebar_position: 6
---

# How to Enable Firebase Phone Authentication(OTP)

1. Open your firebase console.
2. Go to Authentication and open Sign-in method.
3. Enable Phone Sign-in method and save.

   ![Phone Auth](/images/app/phone1.png)

4. Now, we have to add sha1 and sha256 key in firebase, for that perform below given step.

## How to get Debug SHA Keys?

1. Open terminal and copy these both commands run below command one by one for getting debug sha keys
2. cd android
3. ./gradlew signingReport

   ![SHA Create](/images/app/shaCreate.png)

4. After ran those command you can get debug sha keys in terminal as below image.

   ![Debug SHA](/images/app/debugSha.png)

5. Now copy debug SHA-1 and SHA-256 both and add it in firebase console as below image.

   ![Firebase Debug SHA](/images/app/firebaseDebugSha.png)

## How to get Release SHA Keys?

**Remember:**

1. When we are releasing apk then we need to add release sha in firebase panel otherwise otp will not work.
2. after release you can get sha from play console here

   ![Release SHA](/images/app/releaseSha.png)

3. or another way you can also get release sha from below given command in terminal

4. If you have already created keystore file then do below steps otherwise first create keystore file through these steps: [Create KeyStore File](#generateReleaseVersion)

5. Then here edit this command and replace your keystore path and alias in this command **keytool -list -v -keystore "D:\keystore\eclassify.jks" -alias eclassify**

6. Then it will ask for password. Enter password and then it will show your release SHA-1 and SHA-256 keys.

7. Copy these both keys and add on firebase app.

   ![Release SHA 1](/images/app/releaseSha1.png)

## For iOS:

### Add custom URL schemes to your Xcode project:

1. Open your project configuration: double-click the project name in the left tree view. Select your app from the **TARGETS** section, then select the **Info** tab, and expand the **URL Types** section.

2. Click the + button, and add a URL scheme for your **reversed client ID**. To find this value, open the **GoogleService-Info.plist** configuration file, and look for the **REVERSED_CLIENT_ID** key. Copy the value of that key, and paste it into the URL Schemes box on the configuration page. Leave the other fields blank.

3. When completed, your config should look something similar to the following (but with your application-specific values):

   ![Reversed Client ID](/images/app/reversed_client_id.png)

4. Same as open your project configuration: double-click the project name in the left tree view. Select your app from the **TARGETS** section, then select the **Info** tab, and expand the **URL Types** section.

5. Click the + button, and add a URL scheme for your **Encoded App ID**. To find this value, open the **Firebase project settings ios Apps**, and look for the **Encoded App ID**. Copy the value of that key, and paste it into the URL Schemes box on the configuration page. Leave the other fields blank.

   ![Firebase Encoded iOS App ID](/images/app/firebaseEncodediOSAppId.png)

6. When completed, your config should look something similar to the following (but with your application-specific values):

   ![URL Scheme Encode iOS ID](/images/app/urlSchemeEncodeiOSId.png)
