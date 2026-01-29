export default function AccountDeletion() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-10">Account Deletion</h1>

          <section className="space-y-6">
            <p className="text-lg leading-relaxed">
              We're sorry to see you leave. If you've decided to permanently delete your UberBet account and all associated personal data, 
              we're here to help make the process as straightforward as possible.
            </p>

            <p className="leading-relaxed">
              To exercise your right to erasure (also known as the "right to be forgotten" under GDPR and applicable data protection laws), 
              please send us an email request. We'll verify your identity and process the deletion securely.
            </p>

            <div className="my-10 p-6 bg-muted/50 rounded-lg border border-border">
              <p className="font-semibold text-xl mb-4 text-center md:text-left">
                Send your deletion request to:
              </p>
              <p className="text-2xl font-bold text-primary text-center mb-6 break-all">
                <a 
                  href="mailto:support@uberbet.app?subject=Account%20Deletion%20Request" 
                  className="hover:underline"
                >
                  support@uberbet.app
                </a>
              </p>

              <p className="font-medium mb-3">Please include the following in your email:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>The email address you used to register with UberBet</li>
                <li>Your username (if different from your email)</li>
                <li>Any other identifying information that helps us locate your account quickly (e.g., last login approximate date)</li>
                <li>A clear statement such as: "I request permanent deletion of my UberBet account and all associated personal data."</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">What happens next?</h2>
              <ul className="list-disc pl-6 space-y-3 text-foreground/80">
                <li>We will confirm receipt of your request usually within a few business days.</li>
                <li>We may ask for additional verification (e.g., replying from your registered email) to protect your account security.</li>
                <li>Once verified, we will permanently delete your account and all related personal data from our systems.</li>
                <li>
                  We aim to complete the process <strong>within 30 days</strong> (as required under GDPR / data protection laws — in most cases much faster).
                </li>
                <li>
                  After deletion, your account, bets/history (if any), balance (if unused), profile, and all personal information will be <strong>permanently removed</strong> and <strong>cannot be recovered</strong>.
                </li>
              </ul>
            </div>

            <div className="space-y-4 mt-10">
              <h2 className="text-2xl font-semibold">Important notes</h2>
              <ul className="list-disc pl-6 space-y-3 text-foreground/80">
                <li>Deletion is irreversible. Make sure you really want to proceed and download/export any important information beforehand if needed.</li>
                <li>Some anonymized or aggregated data may remain for legal, statistical or security reasons (where permitted by law).</li>
                <li>If you have an open balance, pending transactions or active obligations, we may need to resolve those first — we'll inform you.</li>
              </ul>
            </div>

            <p className="leading-relaxed mt-12 text-center md:text-left">
              If you have any questions about this process or need help, just reply to the same email thread or contact us at{" "}
              <a href="mailto:support@uberbet.app" className="hover:underline">
                support@uberbet.app
              </a>.
            </p>

            <p className="text-center mt-12 pt-8 border-t">
              Thank you for being part of the UberBet community. We wish you the best.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
