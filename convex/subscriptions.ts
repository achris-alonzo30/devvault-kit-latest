import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { internal } from "./_generated/api";

// TODO: Uncomment this when you have activated your Resend account and grab your API key

// // This is for susbscribing your users to waitlist or can be used for newsletter too
// export const subscribe = mutation({
//     args: { email: v.string() },
//     handler: async (ctx, { email }) => {
//         if (!email) {
//             throw new Error("Please enter an email");
//         };

//         if (!email.includes("@")) {
//             throw new Error("Invalid email");
//         }

//         // Collect all emails
//         const emails = await ctx.db.query("subscriptions").collect();

//         // Check if email entered is already existed
//         const existingEmail = emails.find((e) => e.email === email)
        
//         // Return the existing email without duplicating the exisitng email
//         if (existingEmail) {
//             return {
//                 message: "Already subscribed",
//                 id: existingEmail._id
//             }
//         }

//         const id = await ctx.db.insert("subscriptions", { email });
//         if (id) {
//             await ctx.scheduler.runAfter(5, internal.emails.sendEmail, {
//                 email
//             });
//         }


//         return {
//             message: "Subscribed successfully",
//             id: id
//         };
//     }
// })