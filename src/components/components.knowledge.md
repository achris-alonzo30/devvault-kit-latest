# Components Documentation

## Core Components

### MaxWidthWrapper
A utility component that provides consistent max-width and padding across pages.
```tsx
<MaxWidthWrapper>
  <YourContent />
</MaxWidthWrapper>
```

### UI Components
Located in `src/components/ui/`:
- `Button`: Customizable button with variants
- `Card`: Flexible card component with header, content, footer sections
- `Input`: Styled input field with consistent theming
- `Form`: Form components with validation support

## Animation Components

### CanvasCover
Interactive component that adds sparkle and beam animations on hover.
```tsx
<CanvasCover>
  <YourContent />
</CanvasCover>
```

### AnimatedHeading
Text animation component with highlight effect.
```tsx
<AnimatedHeading />
```

## Feature Components

### Bento Grid Components
Located in `src/features/landing-page/components/features/`:
- `TowerBento`: Tall feature showcase
- `SquareBento1`: Quick setup feature
- `SquareBento2`: Customization feature
- `RectangularBento`: Tech stack showcase

### Best Practices
- Use dynamic imports for heavy components
- Keep animations performant by using `useCallback` for handlers
- Follow the established color scheme using CSS variables
- Maintain consistent spacing using the MaxWidthWrapper

### Common Pitfalls
- Avoid nesting animations to prevent performance issues
- Don't forget to handle loading states for dynamic imports
- Ensure proper type definitions for component props
