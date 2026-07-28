# Writing the "Rate us" NFC tag

Target URL (also in `nfc-payload.txt`):

```
https://Free-Palestine-4EVER.github.io/yeni-nesil-sandalyeci-site/rate-us/
```

Use the free **NFC Tools** app (by wakdev, iOS/Android) to write this URL to a blank NTAG215 sticker:

1. Install **NFC Tools** from the App Store or Google Play.
2. Open the app and tap **Write**.
3. Tap **Add a record** and pick **URL/URI** — this must be the URL/URI record type, not plain "Text", so phones open it directly in the browser on tap.
4. Paste in the URL above.
5. Tap **Write**, then hold the back of the phone against a blank NTAG215 sticker/card until the app confirms the write succeeded.
6. Tap the finished tag with another phone to confirm it opens the review link straight away.

The QR code (`qr.png`) and printable poster/table-tent PDFs in this folder point at the same URL, so the tag, the QR, and the print kit all stay in sync.
