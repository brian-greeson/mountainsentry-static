# Mountain Sentry

Static company website for software and product engineering. No build step or runtime dependencies.

## Preview

Run `python3 -m http.server 4173` from this directory, then open `http://localhost:4173`.

## Files

- `index.html`: services, working approach, and contact form.
- `privacy-policy.html`: company-wide privacy policy.
- `terms-of-service.html`: service terms.
- `styles.css`: shared layout, responsive rules, and legal page styles.
- `script.js`: accessible mobile navigation. Links and the form work without JavaScript.
- `logo.svg`: existing company mark.

The contact form posts directly to Web3Forms. Its access key is a public form identifier, not a private API credential. No test messages are sent during local checks.

## Design review and changes — November 13, 2026

The previous site had competing hero buttons, repeated sales copy, uneven card spacing, and different navigation, fonts, and padding on the legal pages. Some legal-page links pointed to sections that no longer existed. Decorative JavaScript hid content on load and moved cards on hover.

The update uses one shared layout and type system, a restrained green and cream palette, aligned service columns, and a single primary contact action. Product names and the project showcase have been removed. Legal pages share the site header and footer, with readable text widths and section links. The mobile menu uses a real button, supports Escape, and exposes its expanded state. Reduced motion is respected. Fonts and graphics load locally without font or icon CDNs.

## Privacy policy basis and release work

The policy uses the owner's supplied text dated November 13, 2026. It covers local processing, optional network features and integrations, support submissions, and third-party services. Privacy questions and deletion requests go to support@mountainsentry.com. Review the policy whenever those practices change.

The policy covers collection and use, provider sharing, retention and deletion, consent withdrawal, and contact details described in [Apple's privacy policy requirements](https://developer.apple.com/app-store/review/guidelines/#5.1.1).

Before releasing an app:

- Publish the policy at the existing public `/privacy-policy.html` URL and link it in both App Store Connect and the app.
- Check the app and its dependencies against the stated practices, and complete the matching [App Privacy disclosures](https://developer.apple.com/app-store/app-privacy-details/).
- Verify that the support and legal mailboxes receive messages and that website provider arrangements support the policy's commitments.

Updating this repository does not deploy the site or validate an app binary, App Store Connect configuration, provider contracts, or mailbox delivery.

## Checks

Run `node tests/check-contact-form.mjs`, `node --check script.js`, and `git diff --check`. Review all three pages at desktop and narrow mobile widths after layout changes.
