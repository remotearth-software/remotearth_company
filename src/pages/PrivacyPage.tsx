import { LegalPage } from '@/components/layout/LegalPage'
import { useSeo } from '@/hooks/useSeo'
import { site } from '@/data/site'

export function PrivacyPage() {
  useSeo(
    'Privacy Policy',
    `How ${site.name} handles personal information across its website and apps.`,
  )

  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains what information ${site.name} collects, why we collect it, and the choices you have. It covers ${site.domain} and the apps we publish.`}
    >
      <h2>1. Who we are</h2>
      <p>
        {site.name} ("we", "us") is an independent software studio that develops
        and publishes mobile and web applications. You can reach us at{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a> with any privacy
        question or request.
      </p>

      <h2>2. Information we collect</h2>
      <ul>
        <li>
          <strong>Information you give us.</strong> If you email us or use a
          contact form, we receive your name, email address and whatever you
          write to us.
        </li>
        <li>
          <strong>Account information.</strong> Apps that support accounts store
          the details needed to sign you in, such as an email address.
        </li>
        <li>
          <strong>App and device data.</strong> Apps may record basic technical
          information — device model, operating system version, app version and
          crash diagnostics — to fix bugs and keep the app working.
        </li>
        <li>
          <strong>Feature data.</strong> Some features need specific data to
          function. For example, a driving app needs trip and motion data while
          a trip is being recorded, and a budgeting app stores the expenses you
          enter.
        </li>
      </ul>

      <h2>3. How we use information</h2>
      <ul>
        <li>To provide, operate and improve our apps and this website.</li>
        <li>To respond to support requests and other messages you send us.</li>
        <li>To diagnose crashes, prevent abuse and keep our services secure.</li>
        <li>To meet legal obligations that apply to us.</li>
      </ul>
      <p>
        We do not sell your personal information, and we do not share it with
        advertisers for cross-app tracking.
      </p>

      <h2>4. Permissions our apps request</h2>
      <p>
        Apps only request the permissions their features need, and each one is
        explained in the app before it is requested. Where a permission is
        optional, declining it disables the related feature but leaves the rest
        of the app usable. You can change or revoke permissions at any time in
        your device settings.
      </p>

      <h2>5. Data storage and retention</h2>
      <p>
        Where an app can work entirely on your device, we keep the data on your
        device. When data is synced to a server, it is stored with reputable
        infrastructure providers and protected in transit with encryption. We
        keep personal information only as long as needed for the purpose it was
        collected, or as long as the law requires.
      </p>

      <h2>6. Service providers</h2>
      <p>
        We use a small number of third-party services — for example hosting,
        crash reporting and email delivery. These providers process data only on
        our instructions and only to deliver their service to us.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct,
        export or delete your personal information, and to withdraw consent for
        optional processing. Email{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we will action
        verified requests within the timeframe required by applicable law.
      </p>

      <h2>8. Children</h2>
      <p>
        Our apps are not directed at children under 13, and we do not knowingly
        collect their personal information. If you believe a child has provided
        us with personal data, contact us and we will delete it.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy as our apps evolve. Material changes will be
        announced in the app or on this page, and the "last updated" date above
        will change.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions, concerns or requests:{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  )
}
