import { LegalPage } from '@/components/layout/LegalPage'
import { useSeo } from '@/hooks/useSeo'
import { site } from '@/data/site'

/**
 * Official rules for DriveSmooth challenges, covering both apps. Opened from the "Challenge
 * rules" link under the challenge list on the Challenges tab, inside the app's WebView with
 * `?theme=…&embed=1` — so, like the terms and privacy pages, it carries no outbound links.
 *
 * Why it exists: some challenges award a prize (a fuel gift card, emailed outside the app),
 * which makes them contests under App Store Review Guideline 5.3. Apple requires official
 * rules presented in the app that make clear Apple is not a sponsor or involved in any
 * manner — section 1 is that statement and must survive any future edit. Google is covered
 * without being named, because this page is also shown inside the iOS app.
 *
 * Section 4 describes the backend's real counting rules (GamificationService.joinChallenge /
 * progressChallenges): join only while running, trips count from the join, and a trip that
 * reaches the server after the challenge ends earns nothing. Keep the two in step.
 */
export function DriveSmoothChallengeRulesPage() {
  useSeo(
    'DriveSmooth Challenge Rules',
    'The official rules for challenges and challenge prizes in the DriveSmooth driving app on Android and iOS.',
  )

  return (
    <LegalPage
      title="DriveSmooth Challenge Rules"
      lastUpdated="October 9, 2026"
      intro={`These are the official rules for challenges in the DriveSmooth app on Android and iOS, including challenges that offer a prize. By joining a challenge, you agree to these rules and to the DriveSmooth Terms & Conditions.`}
    >
      <h2>1. Sponsor</h2>
      <p>
        Challenges and their prizes are sponsored and run solely by{' '}
        <strong>{site.name}</strong>.{' '}
        <strong>
          Apple Inc. is not a sponsor of, and is not involved in, any DriveSmooth
          challenge or prize in any manner. Neither is any other app store or
          platform provider.
        </strong>{' '}
        Questions about a challenge go to us at <strong>{site.email}</strong>,
        not to them.
      </p>

      <h2>2. Who Can Take Part</h2>
      <ul>
        <li>
          You need a DriveSmooth account and must meet the eligibility
          requirements in the Terms &amp; Conditions: you are at least 16 years
          old and hold a valid driver's licence.
        </li>
        <li>
          One person, one account. Taking part through more than one account
          disqualifies all of them.
        </li>
        <li>
          Some challenges run only in particular countries or are open only to
          particular drivers. The app only shows you challenges you can join.
        </li>
        <li>
          Joining a challenge is free. Premium challenges, marked as premium in
          the app, are open only to accounts with a paid DriveSmooth subscription
          or complimentary access from us; the free trial does not include them.
        </li>
        <li>
          Employees of {site.name} and members of their households may take part
          but cannot win prizes.
        </li>
        <li>Void where prohibited by law.</li>
      </ul>

      <h2>3. Each Challenge's Own Details</h2>
      <p>
        Every challenge shows its goal and its start and end dates in the app. A
        challenge that offers a prize also says in its description what the prize
        is, how many winners there will be and how the winners are chosen. Those
        details are part of these rules for that challenge. If they conflict with
        these rules, the challenge's own details apply.
      </p>

      <h2>4. Joining and Which Trips Count</h2>
      <ul>
        <li>
          You can join a challenge only while it is running — after it starts and
          before it ends.
        </li>
        <li>
          Only trips that end after you joined, and within the challenge's dates,
          count toward it.
        </li>
        <li>
          <strong>A trip must reach our servers before the challenge ends.</strong>{' '}
          Trips upload automatically whenever your phone is online. A trip still
          waiting on your phone when the challenge ends does not count, even if you
          drove it in time.
        </li>
        <li>
          A trip waiting for your answer to "Were you driving?" is not uploaded
          until you answer, and a trip you mark as one you were not driving never
          counts.
        </li>
        <li>
          Results are decided from the trips held on our servers. Once a challenge
          ends, its results are final, subject to section 7.
        </li>
      </ul>

      <h2>5. How Winners Are Chosen</h2>
      <p>
        Winners are chosen as the challenge describes, by how you drive —{' '}
        <strong>never by a random draw</strong>.
      </p>
      <ul>
        <li>
          Where a challenge sets a target, such as a number of safe trips or a
          distance, drivers qualify by reaching it before the challenge ends.
        </li>
        <li>
          Where a challenge is decided by leaderboard position — for example,
          finishing in the top three of the weekly leaderboard — the winners are
          taken from that leaderboard's final standings after it closes, as shown
          in the app.
        </li>
        <li>
          If drivers are tied for a prize-winning place, each tied driver receives
          the prize, unless the challenge describes a different tie-break.
        </li>
      </ul>
      <p>
        We review winning trips before awarding prizes, and may disqualify trips or
        drivers under section 7.
      </p>

      <h2>6. Prizes and Delivery</h2>
      <ul>
        <li>
          Prizes are described in each challenge — typically a fuel gift card. A
          challenge with no prize in its description earns recognition inside the
          app and nothing more.
        </li>
        <li>
          We tell winners with a notification in the app and send the prize{' '}
          <strong>by email to the address on your DriveSmooth account</strong>.
          Prizes are not delivered inside the app. If you chose to hide your email
          when signing in with Apple, the prize goes to your Apple relay address,
          which forwards it to your inbox.
        </li>
        <li>We aim to send prizes within 30 days after a challenge ends.</li>
        <li>
          Before sending a prize, we may ask you to confirm that you meet section
          2 — for example, your age and that you hold a valid driver's licence.
        </li>
        <li>
          If a prize cannot be delivered — for example, the email bounces — or a
          winner does not reply to an eligibility check within 14 days, the prize
          may be forfeited.
        </li>
        <li>
          One prize per account per challenge. Prizes cannot be exchanged for
          cash, transferred or swapped. If an advertised prize becomes
          unavailable, we may substitute one of equal or greater value.
        </li>
        <li>
          Gift cards are subject to their issuer's own terms and expiry rules. Any
          taxes on a prize are the winner's responsibility.
        </li>
      </ul>

      <h2>7. Fair Play</h2>
      <p>
        Challenges are for real driving only. Do not falsify trips, spoof your
        location, simulate movement, use someone else's trips, or record trips in a
        vehicle you are not driving — the same rules as the Acceptable Use section
        of the Terms &amp; Conditions. We may disqualify trips, reset progress or
        withhold a prize where we reasonably believe a result was reached by
        breaking these rules or the Terms, or through a fault in the app or our
        service.
      </p>

      <h2>8. Safety</h2>
      <p>
        <strong>No challenge is worth an unsafe drive.</strong> Obey traffic laws
        at all times, and do not look at or use the app while driving — check your
        progress once you have parked. Nothing in a challenge overrides the safety
        section of the Terms &amp; Conditions.
      </p>

      <h2>9. Changes and Cancellation</h2>
      <p>
        We may change, extend, shorten or cancel a challenge if it cannot run as
        intended — for example because of a technical fault, abuse, or a change
        in the law. If we cancel a prize challenge after it has started, we may
        award its prize based on the standings at that time, at our reasonable
        discretion. Changes to these rules do not apply to a challenge that is
        already running, unless the law requires it.
      </p>

      <h2>10. Privacy</h2>
      <p>
        We use the email address on your account to contact winners and deliver
        prizes. Your display name and scores appear on leaderboards. Both are
        described in the DriveSmooth Privacy Policy.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {site.name} is not responsible for
        trips that fail to record or upload, notifications or emails that are
        delayed or not delivered, or problems with a gift card after it has been
        sent. The Limitation of Liability section of the Terms &amp; Conditions
        also applies.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These rules are governed by the laws of {site.legal.governingLaw}, subject
        to any mandatory consumer protections in your own country of residence.
      </p>

      <h2>13. Contact</h2>
      <p>
        <strong>{site.name}</strong>
        <br />
        <strong>{site.email}</strong>
      </p>
    </LegalPage>
  )
}
