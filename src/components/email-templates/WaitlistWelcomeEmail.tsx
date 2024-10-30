import {
    Hr,
    Text,
    Link,
    Html,
    Head,
    Body,
    Section,
    Preview,
    Tailwind,
    Container,
} from "@react-email/components";

// TODO: Use this email template if you're doing a waitlist for your launch

export function WaitlistWelcomeEmail({ url }: { url: string }) {
    return (
        <Html>
            <Head />
            <Preview>Subscription Welcome Email</Preview>
            <Tailwind>
                <Body className="bg-[#272727] my-auto mx-auto font-sans text-[#f9f4da]">
                    <Container className="max-w-2xl mx-auto p-8">
                        <Section className="mb-4">
                            <Text className="text-2xl font-bold mb-4">Hey there, friend! 👋</Text>
                            <Text className="mb-4">
                                It&apos;s Chris here, the creator behind DevVault, and I just wanted to drop in with a huge thank you for joining the waitlist! Seriously, you&apos;re awesome. 🙌
                            </Text>
                        </Section>

                        <Section className="mb-4">
                            <Text className="mb-4">
                                Now, as promised, if you&apos;re one of the top 10 people to sign up, I&apos;ve got something special for you your very own landing page template to kickstart your journey! 🎁 I&apos;ll be sending it over soon, so keep an eye on your inbox.
                            </Text>
                        </Section>

                        <Section className="mb-4">
                            <Text className="mb-4">
                                This is just the beginning of our journey together. I&apos;m thrilled to have you by my side as I continue building the main application. We&apos;ll be chatting more soon, but for now, feel free to follow me up on <Link href="https://www.linkedin.com/in/lonzochris">LinkedIn</Link> or <Link href="https://www.x.com/0dev_vault">Twitter</Link>. If you have any questions or just want to say hi! I&apos;m all ears.
                            </Text>
                        </Section>

                        <Section className="mb-4">
                            <Text className="mb-4">
                                Thanks again for being one of the early supporters. This is the start of something great, and I couldn&apos;t be more excited to share the road ahead with you.
                            </Text>
                        </Section>

                        <Section className="mb-8">
                            <Text className="mb-4">Until then, happy coding! 💻✨</Text>
                        </Section>

                        <Hr className="border-[#f9f4da] my-8" />

                        <Section>
                            <Text className="mb-4">
                                Talk soon,<br />
                                Chris (Your DevVault sidekick) 🚀
                            </Text>
                        </Section>

                        <Text className="text-center">
                            Copyright © 2024 DevVault. <br />{" "}
                            <Link href={url}>All rights reserved</Link>
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
