---
sidebar_position: 2
---

# eClassify Features & Setup Flow

## 1. What Admin Needs to Do First

Before your users can access the full functionality of the app, the admin should complete these essential setup steps from the Laravel-based admin panel:

### Initial Setup Checklist:
- Login to Admin Panel
- General Settings: Set company name, email, contact number, address, currency, logos, and links etc.
- Language Setup: Add supported languages for both app and web platforms.
- Add Categories & Subcategories: Create main categories like Cars, Property, Jobs, etc.
- Configure Custom Fields: Add unique input fields for each category (e.g., Mileage for Cars).
- Create Subscription Plans: Add free and paid packages with limits for featured/regular ads.
- Setup Payment Gateways: Add API keys for Stripe, Flutterwave, PhonePe, Razorpay, Paystack, PhonePe, Bank Transfer etc.
- Add Slider Banners & Home Sections: Manage homepage visuals like featured ads, latest items, and sliders.
- Add Staff (optional): Create admin roles and permissions.
- Update Static Pages: Configure Terms, Privacy, About Us, etc.
- FCM Setup: Set Firebase settings to enable push notifications.
- Enable/Disable Authentication Settings
- Select OTP Services Provider
- Add Seller Verification Required Fields
- Import your appropriate country
- Add Ads Report Reason
- Add Safety Tips for user security
- Add Blogs
- Enable Google AdMob Ads
- Setup Email Templates

## 2. System Settings (Admin Panel)

### General System Settings

These are the core admin settings that influence global behavior across both the web and mobile platforms.

* **Company Info**: Set company name, email, phone number, and address.
* **App & Web Links**: Android, iOS, and web URLs.
* **Currency Settings**: Choose symbol, format, and symbol position (left/right).
* **Location Defaults**: Set default location.


### Map and Location:

* Google Place Maps API Key / Free Map Key
* Set Geolocation Radius for nearby ads

### System Management:

* Free Ads Listing Toggle
* Maintenance Mode Toggle
* Force Update Toggle
* Ads Auto-Approval Toggle
* Edited Ads Auto-Approval Toggle

### Integrations:

* SEO Settings
* Google Analytics
* Social Media Links
* Contact Information


## 3. Web Settings (Admin Panel)

This section allows customization of the frontend website appearance and functionality.

### Design & Branding:

* Primary Color Scheme
* Logo & Favicon Upload
* Footer Description
* Google Map Iframe Link 


### SEO & Analytics:

* Set SEO Metadata: Title, Description, Keywords
* Google Analytics ID
* Google AdSense Integration

### Sitemap & Downloads:

* Sitemap URL Generator
* Enable/Disable App Download Banners (Play Store & App Store links)

## 4. User Flow (App/Website)

This section explains what a regular user experiences while using eClassify on mobile or web.

### User Journey:

1. **Download App or Visit Website**
2. **Register/Login**: via Email, Phone, Google, or Apple.
3. **Grant Location Access**
4. **Browse Listings**:
   * Search by Category or Location
   * Apply Filters (Price, Distance, Condition, Custom Fields, etc.)
5. **View Ad Details**:
   * Image Gallery, Description, Seller Info, Map View, Similar Ads, Share Button
6. **Chat with Seller** (Real-time chat)
7. **Post New Ad**:
   * Fill in Title, Description, Price, Location, Category, Upload Images/Videos
8. **Choose Subscription Plan**: Free, Ads Listing and Featured
9. **Track & Manage Ads**:
   * See Active, Pending, Expired, and Featured Ads
   * Ad Analytics (Views, Chats)
   * Mark as Sold / Delete
10. **Engage with Platform**:
    * Leave Reviews
    * Report Ads
    * Save Favorites
    * Share Listings
    * Get Push Notifications

## 5. eClassify Feature Set

### 🔧 Admin Panel Functionalities

Focus on system control and configuration for platform management.

* **Dashboard & Analytics**: Overview of listings, users, and ad performance.
* **Category Management**: Create, edit, and organize main and subcategories with icons.
* **Plan Management**: Create subscription packages with feature limits.
* **Custom Field Builder**: Add specific data fields per category (e.g., mileage for cars).
* **Location Manager**: Add/manage country, state, city, and area data.
* **User Management**: 
  * Approve users, verify sellers, assign roles
  * Manage offline payments (Cash/Cheque)
  * Assign subscription plans manually
  * Track payment history
* **Ad Management**: Moderate listings, promote featured ads.
* **Reports & Reviews**: Handle reports from users and review moderation.
* **Payments**: 
  * Set up gateways (Stripe, Razorpay, Paystack, etc.)
  * Manage offline payments (Cash/Cheque)
  * Payment verification system
  * Payment history tracking
* **Push Notifications**: Send custom messages to all or specific users.
* **CMS & Static Pages**: Build About Us, Privacy Policy, etc.
* **Blog & SEO Tools**: Post content, manage tags, and optimize search visibility.
* **Slider & Banner Manager**: Create homepage visuals and call-to-actions with featured section and slider section.
* **Admin Roles & Permissions**: Control who can access what sections.

### 📱 Mobile App & Web Features

* Material Design UI (Light/Dark themes)
* Real-time Chat with Push Notifications
* Advanced Filters and Search
* Upload Photos/Videos in Listings
* Google, Email, Apple and Phone Authentication
* Favorite Ads, Share Listings
* Location Services
* Multi-language and RTL Support
* Deep Linking, Caching, Background Sync
* In-app Purchase
* Responsive Web Design (Mobile-Friendly)
* SEO & Sitemap Support
* User Analytics
