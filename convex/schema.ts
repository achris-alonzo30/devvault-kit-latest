import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";

export const PRODUCT_TYPE = v.union(v.literal("Starter Kit"), v.literal("Premium Kit"));

const schema = defineSchema({
  ...authTables,
  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    isAnonymous: v.optional(v.boolean()),
    selectedTemplate: v.optional(v.string()),
    hasPurchasedPremium: v.optional(v.boolean()),  
    hasPurchasedStarter: v.optional(v.boolean()),
    emailVerificationTime: v.optional(v.number()),
    phoneVerificationTime: v.optional(v.number()),
  }).index("email", ["email"]),

  payments: defineTable({
    amount: v.number(),
    userId: v.id("users"),
    productType: PRODUCT_TYPE,
    stripePaymentStatus: v.string(), 
    stripePaymentIntentId: v.string(),  
  }).index("userId", ["userId"]),

  subscriptions: defineTable({
    email: v.string()
  })
});



export default schema;