# UseBCC - Protect Privacy in Group Emails

A modern, single-page Svelte website that educates users about the privacy benefits of using BCC (Blind Carbon Copy) instead of CC (Carbon Copy) when sending emails to groups of people.

## Purpose

This website helps users understand:

- The privacy risks of using CC in group emails
- How BCC protects recipient privacy
- Step-by-step instructions for using BCC in major email clients
- Best practices for professional email communication

## Features

- **Modern Design**: Clean, minimalist interface with professional styling
- **Interactive Components**: Visual comparison between CC and BCC usage
- **Educational Content**: Clear explanations with real-world examples
- **Comprehensive FAQ**: Answers to common questions about email privacy
- **Usage Guides**: Step-by-step instructions for Gmail, Outlook, Apple Mail, and mobile apps
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: Built with semantic HTML and ARIA labels
- **Performance**: Optimized for fast loading and smooth animations

## Technology Stack

- **Framework**: SvelteKit
- **Styling**: Custom CSS with CSS Custom Properties
- **Icons**: Lucide Svelte
- **Build Tool**: Vite
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/UseBCC.git
cd UseBCC
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `build` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## Design System

### Colors

- **Primary**: `#1e40af` (Professional blue)
- **Secondary**: `#059669` (Trust green)
- **Accent**: `#f59e0b` (Attention amber)
- **Neutrals**: Gray scale for text and backgrounds

### Typography

- **Font Family**: Inter (Google Fonts)
- **Responsive scaling**: Fluid typography with CSS custom properties
- **Hierarchy**: Clear heading structure for accessibility

### Components

- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Consistent shadow and border radius
- **Animations**: Subtle fade-in and slide effects
- **Icons**: Lucide icons for consistency

## Deployment

This SvelteKit application can be deployed to various platforms:

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
1. Vercel will automatically detect SvelteKit and configure the build
1. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
1. Deploy the `build` directory to Netlify
1. Configure redirects for SPA routing if needed

### Static Hosting

1. Use the static adapter: `npm install -D @sveltejs/adapter-static`
1. Update `svelte.config.js` to use the static adapter
1. Build and deploy the generated static files

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader friendly interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color combinations
- **Focus Management**: Clear focus indicators
- **Alt Text**: Descriptive text for all visual elements

## Contributing

1. Fork the repository
1. Create a feature branch: `git checkout -b feature-name`
1. Make your changes and test thoroughly
1. Commit with clear messages: `git commit -m "Add feature description"`
1. Push to your fork: `git push origin feature-name`
1. Create a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- Typography by [Google Fonts](https://fonts.google.com/)
- Built with [SvelteKit](https://kit.svelte.dev/)
