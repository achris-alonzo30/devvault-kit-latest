# Features Folder

This folder is dedicated to organizing feature-specific code, including custom API hooks connected to Convex backend functions and form schemas.

## Structure

features/
├── api/
│ └── customHookFunctionName/
│ ├── useCustomHook1.ts
│ └── useCustomHook2.ts
├── schema/
│ ├── schemaName.schema.ts
│ └── schemaName.schema.ts


## Custom API Hooks

Custom API hooks are stored in the `api/hooks` directory. These hooks connect to Convex backend functions and provide a convenient way to interact with your backend from your React components.

### Creating a Custom API Hook

1. Create a new file in the `api/hooks` directory with a name like `useCustomHook.ts`.
2. Import the necessary Convex functions and types.
3. Define your custom hook, utilizing Convex's `useQuery` or `useMutation` as needed.

Example creating customHooks for `useQuery` is very simple:
```
import { useQuery } from "convex/react"
import { api } from "../../../../convex/_generated/api"

// Replace the custom hook name
export const useCustomHook = () => {
    // Replace the var, fileName, functionName
    const var = useQuery(api.fileName.functionName);
    const isLoading = var === undefined;

    return { var, isLoading}
}
```

Example creating customHooks for `useMutation` is also easy:
```
I know there's a lot of code there but all you have to change is this part
// Replace inside the object, just add the arguments you add in your convex function in here
type RequestType = { email: string };

// Replace the var, fileName, functionName
const var = useMutation(api.fileName.functionName);

// If you hover the var, you will see the things you'll put in here
type ResponseType = {
    message: string,
    id: Id<"subscriptions">
} | null;

```

## Form Schemas

Form schemas are stored in the `schema` directory. These schemas define the structure and validation rules for your forms, typically using libraries like Zod or Yup.

### Creating a Form Schema

1. Create a new file in the `schema` directory with a name like `schemaName.schema.ts`.
2. Import the schema library of your choice (e.g., Zod).
3. Define your schema with the appropriate fields and validation rules.


