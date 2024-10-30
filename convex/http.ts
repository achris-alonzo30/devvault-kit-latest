import { auth } from "./auth";
import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

const http = httpRouter();

auth.addHttpRoutes(http);

// Route for Stripe webhook
http.route({
    path: "/stripe",
    method: "POST",
    handler: httpAction(async (ctx, request) => {
        const signature = request.headers.get("stripe-signature") as string;
        const res = await ctx.runAction(internal.stripe.fulfill, {
            signature, 
            payload: await request.text()
        });
        if (res.success) {
            return new Response(null, {
                status: 200,
            })
        } else {
            return new Response("Webhook Error", {
                status: 400
            })
        }
    })
})

export default http;
