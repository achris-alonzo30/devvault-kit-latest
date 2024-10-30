import { Resend } from "resend";
import { v } from "convex/values";
import { internalAction } from "./_generated/server";
import { AfterPurchasedEmail } from '../src/components/email-templates/AfterPurchasedEmail';
import { WaitlistWelcomeEmail } from "../src/components/email-templates/WaitlistWelcomeEmail";

// TODO: Uncomment this after you have grab your Resend API key

// const resend = new Resend(process.env.RESEND_API!);
// const url = process.env.BASE_URL!


// export const sendEmail = internalAction({
//     args: { email: v.string() },
//     handler: async (_, { email }) => {

//         // TODO: This email template will be used when a user subscribes to your waitlist
//         const { data, error } = await resend.emails.send({
//             from: 'DevVault Crew <support@devvault.dev>', // [Company Name] <name@domain>
//             to: [email],
//             subject: 'Welcome to the DevVault Crew! 🚀',
//             react: <WaitlistWelcomeEmail url={url} />,  // Use the rendered HTML content
//         });

//         if (error) {
//             throw new Error(error.message);
//         }

//         return data;
//     }
// });

// export const sendEmailAfterPurchase = internalAction({
//     args: {
//         email: v.string(),
//         stripeId: v.string(),
//         totalPrice: v.number(),
//         dateOfPurchased: v.string(),
//         kit: v.union(v.literal("Starter Kit"), v.literal("Premium Kit"))
//     },
//     handler: async (_, { 
//         kit, 
//         email,
//         stripeId,
//         totalPrice,
//         dateOfPurchased
//     }) => {

//         // TODO: This email template will be used when a user purchased your product
//         const { data, error } = await resend.emails.send({
//             from: 'DevVault Crew <receipt@devvault.dev>',
//             to: [email],
//             subject: 'Thank you for your purchase! 🚀',
//             react: <AfterPurchasedEmail 
//                 kit={kit}
//                 email={email}
//                 stripeId={stripeId}
//                 totalPrice={totalPrice}
//                 dateOfPurchased={dateOfPurchased}
//             />,  
//         });

//         if (error) {
//             throw new Error(error.message);
//         }

//         return data;
//     }
// })