import { z } from "zod";

export const githubAccessSchema = z.object({
    username: z.string().min(1, "Please enter your username"),
});

