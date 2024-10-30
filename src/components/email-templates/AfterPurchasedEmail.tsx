import {
    Hr,
    Img,
    Row,
    Head,
    Body,
    Html,
    Link,
    Text,
    Column,
    Preview,
    Section,
    Tailwind,
    Container,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.HOSTING_URL
    ? process.env.HOSTING_URL
    : `http://localhost:3000`;

interface AfterPurchasedEmailProps {
    email: string;
    stripeId: string;
    totalPrice: number;
    dateOfPurchased: string;
    kit: "Starter Kit" | "Premium Kit";
}

export const AfterPurchasedEmail = ({
    kit,
    email,
    stripeId,
    totalPrice,
    dateOfPurchased,
}: AfterPurchasedEmailProps) => {
    const imgSrc = kit === "Starter Kit" ? `${baseUrl}/starter-kit-logo.png` : `${baseUrl}/premium-kit-logo.png`;
    const notionUrl = process.env.NOTION_TEMPLATE_URL;
    return (
        <Html>
            <Head />
            <Preview>Your {kit} is Ready to Clone 🚀</Preview>
            <Tailwind>
                <Body className="font-sans bg-[#272727] text-[#f9f4da] p-8">
                    <Container className="mx-auto py-5 pb-12 w-[660px] max-w-full">
                        <Section>
                            <Row>
                                <Column align="left">
                                    <Img
                                        src={`${baseUrl}/logo.png`}
                                        width="42"
                                        height="42"
                                        alt="Apple Logo"
                                    />
                                </Column>
                            </Row>
                        </Section>

                        <Section className="mb-4">
                            <Text className="text-2xl font-bold mb-4">Hey there, friend! 👋</Text>
                            <Text className="mb-4">
                                It&apos;s Chris here, the creator behind <Link target="_blank" className="text-[#fcba28] font-bold underline m-0 p-0 leading-normal" href="https://devvault.dev">DevVault</Link>, and I just wanted to personally say thank you for purchasing my {kit}! Seriously, you&apos;re awesome. 🙌
                            </Text>
                        </Section>
                        { }
                        <Section className="mb-4">
                            <Text className="mb-4">
                                If you have any questions or requests, please reach out to me. Here&apos;s my personal email: <Link href="mailto:achris.alonzo30@gmail.com">achris.alonzo30@gmail.com</Link> 📧
                            </Text>
                        </Section>

                        <Section className="border-collapse bg-[#171717] rounded-md text-xs">
                            <Row className="h-[46px]">
                                <Column colSpan={2}>
                                    <Section>
                                        <Row>
                                            <Column className="pl-5 border-solid border-[#f9f4da]/50 border-r border-b h-11">
                                                <Text className="text-[#f9f4da] text-[10px] m-0 p-0 leading-normal">EMAIL</Text>
                                                <Link className="text-[#fcba28] underline text-xs m-0 p-0 leading-normal">
                                                    {email}
                                                </Link>
                                            </Column>
                                        </Row>

                                        <Row>
                                            <Column className="pl-5 border-solid border-[#f9f4da]/50 border-r border-b h-11">
                                                <Text className="text-[#f9f4da] text-[10px] m-0 p-0 leading-normal">DATE OF PURCHASED</Text>
                                                <Text className="text-xs m-0 p-0 leading-normal">{dateOfPurchased}</Text>
                                            </Column>
                                        </Row>

                                        <Row>
                                            <Column className="pl-5 border-solid border-[#f9f4da]/50 border-r border-b h-11">
                                                <Text className="text-[#f9f4da] text-[10px] m-0 p-0 leading-normal">ORDER ID</Text>
                                                <Link className="text-[#fcba28] underline text-xs m-0 p-0 leading-normal">
                                                    {stripeId}
                                                </Link>
                                            </Column>
                                        </Row>
                                    </Section>
                                </Column>
                            </Row>
                        </Section>

                        <Section className="border-collapse bg-[#171717] rounded-md text-xs mt-8 mb-4 h-6">
                            <Text className="bg-[#f9f4da] text-[#272727] pl-2.5 text-sm font-bold m-0">DevVault {kit}</Text>
                        </Section>

                        <Section>
                            <Row>
                                <Column className="w-16">
                                    <Img
                                        src={imgSrc}
                                        width="72"
                                        height="72"
                                        alt="Product Logo"
                                        className="ml-5 rounded-[14px] border border-[#f9f4da]/50"
                                    />
                                </Column>
                                <Column className="pl-[22px] max-w-[400px]">
                                    <Text className="text-sm font-semibold m-0 p-0 leading-normal mb-2">{kit}</Text>
                                    {kit === "Starter Kit" ? (
                                        <Text className="text-xs text-[#f9f4da]/80 m-0 p-0 leading-relaxed">
                                            Complete Next.js boilerplate with SEO, email with Resend, Stripe, ConvexDB, and Authentication Setup.
                                            Includes Basic Components and is exclusive to the DevVault Template.
                                        </Text>
                                    ) : (
                                        <Text className="text-xs text-[#f9f4da]/80 m-0 p-0 leading-relaxed">
                                            EVERYTHING IN STARTER KIT, PLUS: Must-Have Dev Resources (Notion template),
                                            Premium Components, Framer Motion Animations, All Future Templates,
                                            Premium Documentation, Future Updates, and Priority Support.
                                        </Text>
                                    )}
                                </Column>
                                <Column className="table-cell pl-4 w-[100px] align-top" align="right">
                                    <Text className="text-sm font-semibold m-0 text-[#f9f4da]">${totalPrice}</Text>
                                </Column>
                            </Row>
                        </Section>

                        <Hr className="mt-8" />

                        <Section align="right">
                            <Row>
                                <Column className="table-cell" align="right">
                                    <Text className="m-0 text-[#f9f4da] text-[10px] font-semibold pr-8 text-right">TOTAL</Text>
                                </Column>
                                <Column className="h-12 border-l border-[#f9f4da]/50"></Column>
                                <Column className="table-cell w-[90px]">
                                    <Text className="mx-0 mr-5 text-base font-semibold whitespace-nowrap text-right text-[#f9f4da]">${totalPrice}</Text>
                                </Column>
                            </Row>
                        </Section>

                        <Hr className="mb-[30px]" />

                        {kit === "Premium Kit" && <Section className="mt-4">
                            <Text className="mb-4 text-lg">
                                🎁 Now, as promised, you&apos;ll also have access to my favorite resources that I&apos;ve compiled in <Link target="_blank" className="text-[#fcba28] underline text-lg m-0 p-0 leading-normal" href={notionUrl}> Notion Template.</Link>
                            </Text>
                        </Section>}

                        <Section>
                            <Row>
                                <Column align="center" className="block mt-4">
                                    <Text className="text-xl font-medium text-[#f9f4da]">Happy coding! I can&apos;t wait to see what you&apos;ll build 🥳</Text>
                                </Column>
                            </Row>
                        </Section>

                        <Hr className="my-16" />

                        <Section>
                            <Row>
                                <Column align="center" className="block mt-4">
                                    <Img
                                        src={`${baseUrl}/logo.png`}
                                        width="40"
                                        height="40"
                                        alt="DevVault Logo"
                                    />
                                </Column>
                            </Row>
                        </Section>

                        <Text className="mt-2 text-center text-xs text-[#f9f4da]/50">
                            <Link href="https://www.devvault.dev/" className="text-[#fcba28] underline">
                                Home
                            </Link>{" "}
                            •{" "}
                            <Link href="https://www.devvault.dev/docs" className="text-[#fcba28] underline">
                                Docs{" "}
                            </Link>
                        </Text>

                        <Text className="mt-6 text-center text-xs text-[#f9f4da]/80">
                            © DevVault 2024<br />{" "}
                            All Rights Reserved
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
};


