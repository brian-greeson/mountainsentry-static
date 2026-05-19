# Founder Prototype Positioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refocus the Mountain Sentry homepage copy toward founders and early-stage startups who need help turning ideas, partial apps, or connected product concepts into working prototypes.

**Architecture:** This is a static HTML copy update that preserves the existing section structure, CSS, JavaScript, legal pages, and ShotSense section. The homepage will lead with founder prototype positioning, recast capability cards around founder problems, and keep ShotSense as proof of connected product experience.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Font Awesome icons, Google Fonts.

---

## File Structure

- Modify: `index.html`
  - Update the hero, about, capabilities, ShotSense intro, contact, and footer copy.
  - Preserve existing IDs, classes, links, contact email, and form fields.
- No CSS changes are planned.
- No JavaScript changes are planned.
- Verify by opening `index.html` directly in a browser or serving the static directory locally.

### Task 1: Homepage Founder-Focused Copy

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update the hero copy**

Replace the current hero eyebrow, subheadline, paragraph, and primary CTA text with:

```html
<p class="eyebrow">Founder prototype partner</p>
<h1>Mountain Sentry</h1>
<h2>Turn your connected product idea into a working prototype.</h2>
<p>Mountain Sentry helps founders and early-stage startups move from idea, rough app, or technical uncertainty to a prototype people can try, test, and improve. The strongest work happens where mobile apps, software, sensors, and connected hardware meet.</p>
<div class="hero-buttons">
  <a href="#contact" class="btn btn-primary">Start a Prototype Conversation</a>
  <a href="#capabilities" class="btn btn-tertiary">View Capabilities</a>
  <a href="#shotsense" class="btn btn-secondary">See ShotSense</a>
</div>
```

- [ ] **Step 2: Update the about section copy**

Replace the about section title, intro heading, and two paragraphs with:

```html
<h2 class="section-title">For Founders Building the First Real Version</h2>
...
<h3>Hands-on product engineering from idea to initial prototype.</h3>
<p>Mountain Sentry works with solo founders and early-stage teams that need practical help making a product real. That can mean shaping the technical path, building the first mobile experience, connecting an app to hardware, or turning a promising partial build into something users can evaluate.</p>
<p>ShotSense is Mountain Sentry's own connected product: a pickleball training platform combining embedded hardware, Bluetooth Low Energy communication, motion sensing, and an iOS app. It is direct proof of the same app-plus-hardware work Mountain Sentry helps founders bring to life.</p>
```

Replace the engagement panel heading and list with:

```html
<h3>Where Founders Get Help</h3>
<ul>
  <li>Clarifying the prototype your idea needs first</li>
  <li>Choosing a practical app, device, and backend architecture</li>
  <li>Building across mobile, embedded, BLE, and sensor workflows</li>
  <li>Getting to a testable version without hiring a full team</li>
</ul>
```

- [ ] **Step 3: Update the capabilities section**

Replace the section intro with:

```html
<p class="section-intro">Mountain Sentry helps founders reduce ambiguity, build the first useful version, and prove the hard parts of products that cross app, software, and hardware boundaries.</p>
```

Replace the four service cards with these card headings and copy:

```html
<h3>Idea to Prototype</h3>
<p>Turn a product idea, rough spec, or half-built app into a focused prototype plan and working first version.</p>
<ul>
  <li>Prototype scope and technical path</li>
  <li>Architecture choices that match the stage you are in</li>
  <li>Builds that help users, partners, or investors react to something real</li>
</ul>

<h3>Hardware + App Integration</h3>
<p>Bridge the gap between physical devices and software when your product depends on connected hardware behaving reliably.</p>
<ul>
  <li>Bluetooth Low Energy workflows and device communication</li>
  <li>Sensor data capture, display, and analysis</li>
  <li>Embedded-to-mobile product flows that feel coherent</li>
</ul>

<h3>Mobile Product Development</h3>
<p>Build the mobile experience your prototype or early product needs, with attention to reliability, usability, and device integration.</p>
<ul>
  <li>iOS app development and companion app design</li>
  <li>Real-time data views and feedback loops</li>
  <li>Polished flows for demos, pilots, and early users</li>
</ul>

<h3>Startup Engineering Support</h3>
<p>Add senior hands-on engineering capacity before you are ready to hire a full product team.</p>
<ul>
  <li>Technical direction for solo founders and small teams</li>
  <li>Project rescue, acceleration, and delivery support</li>
  <li>Clear scope, direct communication, and pragmatic execution</li>
</ul>
```

- [ ] **Step 4: Update the ShotSense intro**

Replace the ShotSense intro with:

```html
<p class="section-intro">ShotSense is Mountain Sentry's own connected product, showing the same hardware, mobile, BLE, and sensor experience founders often need for their first prototype.</p>
```

- [ ] **Step 5: Update the contact and footer copy**

Replace contact heading and paragraphs with:

```html
<h2 class="section-title">Start a Prototype Conversation</h2>
...
<h3>Tell me what you are trying to build</h3>
<p>Reach out if you have an idea, a partial app, a hardware/software integration challenge, or an early product that needs a clearer path to prototype.</p>
<p class="contact-note">Include what exists today, where you are stuck, and what the first working prototype needs to prove.</p>
```

Replace footer summary with:

```html
<p>Founder-focused prototype development for products where mobile apps, software, and connected hardware meet.</p>
```

- [ ] **Step 6: Verify the HTML contains the approved positioning**

Run:

```bash
rg -n "Founder prototype partner|connected product idea|Start a Prototype Conversation|Idea to Prototype|Hardware \\+ App Integration" index.html
```

Expected: Each phrase appears in `index.html`.

- [ ] **Step 7: Verify the page renders without obvious layout breakage**

Open the static page in a browser or run a local static server:

```bash
python3 -m http.server 8000
```

Then inspect `http://localhost:8000` at desktop and mobile widths. Expected: hero, capability cards, ShotSense section, contact section, and footer render with readable copy and no text overlap.

- [ ] **Step 8: Commit the implementation**

Run:

```bash
git add index.html docs/superpowers/plans/2026-05-19-founder-prototype-positioning.md
git commit -m "Update homepage for founder prototype positioning"
```

Expected: Commit succeeds with `index.html` and the implementation plan included.
