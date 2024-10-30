
import Link from 'next/link'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
}

{/* TODO: Replace this with your app name */}
{/* TODO: Edit the phrase that suits your app privacy policy */}
export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto p-6 bg-background text-foreground max-w-3xl my-24">
      <h1 className="text-3xl font-bold mb-8 border-b pb-2">Privacy Policy</h1>

      <section className="mb-8">
        <p className="mb-4"><strong>Effective Date:</strong> October 20, 2024</p>
        <p className="mb-4"><strong>Last Updated:</strong> October 20, 2024</p>
        
        <p className="mb-4">
          Welcome to <strong>App Name</strong> (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;). This Privacy Policy explains how we collect, use, and share your personal information when you use our website, <strong>App Name</strong>.
        </p>
        <p className="mb-4">
          By accessing or using the Site, you agree to the terms of this <strong>Privacy Policy</strong>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">1. Information We Collect</h2>
        <p className="mb-4">We collect the following types of information:</p>

        <h3 className="text-xl font-medium mb-2">a. Personal Information You Provide</h3>
        <p className="mb-4">When you interact with our Site, you may provide us with personal information such as:</p>
        <ul className="list-disc list-inside mb-4 pl-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Contact information</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">b. Automatically Collected Information</h3>
        <p className="mb-4">We automatically collect certain information about your interactions with the Site through:</p>
        <ul className="list-disc list-inside mb-4 pl-4">
          <li>Cookies</li>
          <li>Web beacons</li>
          <li>Log files</li>
          <li>Tracking pixels</li>
        </ul>
        <p className="mb-4">This may include:</p>
        <ul className="list-disc list-inside mb-4 pl-4">
          <li>Your IP address</li>
          <li>Browser type</li>
          <li>Operating system</li>
          <li>Pages viewed</li>
          <li>Time spent on our Site</li>
          <li>Links clicked</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">2. Use of Information</h2>
        <p className="mb-4">We use the collected data for the following purposes:</p>
        <ul className="list-disc list-inside mb-4 pl-4">
          <li><strong>Improvement of our website</strong>: We use behavioral analytics to understand how users interact with our Site to improve its functionality and user experience.</li>
          <li><strong>Marketing and advertising</strong>: We may use information about your interactions to show relevant advertisements and promotions.</li>
          <li><strong>Fraud detection and security</strong>: We monitor activities on our Site to detect fraudulent behavior and improve security.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">3. Use of Microsoft Clarity and Microsoft Advertising</h2>
        <p className="mb-4">We use <strong>Microsoft Clarity</strong> and <strong>Microsoft Advertising</strong> to gather data on how users interact with our website. This includes:</p>
        <ul className="list-disc list-inside mb-4 pl-4">
          <li><strong>Behavioral metrics</strong>: Data on how users navigate our site.</li>
          <li><strong>Heatmaps</strong>: Visual representations of the areas of our site that receive the most interactions.</li>
          <li><strong>Session replays</strong>: Recordings of user sessions to better understand user experience and improve our services.</li>
        </ul>
        <p className="mb-4">
          This data is collected through first-party and third-party cookies and other tracking technologies. The data helps us enhance the functionality of our Site, improve marketing, detect fraudulent activity, and optimize performance.
        </p>
        <p className="mb-4">
          To learn more about how Microsoft collects and uses your data, please visit the{' '}
          <Link href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank" rel="noopener noreferrer" className="text-[#fcba28] hover:text-[#fcba28]/70 hover:underline">
            Microsoft Privacy Statement
          </Link>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">4. Sharing Your Information</h2>
        <p className="mb-4">We do not sell your personal information. However, we may share your information with third-party service providers, including:</p>
        <ul className="list-disc list-inside mb-4 pl-4">
          <li>Analytics and performance tools (e.g., Microsoft Clarity)</li>
          <li>Advertising platforms (e.g., Microsoft Advertising)</li>
          <li>Payment processors</li>
          <li>Fraud prevention services</li>
        </ul>
        <p className="mb-4">
          These third parties only access your information as needed to perform their tasks and are required to protect your information under applicable data protection laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">5. Your Data Rights</h2>
        <p className="mb-4">You have the following rights with respect to your personal information:</p>
        <ul className="list-disc list-inside mb-4 pl-4">
          <li><strong>Access</strong>: You can request a copy of the personal information we hold about you.</li>
          <li><strong>Correction</strong>: You can request correction of any inaccurate personal information.</li>
          <li><strong>Deletion</strong>: You can request deletion of your personal information.</li>
          <li><strong>Opt-out</strong>: You can opt-out of tracking technologies, such as cookies, by changing your browser settings.</li>
        </ul>
        <p className="mb-4">
          If you wish to exercise any of these rights, please <Link href="mailto:achris.alonzo30@gmail.com" className="text-[#fcba28] hover:text-[#fcba28]/70 hover:underline">
            contact us.
          </Link>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">6. Security</h2>
        <p className="mb-4">
          We take the security of your information seriously and use industry-standard measures to protect it. However, no online service is completely secure, and we cannot guarantee the security of your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">7. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this Privacy Policy regularly for any updates. The updated Privacy Policy will be effective immediately upon posting.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[#fcba28]">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or how we handle your data, please <Link href="mailto:achris.alonzo30@gmail.com" className="text-[#fcba28] hover:text-[#fcba28]/70 hover:text-underline">contact us.</Link>
        </p>
      </section>

    </div>
  )
}