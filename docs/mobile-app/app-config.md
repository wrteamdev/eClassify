---
sidebar_position: 2
---

# App Configuration

`AppConfig` contains all core app configuration in one place for easier setup. Update these fields before building the app.

## Location in Codebase
- File path: `lib/app_config.dart`
- Class name: `AppConfig`

```dart
class AppConfig {
  static const String applicationName = 'eClassify';

  static const String hostUrl = "https://eclassify.wrteam.me";

  static const String shareDomain = "https://eclassifyweb.wrteam.me";

  static LeafLocation defaultLocation = LeafLocation.global();

  static double defaultLatitude = 25.0760224;
  static double defaultLongitude = 55.2274879;

  static const String defaultCountryCode = 'IN';
  static const String defaultPhoneCode = '91';

  static const bool showCompanyLogo = true;
}
```

## Field Reference

`applicationName`
- Display name shown under the splash logo in splash screen.

`hostUrl`
- Base URL for API requests.
- Must NOT have a trailing slash.
- Example: `https://eclassify.wrteam.me`

`shareDomain`
- Website domain used when generating share links.
- Must NOT have a trailing slash.
- Example: `https://eclassifyweb.wrteam.me`
- Align with your [deep link setup](../mobile-app/deep-link.md):
  - For Custom Scheme (Method A), website hosts the share page and triggers the scheme.
  - For Direct HTTPS (Method B), this domain must host `assetlinks.json` (Android) and AASA (iOS).

`defaultLocation`
- Fallback location when current location is unavailable.
- `LeafLocation.global()` uses global scope.
- Custom example:
  ```
  LeafLocation(
    country: LocalizedString(canonical: 'India'),
    state: LocalizedString(canonical: 'Gujarat'),
    city: LocalizedString(canonical: 'Bhuj'),
  )
  ```
:::note
Translations are not supported for default location yet.
:::

`defaultLatitude / defaultLongitude`
- Coordinates shown on the map when user hasn’t selected a location.
- Set to `0.0` to use Admin Panel defaults dynamically.
- Use valid lat/long for better initial UX.

`defaultCountryCode`
- Two-letter ISO code (e.g., `IN`, `US`).
- Find your country code on [countrycode.org](https://countrycode.org/).

`defaultPhoneCode`
- Country calling code without `+` (e.g., `91`, `1`).
- Used in phone number formatting and validation.

`showCompanyLogo`
- Toggles company logo at the bottom of the splash screen.
- If true, replace `assets/svg/Logo/company_logo.svg` with your brand asset.