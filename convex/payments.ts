import { v } from "convex/values";
import { PRODUCT_TYPE } from "./schema";
import { internalMutation } from "./_generated/server";

// You can customize it based on your needs
export const createPayment = internalMutation({
    args: {
        amount: v.number(),
        userId: v.id("users"),
        productType: PRODUCT_TYPE,
        stripePaymentStatus: v.string(),
        stripePaymentIntentId: v.string(),
    },
    handler: async (ctx, {
        amount,
        userId,
        productType,
        stripePaymentStatus,
        stripePaymentIntentId
    }) => {
        // TODO: If you decided to change this make sure to replace your schema
        await ctx.db.insert("payments", {
            amount,
            userId,
            productType,
            stripePaymentStatus,
            stripePaymentIntentId
        });
    }
})