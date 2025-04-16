---
sidebar_position: 3
---

# Twilio Setup for OTP Provider

## Setup Twilio for OTP

Follow these steps to configure Twilio as your OTP provider:

1. Head to this URL: [https://console.twilio.com/](https://console.twilio.com/)
2. Create a Twilio account

![Create Twilio Account](/images/admin/twilio-setup-1.png)
![Create Twilio Account](/images/admin/twilio-setup-2.png)

3. Copy the Account SID and Auth Token

![Copy Account SID and Auth Token](/images/admin/twilio-setup-3.jpg)

4. Paste the Account SID and Auth Token in Admin panel -> Settings -> OTP Provider Settings

![OTP Provider Settings](/images/admin/twilio-setup-4.png)

## Getting a Twilio Phone Number

You can either:

1. Buy an available number

![Buy Available Number](/images/admin/twilio-setup-5.png)

2. Or get a trial number

![Get Trial Number](/images/admin/twilio-setup-6.png)

3. Copy the number and paste it in OTP Provider Settings and save the form

![Copy Number to OTP Settings](/images/admin/twilio-setup-7.jpg)

## Important Note for Trial Accounts

In Trial accounts, phone numbers will not be verified automatically. If you want to send OTP via Twilio, you must verify your number manually in Twilio.

![Verify Number in Twilio](/images/admin/twilio-setup-8.jpg)
