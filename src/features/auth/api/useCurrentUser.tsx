import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"

// This function is to get the current login user
export const useCurrentUser = () => {
    const user = useQuery(api.users.currentUser, {});
    const isLoading = user === undefined;

    return { user, isLoading}
}