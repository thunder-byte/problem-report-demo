# Problem Report — Public Demo

This repository contains a static, client-side version of the Problem Report app. It has no app backend, Google OAuth integration, or Twilio integration. It passes the selected photo and description to the phone's native share sheet; the user chooses an email or messaging app, selects the recipient, and confirms sending. The site does not upload or store reports. The email/SMS apps and services chosen for sharing remain subject to their own handling and privacy policies.

The Web Share API with image files requires a supporting browser and normally an HTTPS site. When a browser cannot share the photo, the app explains the limitation rather than downloading the image or pretending it was sent.

## Publish with GitHub Pages

1. Create a **public** GitHub repository named `problem-report-demo`.
2. Push the contents of this folder to the repository's `main` branch.
3. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
4. Wait for the **Deploy public demo** action to finish. The site will be available at [https://thunder-byte.github.io/problem-report-demo/](https://thunder-byte.github.io/problem-report-demo/).

The authenticated server app remains in the private `app2` repository.
