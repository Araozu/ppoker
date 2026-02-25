# Agent Instructions for ppoker

This document provides essential guidelines and constraints for AI agents working on the **ppoker** project. Adhere to these principles to ensure consistency, quality, and alignment with the project's vision.

## 🛠 Tech Stack

- **Framework**: Svelte 5 with SvelteKit.
- **State Management**: Always use **Runes** (`$state`, `$derived`, `$effect`, etc.) for reactivity. Avoid old Svelte 4 stores or reactive declarations (`$:`) unless strictly necessary for legacy compatibility.
- **Language**: TypeScript.
- **Styling**: Tailwind CSS 4.
- **UI Components**: [shadcn-svelte](https://shadcn-svelte.com/) (Bits UI).

## 🎨 Design Philosophy: Apple 2013 Skeuomorphism

The project follows a **"Late Skeuomorphic"** aesthetic, inspired by iOS 6 and OS X Mavericks (2012-2013). This means UI elements should feel tactile, physical, and premium.

### Key Visual Principles:
- **Gloss & Gradients**: Use subtle (and sometimes bold) linear gradients to simulate light hitting a surface. Top-down lighting is standard.
- **Inner Shadows**: Use `inner-shadow` effects to give depth to buttons and inputs, making them feel recessed or raised.
- **Linen & Textures**: Backgrounds should often use high-quality textures (like the classic iOS linen or brushed aluminum) rather than flat colors.
- **Glassmorphism (v1)**: High-gloss headers and toolbars with sharp reflections.
- **Realistic Shadows**: Use multi-layered or soft shadows to create a clear hierarchy and sense of elevation.
- **Standard Apple Fonts**: Prefer "San Francisco" (or Helvetica/Arial as fallback) with tight letter spacing.

### Pre-defined Utilities
In `src/routes/layout.css`, use the following utilities for consistent skeuomorphism:
- `.skuo-button`: Basic glossy button effect.
- `.bg-linen`: Pure CSS iOS-style linen texture.
- `.bg-glass-glossy`: Glass effect with reflection.
- `var(--shadow-skuo-raised)` / `var(--shadow-skuo-pressed)`: For custom elevation changes.

## 🧱 Component & Styling Rules

### 1. Always use shadcn-svelte
- When adding new UI elements, check if a shadcn component exists first.
- If you need a new component, install it via `pnpx shadcn-svelte@latest add <component-name> -y`.
- **Constraint**: Style shadcn components with skeuomorphic overrides. After installing a shadcn component, alter its styles to use skeumorphism.

### 2. Don't Hardcode Tailwind Styles
- **Use CSS Variables**: Prefer using the standard shadcn/tailwind variables (e.g., `var(--background)`, `var(--primary)`, `var(--radius)`).
- **Aesthetic Overrides**: Do not use `bg-blue-500` directly. Use the theme colors and overlay gradients/shadows to achieve the skeuomorphic look.
- **Consistency**: Ensure all components respect the project's color palette defined in the CSS variables.

### 3. Skeuomorphic Implementation Details
- **Buttons**: Should have a `border-top` that is slightly lighter than the background and a `border-bottom` that is slightly darker.
- **Inputs**: Use `var(--shadow-skuo-pressed)` to make them feel recessed.
- **Containers**: Use rounded corners (standard Apple radius) and soft borders.

## 🚀 Development Workflow

1. **Plan before Code**: Outline the component structure and how it fits into the skeuomorphic grid.
2. **Type Safety**: Ensure all props and data structures are properly typed.
3. **Runes First**: When implementing logic, use runes for all stateful transitions.
4. **Validation**: Always check that the final output looks "Premium" and "Tactile" as per the design philosophy.

---

*Remember: We are building an experience that feels like a classic, high-end Apple application. Every pixel should feel intentional and physical.*
