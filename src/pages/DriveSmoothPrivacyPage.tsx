import { LegalPage } from '@/components/layout/LegalPage'
import { useSeo } from '@/hooks/useSeo'
import { site } from '@/data/site'

/**
 * App-specific policy for DriveSmooth, linked from the Play listing and opened
 * inside the app itself (Settings → Privacy policy). The app appends
 * `?theme=light|dark&embed=1`, handled by ThemeProvider and Layout.
 */
export function DriveSmoothPrivacyPage() {
  useSeo(
    'DriveSmooth Privacy Policy',
    'What data the DriveSmooth driving app collects, why it is collected, and the control you have over it.',
  )

  return (
    <LegalPage
      title="DriveSmooth Privacy Policy"
      lastUpdated="August 4, 2026"
      intro="DriveSmooth is a driving companion app that scores your trips using your phone's motion sensors and GPS, and helps you build smoother, safer driving habits. Because the app works with location and account data, we want to be clear about exactly what is collected, why, and what control you have over it."
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
          sign in with Google or Facebook
        </li>
        <li>
          <strong>Trip data</strong> — GPS route, distance, duration, driving
          events (hard braking, harsh acceleration, sharp turns, speeding), trip
          scores, and downsampled motion telemetry
        </li>
        <li>
          <strong>Content you create</strong> — posts, comments, and trip images
          you choose to share to the community feed
        </li>
        <li>
          <strong>Subscription state</strong> — whether you have an active
          premium subscription, verified through Google Play (we never see your
          payment details)
        </li>
        <li>
          <strong>Device push token</strong> — so we can deliver notifications
          such as badge awards and challenge updates
        </li>
      </ul>

      <h2>2. Location Data</h2>
      <p>
        DriveSmooth records your precise location while a trip is being recorded
        — that is what draws your route and detects driving events. Background
        location is used <strong>only</strong> if you enable automatic trip
        detection, an optional setting that lets the app notice when you start
        driving and record the trip for you. You can turn it off at any time in
        your profile, and the app never accesses your location outside of trip
        recording.
      </p>

      <h2>3. Motion and Activity Data</h2>
      <p>
        The app reads your phone's motion sensors (accelerometer) during trips to
        detect driving events, and uses Android's activity recognition (with your
        permission) to notice when you are in a vehicle for automatic trip
        detection. Raw sensor streams are processed on your device; only trip
        summaries, events, and downsampled telemetry are uploaded.
      </p>

      <h2>4. How We Use Your Data</h2>
      <ul>
        <li>Scoring your trips and showing your driving history and stats</li>
        <li>
          Leaderboards, badges, and challenges (your display name and scores
          appear to other users)
        </li>
        <li>Comparing your driving with community averages</li>
        <li>
          The social feed, if you choose to share posts (posts can be public or
          friends-only)
        </li>
        <li>Sending notifications you have opted into</li>
      </ul>
      <p>We do not sell your personal data.</p>

      <h2>5. Advertising</h2>
      <p>
        Free accounts see occasional full-screen ads served by Google AdMob,
        which may use your device's advertising ID as described in Google's own
        privacy policy. Users on a trial or premium subscription see no ads and
        no ad requests are made from their devices.
      </p>

      <h2>6. Third-Party Services</h2>
      <p>
        DriveSmooth relies on the following services, each governed by its own
        privacy policy:
      </p>
      <ul>
        <li>
          <strong>Firebase Authentication and Cloud Messaging</strong> (Google) —
          sign-in and push notifications
        </li>
        <li>
          <strong>Google Play Billing</strong> — premium subscriptions
        </li>
        <li>
          <strong>Google AdMob</strong> — ads on free accounts
        </li>
        <li>
          <strong>Mapbox</strong> — rendering the maps your routes are drawn on
        </li>
        <li>
          <strong>Facebook Login</strong> (Meta) — only if you choose to sign in
          with Facebook
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
        Your data is kept for as long as your account exists. You can delete
        individual trips and posts inside the app at any time. To delete your
        account and all associated data — trips, posts, comments, stats, and
        profile — email us at <strong>{site.email}</strong> from the email
        associated with your account, and we will complete the deletion within 30
        days.
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
