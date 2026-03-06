# 🚀 Gembali Dinesh - Portfolio Website

A modern, professional, and production-ready personal portfolio website built with cutting-edge technologies.

![Portfolio Preview](./public/og-image.png)

## ✨ Features

- 🎨 **Modern Dark Theme** with vibrant orange accents
- ⚡ **Lightning Fast** - Built with Next.js 14 App Router
- 🎭 **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and Schema.org
- 🎯 **High Performance** - Lighthouse score 90+
- 🌊 **Smooth Scrolling** - Elegant navigation experience
- 💫 **Interactive UI** - Micro-interactions and hover effects

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Language:** JavaScript (JSX)
- **Deployment:** Vercel / Netlify

## 📁 Project Structure

```
portfolio-1/
├── app/
│   ├── layout.jsx          # Root layout with metadata
│   └── page.jsx             # Homepage with all sections
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Navigation with smooth scroll
│   │   ├── Footer.jsx       # Footer with social links
│   │   ├── Button.jsx       # Reusable button component
│   │   ├── Card.jsx         # Reusable card component
│   │   ├── SectionTitle.jsx # Section title component
│   │   ├── ScrollProgress.jsx # Scroll progress indicator
│   │   └── BackToTop.jsx    # Back to top button
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx         # Hero section with profile
│   │   ├── About.jsx        # About and skills section
│   │   ├── Education.jsx    # Education timeline
│   │   ├── Projects.jsx     # Projects showcase
│   │   └── Contact.jsx      # Contact form
│   ├── data/
│   │   └── data.js          # Portfolio data (projects, skills, etc.)
│   └── styles/
│       └── globals.css      # Global styles and Tailwind imports
├── public/                  # Static assets
│   ├── profile.jpg          # Profile image
│   └── resume.pdf           # Resume file
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd portfolio-1
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your profile image:**
   - Place your profile image as `profile.jpg` in the `public` folder
   - Recommended size: 500x500px or larger (square aspect ratio)

4. **Update your information:**
   - Edit `src/data/data.js` to update:
     - Projects
     - Skills
     - Social links
     - Contact information

5. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information

Edit `src/data/data.js` to customize:

```javascript
// Projects
export const projects = [
  {
    title: "Your Project",
    description: "Project description",
    techStack: ["React", "Node.js"],
    category: "Full Stack",
    github: "github-url",
    liveDemo: "demo-url",
    featured: true,
  },
];

// Skills
export const skills = {
  "Category": [
    { name: "Skill Name", icon: "📦" },
  ],
};

// Social Links
export const socialLinks = {
  linkedin: "your-linkedin-url",
  github: "your-github-url",
  // ... more links
};
```

### Update Colors

Edit `tailwind.config.js` to change the theme colors:

```javascript
colors: {
  primary: {
    DEFAULT: '#FF6B35',  // Change this
    light: '#FF8C61',
    dark: '#E55A2B',
  },
}
```

### Update Content

- **Hero Section:** Edit `src/sections/Hero.jsx`
- **About Section:** Edit `src/sections/About.jsx`
- **Education:** Edit `src/sections/Education.jsx`
- **Projects:** Edit `src/sections/Projects.jsx`
- **Contact:** Edit `src/sections/Contact.jsx`

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

Test the production build locally:

```bash
npm start
# or
yarn start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

**Or use Vercel Dashboard:**
- Visit [vercel.com](https://vercel.com)
- Click "New Project"
- Import your Git repository
- Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

**Build Settings for Netlify:**
- Build command: `npm run build`
- Publish directory: `.next`

**Or use Netlify Dashboard:**
- Visit [netlify.com](https://netlify.com)
- Click "Add new site"
- Import from Git
- Set build command: `npm run build`
- Set publish directory: `.next`

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📊 Performance Optimization

This portfolio is optimized for:

- **Core Web Vitals** - Excellent LCP, FID, and CLS scores
- **Image Optimization** - Next.js Image component with automatic optimization
- **Code Splitting** - Automatic code splitting for faster page loads
- **Lazy Loading** - Sections load as you scroll
- **Minification** - Automatic HTML, CSS, and JS minification

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Proper color contrast (WCAG AA compliant)
- Alt text for all images

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Gembali Dinesh**
- LinkedIn: [Gembali Dinesh](https://www.linkedin.com/in/gembali-dinesh-91a50533a/)
- GitHub: [@dinesh8999](https://github.com/dinesh8999)
- LeetCode: [@gembalidinesh](https://leetcode.com/u/gembalidinesh/)
- Email: gembalidinesh7@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

⭐ **If you find this portfolio useful, please consider giving it a star!**

Built with ❤️ by Gembali Dinesh
# portfolio-dinesh
