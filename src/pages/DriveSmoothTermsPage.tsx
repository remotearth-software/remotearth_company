import { LegalPage } from '@/components/layout/LegalPage'
import { useSeo } from '@/hooks/useSeo'
import { site } from '@/data/site'

/**
 * App-specific terms for DriveSmooth. Linked from the app's Settings screen and
 * from the sign-up consent checkbox, so — like the privacy page — it is opened
 * inside a WebView with `?theme=…&embed=1` and carries no outbound links.
 */
export function DriveSmoothTermsPage() {
  useSeo(
    'DriveSmooth Terms & Conditions',
    'The terms that apply when you use the DriveSmooth driving app.',
  )

  return (
    <LegalPage
      title="DriveSmooth Terms & Conditions"
      lastUpdated="August 4, 2026"
      intro={`These terms are an agreement between you and ${site.name} covering your use of the DriveSmooth mobile app. By creating an account or using the app, you agree to them. If you do not agree, please do not use DriveSmooth.`}
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
        You must be at least 13 years old and hold a valid driver's licence to
        use DriveSmooth. You need an account, and you are responsible for keeping
        your sign-in credentials secure and for everything that happens under
        your account. Provide accurate information when you sign up, and tell us
        promptly at <strong>{site.email}</strong> if you believe your account has
        been compromised.
      </p>

      <h2>3. Trip Scores Are Estimates</h2>
      <p>
        Trip scores, driving events (hard braking, harsh acceleration, sharp
        turns, speeding) and fuel-efficiency figures are produced by heuristics
        running on your phone's sensors and GPS. They are estimates for your own
        general guidance only. Sensor noise, phone placement, GPS drift, road
        conditions and map data all affect them, and they may be wrong.
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
          badges or challenges — including by simulating movement or running the
          app on a device that is not in the vehicle you are driving.
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

      <h2>5. Community Content</h2>
      <p>
        DriveSmooth includes a social feed where you can share posts, comments
        and trip images. You keep ownership of what you create; you grant us only
        the limited licence needed to store it, sync it and display it to the
        audience you chose (public, or friends only).
      </p>
      <p>
        You are responsible for what you post. Do not post anything unlawful,
        abusive, harassing, hateful, deceptive, or infringing on someone else's
        rights, and do not share other people's personal information. Be aware
        that posts and trip images can reveal where you have been. We may remove
        content or restrict accounts that breach these terms.
      </p>

      <h2>6. Subscriptions, Trials and Ads</h2>
      <p>
        DriveSmooth is free to use with occasional ads. A premium subscription
        removes ads and unlocks additional features, and is sold and billed
        through Google Play. Price, billing period, free trials, renewals,
        cancellations and refunds are governed by Google Play's terms and by
        whatever is shown to you at the moment of purchase.
      </p>
      <p>
        Subscriptions renew automatically until cancelled. Manage or cancel yours
        in the Google Play subscriptions settings — deleting the app on its own
        does not cancel a subscription. We never see or handle your payment
        details.
      </p>

      <h2>7. Your Data</h2>
      <p>
        Our handling of your personal information — including location, motion
        and trip data — is described in the DriveSmooth Privacy Policy, which
        forms part of these terms. Please read it.
      </p>

      <h2>8. Availability and Changes</h2>
      <p>
        We may add, change or discontinue features, and the service may be
        unavailable during maintenance or for reasons outside our control.
        DriveSmooth depends on your device's sensors, battery, network and
        operating-system permissions; trips can be missed or incomplete if any of
        those are restricted. Where a change materially reduces functionality you
        rely on, we will make a reasonable effort to give notice.
      </p>

      <h2>9. Ending Your Account</h2>
      <p>
        You can stop using DriveSmooth at any time, and you can delete your
        account from inside the app under Profile → Settings. Deletion is
        scheduled 7 days ahead and you can cancel it from the same screen at any
        point before then; after that, your account and its data are permanently
        removed. Cancelling a subscription is separate and is done through Google
        Play. We may suspend or terminate access if these terms are breached or
        if the law requires it.
      </p>

      <h2>10. Disclaimers</h2>
      <p>
        DriveSmooth is provided "as is" and "as available", without warranties of
        any kind to the extent permitted by law. We do not warrant that the app
        will be uninterrupted, error-free, or that trip detection, scores or
        notifications will be timely, accurate or complete.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {site.name} is not liable for any
        indirect, incidental, special or consequential damages, or for loss of
        data, profits or revenue, arising from your use of DriveSmooth — and in
        particular is not liable for accidents, injuries, traffic penalties or
        vehicle damage. Responsibility for how you drive is yours alone. Nothing
        in these terms limits liability that cannot be limited by law.
      </p>

      <h2>12. Changes to These Terms</h2>
      <p>
        We may update these terms as the app evolves. Material changes will be
        reflected on this page with a new "last updated" date, and where the
        change is significant we will bring it to your attention in the app.
        Continuing to use DriveSmooth after a change means you accept the updated
        terms.
      </p>

      <h2>13. Governing Law</h2>
      <p>
        These terms are governed by the laws of {site.legal.governingLaw},
        without regard to conflict-of-law rules, and the courts located there
        have jurisdiction over any dispute — subject to any mandatory consumer
        protections in your own country of residence.
      </p>

      <h2>14. Contact</h2>
      <p>
        <strong>{site.name}</strong>
        <br />
        <strong>{site.email}</strong>
      </p>
    </LegalPage>
  )
}
