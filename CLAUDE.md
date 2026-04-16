# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint
npm run format     # Prettier (writes in place)
```

No test framework is configured.

## Code Style

Prettier enforces: no semicolons, single quotes, 2-space indent, no trailing commas.

## Architecture

This is a macOS-inspired portfolio SPA built with React + Vite + Tailwind CSS + Zustand + GSAP.

**Core concept**: The UI simulates a desktop OS. Each portfolio section (Projects, Resume, Terminal, etc.) is a draggable, stackable "window" on a desktop canvas.

### Key patterns

**WindowWrapper HOC** ([src/hoc/WindowWrapper.jsx](src/hoc/WindowWrapper.jsx))
Wraps every window component to provide:
- Entry/exit animations via GSAP (scale + opacity)
- GSAP Draggable for mouse-drag repositioning
- Click-to-focus behavior with z-index management

**Zustand window store** ([src/store/window.js](src/store/window.js))
Single store managing all window open/close states, z-index stacking order, and focus. Uses Immer middleware.

**Windows** ([src/windows/](src/windows/))
Each file is a self-contained window component wrapped with WindowWrapper in [App.jsx](src/App.jsx). Current windows: Terminal (tech stack), Safari (blog), Projects, Resume (react-pdf), Contacts, Gallery.

**Constants** ([src/constants/index.js](src/constants/index.js))
All app data lives here: nav links, dock apps, tech stack categories, project list, social links, gallery items, and `WINDOW_CONFIG` (initial state for all windows).

### Path aliases (configured in vite.config.js)

| Alias | Path |
|---|---|
| `@components` | `src/components` |
| `@windows` | `src/windows` |
| `@store` | `src/store` |
| `@hoc` | `src/hoc` |
| `@constants` | `src/constants` |

### Adding a new window

1. Create `src/windows/NewWindow.jsx`, export the component wrapped with `WindowWrapper`
2. Add the window entry to `WINDOW_CONFIG` in `src/constants/index.js`
3. Add a dock icon entry to `dockApps` in constants if it needs a launcher
4. Import and render it in `App.jsx`

### Mobile

The app renders a "not supported" screen for viewports narrower than 768px (enforced in App.jsx).
