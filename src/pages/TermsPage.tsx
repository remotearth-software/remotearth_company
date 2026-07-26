import { LegalPage } from '@/components/layout/LegalPage'
import { useSeo } from '@/hooks/useSeo'
import { site } from '@/data/site'

export function TermsPage() {
  useSeo(
    'Terms of Service',
    `The terms that apply when you use ${site.name} websites and apps.`,
  )

  return (
    <LegalPage
      title="Terms of Service"
      intro={`These terms apply to ${site.domain} and to the apps published by ${site.name}. By using them, you agree to what follows.`}
    >
      <h2>1. Using our services</h2>
      <p>
        You may use our website and apps for personal, lawful purposes. You agree
        not to misuse them — including attempting to disrupt the service, reverse
        engineer it beyond what the law allows, or access other people's data.
      </p>

      <h2>2. Accounts</h2>
      <p>
        Some apps require an account. You are responsible for keeping your
        credentials secure and for activity that happens under your account.
        Tell us promptly at <a href={`mailto:${site.email}`}>{site.email}</a> if
        you believe your account has been compromised.
      </p>

      <h2>3. Purchases and subscriptions</h2>
      <p>
        Paid features, if offered, are billed through the app store you
        downloaded the app from. Pricing, renewals, refunds and cancellations
        follow that store's policies as well as any terms shown at the time of
        purchase.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        Our apps, website, branding and content are owned by {site.name} and
        protected by intellectual property laws. Content you create inside an app
        remains yours; you grant us only the limited licence needed to store,
        sync and display it back to you.
      </p>

      <h2>5. Availability and changes</h2>
      <p>
        We may add, change or discontinue features, and we may suspend a service
        for maintenance. Where a change materially reduces functionality you rely
        on, we will make a reasonable effort to give notice.
      </p>

      <h2>6. Disclaimers</h2>
      <p>
        Our services are provided "as is" and "as available", without warranties
        of any kind to the extent permitted by law. Information produced by our
        apps — including driving scores, budgets and other insights — is provided
        for general guidance only. It is not financial, legal or safety advice,
        and it does not replace your own judgement or applicable road and traffic
        rules.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {site.name} is not liable for
        indirect, incidental or consequential damages, or for loss of data,
        profits or revenue arising from your use of our services.
      </p>

      <h2>8. Termination</h2>
      <p>
        You may stop using our services at any time and delete your account where
        one exists. We may suspend or terminate access if these terms are
        breached or if required by law.
      </p>

      <h2>9. Governing law</h2>
      <p>
        These terms are governed by the laws of {site.legal.governingLaw},
        without regard to conflict-of-law rules, and the courts located there
        have jurisdiction over any dispute — subject to any mandatory consumer
        protections in your own country of residence.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these terms:{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  )
}
