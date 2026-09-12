import { LegalPage } from '@/components/layout/LegalPage'
import { useSeo } from '@/hooks/useSeo'
import { site } from '@/data/site'

/**
 * App-specific policy for DriveSmooth, linked from the Play and App Store listings and
 * opened inside the apps themselves (Profile → Settings → Privacy policy). The apps
 * append `?theme=light|dark&embed=1`, handled by ThemeProvider and Layout.
 *
 * One page covers both apps. Where Android and iOS genuinely differ — the stores, the
 * sign-in providers, the analytics SDK, the map renderer and how automatic trip
 * detection is armed — the platform is named inline rather than split into two pages,
 * so a driver reading on either phone sees the whole picture.
 */
export function DriveSmoothPrivacyPage() {
  useSeo(
    'DriveSmooth Privacy Policy',
    'What data the DriveSmooth driving app collects on Android and iOS, why it is collected, and the control you have over it.',
  )

  return (
    <LegalPage
      title="DriveSmooth Privacy Policy"
      lastUpdated="September 12, 2026"
      intro="DriveSmooth is a driving companion app that scores your trips using your phone's motion sensors and GPS, and helps you build smoother, safer driving habits. This policy covers the DriveSmooth apps for Android and iOS and the accounts behind them. Because the app works with location and account data, we want to be clear about exactly what is collected, why, and what control you have over it."
    >
      <h2>1. Information We Collect</h2>
      <p>
        When you use DriveSmooth, we collect the following data and store it on
        our servers, associated with your account:
      </p>
      <ul>
        <li>
          <strong>Account information</strong> — your name, email address, and
          profile photo, provided when you sign up with email and password or
          use a sign-in provider: Google or Facebook on Android, Google or Apple
          on iOS. If you use Sign in with Apple and choose to hide your email,
          we only ever receive Apple's private relay address.
        </li>
        <li>
          <strong>Eligibility confirmation</strong> — the date on which you ticked
          the box during profile setup confirming you are at least 16 and hold a
          valid driver's licence. We record that you confirmed it; we do not
          collect, see or verify any licence details.
        </li>
        <li>
          <strong>Vehicle information (optional)</strong> — the brand, model,
          year and fuel type of your vehicle, if you choose to add them when
          editing your profile. They are shown on your own profile and are not
          required; you can change or clear them at any time from the same
          screen.
        </li>
        <li>
          <strong>Trip data</strong> — GPS route, distance, duration, driving
          events (hard braking, harsh acceleration, sharp turns, speeding), trip
          scores, and downsampled motion telemetry
        </li>
        <li>
          <strong>Gamification data</strong> — your lifetime and weekly scores,
          streaks, badges, and the challenges you join and your progress in them
        </li>
        <li>
          <strong>Subscription state</strong> — whether you have an active
          premium subscription, whether you are inside the free trial that runs
          for the first days after signup, or whether we have granted your
          account complimentary access. Subscriptions are verified with Google
          Play on Android and with the Apple App Store on iOS; we never see your
          payment details.
        </li>
        <li>
          <strong>Device push token</strong> — so we can deliver notifications
          such as badge awards and challenge updates. The token for a device is
          deleted from our servers when you sign out on it.
        </li>
        <li>
          <strong>Device and app information</strong> — the app version you are
          running and a country code, sent with each request so we can support
          the right versions and run country-specific challenges. The country
          comes from your mobile network on Android and from your device's
          region setting on iOS.
        </li>
        <li>
          <strong>Usage and diagnostics</strong> — app-activity data collected
          automatically by Google Analytics for Firebase on both Android and
          iOS: app opens, sessions, screens viewed and purchases, along with
          your device model, operating system and approximate region. We use it
          to understand how the app is used and to find problems. Once you are
          signed in we label this data with your account identifier, so it is
          linked to your account rather than anonymous. On Android it also
          includes your advertising ID; on iOS the advertising identifier is
          included only if you allow it at the App Tracking Transparency prompt
          described in section 5. Analytics is collected from released versions
          of the apps only.
        </li>
      </ul>
      <p>
        <strong>Community posting is currently switched off.</strong> The feed,
        friends and posting features are not reachable in either app, so no
        posts, comments or uploaded images are being collected. Sharing a trip
        now renders a summary card on your device and hands it to your phone's
        own share sheet — that image is not uploaded to us. Anything you posted
        before these features were withdrawn is still stored under your account
        and is still removed when you delete a post or your account. If
        community features return, this policy will be updated first.
      </p>

      <h2>2. Location Data</h2>
      <p>
        DriveSmooth records your precise location while a trip is being recorded
        — that is what draws your route and detects driving events. Recording
        continues in the background so a drive is not cut short when your screen
        locks or you switch apps.
      </p>
      <p>
        Background location is used more broadly <strong>only</strong> if you
        enable automatic trip detection, an optional setting that lets the app
        notice when you start driving and record the trip for you. It can be
        turned on and off at any time from the Home screen and from your
        profile. With it off, the app accesses your location only while a trip is
        being recorded.
      </p>
      <p>
        With automatic detection on, each platform arms itself differently:
      </p>
      <ul>
        <li>
          <strong>Android</strong> — the app keeps a low-power{' '}
          <em>passive</em> location watch. It never powers up the GPS itself and
          only sees location fixes that some other app on your phone has already
          requested. Those fixes are checked on your device for one thing —
          whether you appear to be moving at driving speed — and are never
          uploaded or stored on our servers. Detection also re-arms itself after
          your phone restarts.
        </li>
        <li>
          <strong>iOS</strong> — the app uses the system's significant-location-change
          monitoring, which the operating system uses to wake DriveSmooth with a
          coarse location when you have moved a meaningful distance. Its only
          purpose is to restart detection after iOS has closed the app. Those
          wake-up locations are used on your device to decide whether to look
          more closely, and are never uploaded or stored on our servers.
        </li>
      </ul>
      <p>
        On both platforms, no location is recorded or sent to us until a trip
        actually starts.
      </p>

      <h2>3. Motion and Activity Data</h2>
      <p>
        The app reads your phone's motion sensors (accelerometer) during trips to
        detect driving events. With your permission it also uses the platform's
        activity recognition — Google Play services activity recognition on
        Android, Motion &amp; Fitness (Core Motion) on iOS — to notice when you
        are in a vehicle, which is what drives automatic trip detection and
        automatic trip ending. Raw sensor and activity streams are processed on
        your device; only trip summaries, events, and downsampled telemetry are
        uploaded.
      </p>

      <h2>4. How We Use Your Data</h2>
      <ul>
        <li>Scoring your trips and showing your driving history and stats</li>
        <li>
          Leaderboards, badges, streaks and challenges (your display name,
          profile photo and scores appear to other users on leaderboards)
        </li>
        <li>Comparing your driving with community averages</li>
        <li>Sending notifications you have opted into</li>
        <li>
          Operating and supporting the service — keeping accounts secure,
          detecting abuse and falsified trips, and fixing faults
        </li>
      </ul>
      <p>We do not sell your personal data.</p>

      <h2>5. Advertising</h2>
      <p>
        Free accounts see occasional full-screen ads served by Google AdMob on
        both Android and iOS. Accounts on a trial, on a premium subscription, or
        with complimentary access see no ads, and no ad requests are made from
        their devices at all.
      </p>
      <p>
        AdMob may use your device's advertising identifier as described in
        Google's own privacy policy. On iOS, the app asks for your permission
        first through Apple's App Tracking Transparency prompt; if you decline,
        ads are still shown but are not personalised using that identifier. Your
        trips, routes, driving events and scores are never used for advertising
        and are never shared with an advertising network.
      </p>

      <h2>6. Third-Party Services</h2>
      <p>
        DriveSmooth relies on the following services, each governed by its own
        privacy policy:
      </p>
      <ul>
        <li>
          <strong>Firebase Authentication, Cloud Messaging and Remote Config</strong>{' '}
          (Google) — sign-in, push notifications, and the switch that lets us put
          the app into maintenance mode
        </li>
        <li>
          <strong>Google Analytics for Firebase</strong> — app usage and
          diagnostics on both Android and iOS, as described in section 1
        </li>
        <li>
          <strong>Google Play Billing</strong> (Android) and the{' '}
          <strong>Apple App Store</strong> (iOS) — premium subscriptions
        </li>
        <li>
          <strong>Google AdMob</strong> — ads on free accounts, on both platforms
        </li>
        <li>
          <strong>Mapbox</strong> — rendering the maps your routes are drawn on
          in the Android app, and, on our servers, matching a recorded route to
          the roads it followed so we can compare your speed against posted
          limits. Where that matching is enabled, a thinned set of route
          coordinates from your trip is sent to Mapbox by our backend, for
          trips from both apps. No account identifier is sent with them.
        </li>
        <li>
          <strong>Apple Maps</strong> (iOS) — rendering route maps in the iOS
          app, handled by the operating system on your device
        </li>
        <li>
          <strong>Sign in with Apple</strong> (iOS) and{' '}
          <strong>Google Sign-In</strong> — only if you choose those sign-in
          methods
        </li>
        <li>
          <strong>Facebook Login</strong> (Meta) — Android only, and only if you
          choose to sign in with Facebook
        </li>
        <li>
          <strong>Zoho Mail</strong> — delivering account emails such as
          sign-up verification
        </li>
      </ul>

      <h2>7. Data Security</h2>
      <p>
        All data is transmitted over encrypted connections (HTTPS). Trips
        recorded offline are stored on your device and synced securely when you
        are back online.
      </p>

      <h2>8. Data Retention and Deletion</h2>
      <p>
        Your account, profile, lifetime stats and badges are kept for as long as
        your account exists. Two things are removed automatically on a rolling
        basis:
      </p>
      <ul>
        <li>
          <strong>Trips are kept for one year.</strong> Recorded trips — their
          routes, events and telemetry — are permanently deleted once they are
          older than that, which is why your Trips screen covers the last year.
          (The window we actually apply is 370 days, so a full twelve months
          stays available to you for a few days beyond the anniversary.) Your
          Home screen shows a shorter 30-day summary by design, and your
          lifetime totals, badges, streaks and leaderboard standing are
          calculated as you drive and are <em>not</em> affected.
        </li>
        <li>
          <strong>Notifications are kept for 30 days</strong> before being
          cleared from your inbox.
        </li>
      </ul>
      <p>
        You can also delete individual trips inside the app at any time.
      </p>
      <p>
        You can delete your entire account from inside either app, under Profile
        → Settings. Deletion is scheduled 7 days ahead — you can cancel it from
        the same screen at any point before then, and you can keep using
        DriveSmooth in the meantime. Once it goes through, your account and
        everything attached to it — trips, stats, badges, challenge progress,
        any posts or comments made when community features were available, and
        your profile — are permanently removed. If you cannot reach the app,
        email us at <strong>{site.email}</strong> from the address on your
        account and we will action the request.
      </p>

      <h2>9. Children's Privacy</h2>
      <p>
        DriveSmooth is made for licensed drivers and is not directed at children
        under 13. We do not knowingly collect personal information from children.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        This privacy policy may be updated from time to time. Material changes
        will be reflected on this page with a new "last updated" date.
      </p>

      <h2>11. Contact</h2>
      <p>
        <strong>{site.name}</strong>
        <br />
        {/* Plain text, not a mailto: link — this page is opened inside the app's
            WebView, which cannot hand mailto: off to a mail client and shows
            "webpage not available" instead. The address stays selectable. */}
        <strong>{site.email}</strong>
      </p>
    </LegalPage>
  )
}
