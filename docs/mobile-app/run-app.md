---
sidebar_position: 19
---

# Run This App

Open your terminal, navigate to your project path and execute the following command to run this app.

```shell
flutter run
```

# Commonly used commands

### 📦 Update iOS Pods
```shell
cd ios
pod init
pod update
pod install
cd ..
```

### 🧹 Clean Pub Cache
```shell
flutter clean
flutter pub cache clean
flutter pub get
```

### 🔧 Repair Pub Cache
```shell
flutter clean
flutter pub cache repair
flutter pub get
```



### 📱 Generate Android APK
```shell
flutter build apk --split-per-abi
open  build/app/outputs/flutter-apk/
```

### 🛠️ Solve Common iOS Errors
```shell
flutter clean
rm -Rf ios/Pods
rm -Rf ios/.symlinks
rm -Rf ios/Flutter/Flutter.framework
rm -Rf Flutter/Flutter.podspec
rm ios/podfile.lock
cd ios 
pod deintegrate
sudo rm -rf ~/Library/Developer/Xcode/DerivedData
flutter pub cache repair
flutter pub get 
pod install 
pod update 
```
