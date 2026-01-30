---
sidebar_position: 11
---

# Deep Link Setup

We support two ways to open the mobile app from shared links:
- Method A: Custom Scheme Deep Links — Share links route through the website, which triggers a custom scheme to launch the app.
- Method B: Direct HTTPS Deep Links — Share links use standard https URLs (Android App Links / iOS Universal Links) to open the app directly.

Use Method A if you want the website to mediate opening and provide flexible fallbacks. Use Method B for a direct, system-level experience with better reliability on modern platforms.

## Method A: Custom Scheme via Website

This approach uses a custom scheme like `eclassify://` to open the app. Share links point to your website (e.g., `https://example.com/item/123`), and the website attempts to open the app using the custom scheme. If the app is not installed, the website continues as a normal web page.

### Admin Panel Configuration
- Go to Settings → Deep Link Scheme and enter your scheme name (e.g., `eclassify`). Do not include `http` or `https`.

![Admin Panel Deep Link Scheme](/images/app/deeplink1.png)

### iOS App Setup (Custom Scheme)
- Xcode → Info → URL Types → add a URL Scheme matching the admin scheme.

![iOS URL Types](/images/app/deeplink2.png)

### Android App Setup (Custom Scheme)
- Update your custom scheme and host in the intent filter inside `AndroidManifest.xml`.

![Android Manifest Intent Filter](/images/app/deeplink3.png)

### App Config Host
- In `lib/app_config.dart`, set your website domain:

![Flutter App Settings Host](/images/app/deeplink4.png)

## Method B: Direct HTTPS Deep Links

This approach uses your https domain to open the app directly via:
- Android App Links (requires `assetlinks.json`)
- iOS Universal Links (requires `apple-app-site-association` AASA file)

Share links like `https://example.com/item/123` open the app if installed; otherwise they open the website.

### Android Setup (App Links)
1. Generate `assetlinks.json`:
    1. Visit [Play Console](https://play.google.com/console/developers/app/keymanagement)
    2. Select your app
    3. Scroll down to find the Digital Asset Links JSON content for your app
    4. Create a new file named `assetlinks.json` with the content from Play Console.
      
2. Host `assetlinks.json` at:
  - `https://<your-domain>/.well-known/assetlinks.json`

:::note
- The `assetlinks.json` file must be hosted at the root of your domain.
- Ensure the file is publicly accessible over HTTPS.
- Test the file by visiting `https://<your-domain>/.well-known/assetlinks.json` in a browser. It should display the JSON content.
:::



### iOS Setup (Universal Links)
1. Xcode → Runner → Signing & Capabilities → Associated Domains → add:
   - `applinks:<your-domain>`

![iOS Associated Domains](/images/app/deeplink5.png)

2. Host the AASA file at one of:
   - `https://<your-domain>/.well-known/apple-app-site-association`
   - `https://<your-domain>/apple-app-site-association`

3. Generate AASA with your Team ID and bundle ID:
   - You can find your Team ID in the Apple Developer account.
   - Your bundle ID is in Xcode → Runner → General → Identity → Bundle Identifier.

:::warning
The "apple-app-site-association" file must not have any extensions.
:::

Example file:
  - Replace the `TEAMID` with your actual Team ID.
  - Replace `com.yourcompany.eclassify` with your actual bundle ID.
  - Keep the rest of the file structure as is including components

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appIDs": ["TEAMID.com.yourcompany.eclassify"],
        "components": [
          {
            "/ad-details/*",
            "/seller/*"
          }
        ]
      }
    ]
  }
}
```

### Verification and Testing
- Android: Open a share URL like `https://example.com/item/123`. If the app opens, App Links are working. You can also test via Android Studio App Links Assistant or `adb` verifier.
- iOS: Tap the same `https` link in Safari or Messages. If the app opens, Universal Links are working. If it opens the website, check AASA hosting and Associated Domains.

## Choosing the Right Method
- Prefer Method B (HTTPS) for seamless, system-level behavior and stronger reliability.
- Use Method A (Custom Scheme) when you need website-first control or if you cannot host assetlinks/AASA yet.
- For best UX, you can support both: HTTPS deep links as primary, custom scheme as fallback from specific web flows.

:::note
Method B (HTTPS Deep Links) only works with the apps installed via Play Store or App Store.
:::
