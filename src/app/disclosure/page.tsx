import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosures",
}
// TOOD: This is a mandatory that Microsoft Clarity and Microsoft Advertising agree on
export default function Disclosures() {
    return (
        <div className="container mx-auto p-6 bg-background text-foreground max-w-3xl my-24">
            <h1 className="text-3xl font-bold mb-8 border-b pb-2">Disclosures</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">Website Data Usage Disclosure</h2>
                <p className="mb-4">
                    Our website uses <strong>Microsoft Clarity</strong> to analyze how visitors interact with
                    our site. This helps us improve our products, services, and advertising strategies.
                    By using this site, you agree that we and Microsoft can collect and use this data.
                </p>
                <p className="mb-4">
                    For more information on how we handle your data, please review our{' '}
                    <Link href="/privacy-policy" className="text-[#fcba28] hover:text-[#fcba28]/70 hover:underline">
                        Privacy Policy
                    </Link>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">Privacy Policy on Data Collection</h2>
                <p className="mb-4">
                    We partner with <strong>Microsoft Clarity</strong> and <strong>Microsoft Advertising</strong>
                    to gather insights about your usage of our website. This includes:
                </p>
                <ul className="list-disc list-inside mb-4 pl-4">
                    <li>Behavioral metrics</li>
                    <li>Heatmaps</li>
                    <li>Session replays</li>
                </ul>
                <p className="mb-4">
                    These tools allow us to optimize our website, enhance security, and improve marketing
                    strategies. Data is collected using first and third-party cookies and other tracking
                    technologies.
                </p>
                <p className="mb-4">
                    Additionally, we use the information to improve site performance, detect fraudulent
                    activity, and support advertising efforts. To learn more about how Microsoft handles your
                    data, please visit the{' '}
                    <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:underline"
                        href="https://privacy.microsoft.com/en-us/privacystatement"
                    >
                        Microsoft Privacy Statement
                    </Link>.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-medium mb-2">How can I contact you about data collection practices?</h3>
                        <p>
                            If you have any questions regarding our data collection practices, please feel free to{" "}
                            <Link href="mailto:achris.alonzo30@gmail.com" className="text-[#fcba28] hover:text-[#fcba28]/70 hover:underline">
                                contact us.
                            </Link>
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-2">Can I opt out of data collection?</h3>
                        <p>
                            While we strive to provide the best user experience, you can opt out of certain data collection
                            practices. Please refer to our Privacy Policy for more information on managing your data preferences.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-2">How long do you retain my data?</h3>
                        <p>
                            We retain your data for as long as necessary to fulfill the purposes outlined in our Privacy Policy.
                            The specific retention period may vary depending on the type of data and legal requirements.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}