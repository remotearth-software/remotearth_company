import { LegalPage } from '@/components/layout/LegalPage'
import { useSeo } from '@/hooks/useSeo'
import { site } from '@/data/site'

/**
 * App-specific terms for DriveSmooth, covering both the Android and iOS apps.
 * Linked from each app's Settings screen and from the sign-up consent checkbox, so —
 * like the privacy page — it is opened inside a WebView with `?theme=…&embed=1` and
 * carries no outbound links.
 *
 * Section 13 carries the minimum terms Apple requires of an app that ships its own
 * EULA rather than using Apple's standard one; it must survive any future edit.
 */
export function DriveSmoothTermsPage() {
  useSeo(
    'DriveSmooth Terms & Conditions',
    'The terms that apply when you use the DriveSmooth driving app on Android or iOS.',
  )

  return (
    <LegalPage
      title="DriveSmooth Terms & Conditions"
      lastUpdated="September 9, 2026"
      intro={`These terms are an agreement between you and ${site.name} covering your use of the DriveSmooth mobile app on Android and iOS. By creating an account or using the app, you agree to them. If you do not agree, please do not use DriveSmooth.`}
    >
      <h2>1. Safety Comes First</h2>
      <p>
        <strong>
          DriveSmooth is not a driver-assistance system and does not make you a
          safer driver on its own.
        </strong>{' '}
        Do not interact with your phone while driving. Set up and start the app
        before you move off, or use automatic trip detection so you never need to
        touch the phone during a trip. You remain fully responsible for operating
        your vehicle lawfully and safely, and for obeying all road and traffic
        rules, at all times. Nothing the app shows you overrides posted speed
        limits, road signs or your own judgement.
      </p>

      <h2>2. Eligibility and Accounts</h2>
      <p>
        You must be at least 16 years old and hold a valid driver's licence to
        use DriveSmooth. You need an account, and you are responsible for keeping
        your sign-in credentials secure and for everything that happens under
        your account. Provide accurate information when you sign up, and tell us
        promptly at <strong>{site.email}</strong> if you believe your account has
        been compromised.
      </p>
      <p>
        One person, one account. Your account is yours and is not to be shared,
        sold or transferred.
      </p>

      <h2>3. Trip Scores Are Estimates</h2>
      <p>
        Trip scores, driving events (hard braking, harsh acceleration, sharp
        turns, speeding) and fuel-efficiency figures are produced by heuristics
        running on your phone's sensors and GPS. They are estimates for your own
        general guidance only. Sensor noise, phone placement, GPS drift, road
        conditions and map data all affect them, and they may be wrong. Speed
        limits in particular come from third-party map data that can be missing,
        out of date or simply wrong for the road you were on.
      </p>
      <p>
        DriveSmooth data is <strong>not</strong> an official record of how you
        drove. It is not evidence, not a substitute for a telematics device, and
        not intended for insurance underwriting, employment decisions, legal
        proceedings or any other consequential use. We make no promise that it is
        accurate or complete.
      </p>

      <h2>4. Acceptable Use</h2>
      <ul>
        <li>
          Use DriveSmooth for your own personal, lawful purposes only.
        </li>
        <li>
          Do not falsify trips, manipulate scores, or otherwise game leaderboards,
          badges or challenges — including by simulating movement, spoofing your
          location, or running the app on a device that is not in the vehicle you
          are driving. We detect mock locations and may discard the trips they
          produce.
        </li>
        <li>
          Do not attempt to disrupt the service, probe or breach its security,
          access other people's data, or reverse engineer the app beyond what the
          law expressly permits.
        </li>
        <li>
          Do not use the app in a way that encourages unsafe or unlawful driving.
        </li>
      </ul>
      <p>
        Where trips appear to be falsified, we may discard them, reset affected
        scores or standings, or restrict the account.
      </p>

      <h2>5. Leaderboards and Challenges</h2>
      <p>
        DriveSmooth ranks drivers on leaderboards and runs timed challenges you
        can join. Taking part means your display name, profile photo and scores
        are visible to other users on those leaderboards. Some challenges are
        open to paying subscribers only, and some run only in particular
        countries.
      </p>
      <p>
        Challenges are for motivation, not prizes: unless we state otherwise in
        the challenge itself, completing one earns recognition inside the app and
        nothing more. We may add, change, shorten or withdraw a challenge, and we
        may correct or reset leaderboard standings and challenge progress where
        they were reached through falsified trips or a fault on our side.
      </p>

      <h2>6. Community Content</h2>
      <p>
        <strong>
          Community features — the feed, friends, posts and comments — are
          currently switched off and are not reachable in either app.
        </strong>{' '}
        Sharing a trip today renders a summary image on your device and passes it
        to your phone's own share sheet; where it goes from there is between you
        and the app you send it to.
      </p>
      <p>
        This section applies to content you posted while those features were
        available, and again if we bring them back. You keep ownership of what
        you create; you grant us only the limited licence needed to store it,
        sync it and display it to the audience you chose. You are responsible for
        what you post: nothing unlawful, abusive, harassing, hateful, deceptive,
        or infringing on someone else's rights, and no one else's personal
        information. Be aware that posts and trip images can reveal where you
        have been. We may remove content or restrict accounts that breach these
        terms.
      </p>

      <h2>7. Subscriptions, Trials and Ads</h2>
      <p>
        DriveSmooth is free to use with occasional ads. A premium subscription
        removes ads and unlocks additional features, and is sold and billed
        through <strong>Google Play</strong> on Android and the{' '}
        <strong>Apple App Store</strong> on iOS. Price, billing period, renewals,
        cancellations and refunds are governed by that store's terms and by
        whatever is shown to you at the moment of purchase. We never see or handle
        your payment details.
      </p>
      <p>
        Subscriptions renew automatically until cancelled. Manage or cancel yours
        in the Google Play subscriptions settings or in your Apple ID
        subscription settings — deleting the app on its own does not cancel a
        subscription.
      </p>
      <p>
        Separately from the stores, new accounts get a short free trial of the
        premium features starting at signup, currently 7 days. It costs nothing,
        requires no payment method, and ends by itself — there is nothing to
        cancel. The trial length may change for future signups. We may also grant
        an account complimentary access at our discretion, and may withdraw it.
      </p>
      <p>
        A subscription is tied to the store account that bought it. A
        subscription bought on one platform may not carry across to the other.
      </p>

      <h2>8. Your Data</h2>
      <p>
        Our handling of your personal information — including location, motion
        and trip data — is described in the DriveSmooth Privacy Policy, which
        forms part of these terms. Please read it.
      </p>
      <p>
        Note that <strong>trip history is kept for 30 days</strong>. Individual
        trips are permanently deleted once they are older than that, so the app
        is not a long-term record of your driving and should not be relied on as
        one. Your lifetime totals, badges, streaks and leaderboard standing are
        accumulated as you drive and are not affected. Share or screenshot any
        individual trip you want to keep a copy of.
      </p>

      <h2>9. Availability and Changes</h2>
      <p>
        We may add, change or discontinue features — as we have with the
        community features described in section 6 — and the service may be
        unavailable during maintenance or for reasons outside our control.
        DriveSmooth depends on your device's sensors, battery, network and
        operating-system permissions; trips can be missed or incomplete if any of
        those are restricted, and each mobile platform limits what an app may do
        in the background in ways we do not control. Where a change materially
        reduces functionality you rely on, we will make a reasonable effort to
        give notice.
      </p>

      <h2>10. Ending Your Account</h2>
      <p>
        You can stop using DriveSmooth at any time, and you can delete your
        account from inside either app under Profile → Settings. Deletion is
        scheduled 7 days ahead and you can cancel it from the same screen at any
        point before then; after that, your account and its data are permanently
        removed. Cancelling a subscription is separate and is done through Google
        Play or the App Store. We may suspend or terminate access if these terms
        are breached or if the law requires it.
      </p>

      <h2>11. Disclaimers</h2>
      <p>
        DriveSmooth is provided "as is" and "as available", without warranties of
        any kind to the extent permitted by law. We do not warrant that the app
        will be uninterrupted, error-free, or that trip detection, scores or
        notifications will be timely, accurate or complete.
      </p>

      <h2>12. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {site.name} is not liable for any
        indirect, incidental, special or consequential damages, or for loss of
        data, profits or revenue, arising from your use of DriveSmooth — and in
        particular is not liable for accidents, injuries, traffic penalties or
        vehicle damage. Responsibility for how you drive is yours alone. Nothing
        in these terms limits liability that cannot be limited by law.
      </p>

      <h2>13. Apple App Store — Additional Terms</h2>
      <p>
        The following applies to the iOS app obtained through the Apple App
        Store, and prevails over anything inconsistent elsewhere in these terms:
      </p>
      <ul>
        <li>
          These terms are between you and {site.name} only, not with Apple.
          Apple is not responsible for DriveSmooth or its content.
        </li>
        <li>
          We grant you a non-transferable licence to use DriveSmooth on any Apple
          device you own or control, as permitted by the App Store Terms of
          Service.
        </li>
        <li>
          Apple has no obligation to provide maintenance or support for
          DriveSmooth. Support questions go to <strong>{site.email}</strong>.
        </li>
        <li>
          If the app fails to conform to any applicable warranty, you may notify
          Apple and Apple will refund the purchase price, if any. To the maximum
          extent permitted by law, Apple has no other warranty obligation, and
          any other claims, losses, liabilities, damages, costs or expenses
          attributable to a failure to conform to a warranty are our
          responsibility.
        </li>
        <li>
          We, not Apple, are responsible for addressing any claim by you or a
          third party relating to DriveSmooth — including product liability
          claims, any claim that the app fails to conform to a legal or
          regulatory requirement, consumer protection claims, and claims that the
          app infringes someone's intellectual property rights.
        </li>
        <li>
          You confirm that you are not located in a country subject to a U.S.
          Government embargo or designated as a "terrorist supporting" country,
          and that you are not on any U.S. Government list of prohibited or
          restricted parties.
        </li>
        <li>
          Apple and its subsidiaries are third-party beneficiaries of these
          terms and may enforce them against you.
        </li>
      </ul>

      <h2>14. Changes to These Terms</h2>
      <p>
        We may update these terms as the app evolves. Material changes will be
        reflected on this page with a new "last updated" date, and where the
        change is significant we will bring it to your attention in the app.
        Continuing to use DriveSmooth after a change means you accept the updated
        terms.
      </p>

      <h2>15. Governing Law</h2>
      <p>
        These terms are governed by the laws of {site.legal.governingLaw},
        without regard to conflict-of-law rules, and the courts located there
        have jurisdiction over any dispute — subject to any mandatory consumer
        protections in your own country of residence.
      </p>

      <h2>16. Contact</h2>
      <p>
        <strong>{site.name}</strong>
        <br />
        <strong>{site.email}</strong>
      </p>
    </LegalPage>
  )
}
