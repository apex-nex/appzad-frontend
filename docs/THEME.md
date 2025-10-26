# Color Theme System

This document outlines the centralized color theme system implemented in the portfolio.

## Color Palette

### Primary Colors (Brand Blue)
- `primary-50` to `primary-950` - Main brand color used for buttons, links, and key UI elements
- Primary use: Call-to-action buttons, active states, brand elements

### Secondary Colors (Neutral Gray)
- `secondary-50` to `secondary-950` - Neutral colors for text, borders, and backgrounds
- Primary use: Text content, subtle borders, muted backgrounds

### Accent Colors (Light Blue)
- `accent-50` to `accent-950` - Complementary accent color
- Primary use: Highlights, secondary buttons, decorative elements

### Semantic Colors

#### Success (Green)
- `success-50` to `success-950` - Success states and positive actions
- Primary use: Success messages, completed states, positive indicators

#### Warning (Amber)
- `warning-50` to `warning-950` - Warning states and cautions
- Primary use: Warning messages, intermediate skill levels

#### Error (Red)
- `error-50` to `error-950` - Error states and destructive actions
- Primary use: Error messages, delete buttons, form validation errors

## Usage Guidelines

### Backgrounds
- `secondary-50` - Main page background
- `white` - Card and component backgrounds
- Gradient backgrounds using primary and accent colors for visual interest

### Text Colors
- `secondary-900` - Primary text (headings, important content)
- `secondary-600` - Secondary text (descriptions, labels)
- `secondary-500` - Muted text (meta information, captions)

### Interactive Elements
- **Primary Button**: `bg-primary-600` with `hover:bg-primary-700`
- **Secondary Button**: `border-secondary-300` with `hover:bg-secondary-50`
- **Links**: `text-primary-600` with `hover:text-primary-700`

### Shadows
- `shadow-soft` - Subtle shadow for cards
- `shadow-medium` - Enhanced shadow on hover
- `shadow-strong` - Pronounced shadow for overlays

## Components Updated

1. **Layout** - Header, footer, navigation with consistent colors
2. **Button** - All variants using theme colors
3. **Card** - Background, borders, and text colors
4. **Homepage** - Hero section, feature cards, gradients
5. **About Page** - Skill badges, experience timeline
6. **Projects Page** - Project cards, technology badges

## Benefits

1. **Consistency** - All components use the same color system
2. **Maintainability** - Easy to update colors globally
3. **Accessibility** - Proper contrast ratios maintained
4. **Scalability** - Easy to add new components with consistent styling
5. **Professional Look** - Cohesive visual design throughout the application