# 🎯 Quick Start Guide

## Step-by-Step Setup

### 1️⃣ Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- React Icons

### 2️⃣ Add Your Profile Image

**IMPORTANT:** Add your profile photo to make the portfolio complete!

1. Place your profile image in the `public` folder
2. Name it `profile.jpg`
3. Recommended: Square image (500x500px or larger)

The image you provided has been saved. You can replace it anytime.

### 3️⃣ Update Your Information

Edit the file: `src/data/data.js`

Update the following:
- ✅ Projects (add more projects as you build them)
- ✅ Skills (already populated)
- ✅ Social links (already set)
- ✅ Navigation links (already set)

### 4️⃣ Add Your Resume (Optional)

1. Add your resume PDF to the `public` folder
2. Name it `resume.pdf`
3. The "Download Resume" button in Hero section will automatically link to it

### 5️⃣ Run Development Server

```bash
npm run dev
```

Open your browser and visit: **http://localhost:3000**

Your portfolio should now be live! 🎉

---

## 🎨 Customization Tips

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#FF6B35',  // Your brand color
    light: '#FF8C61',
    dark: '#E55A2B',
  },
}
```

### Add More Projects

Edit `src/data/data.js`:

```javascript
{
  id: 4,
  title: "Your New Project",
  description: "Description here",
  techStack: ["React", "Node.js", "MongoDB"],
  category: "Full Stack",
  github: "github-link",
  liveDemo: "demo-link",
  featured: true,
}
```

### Update About Section

Edit `src/sections/About.jsx` to change:
- Professional summary
- Highlights
- Any text content

### Modify Contact Form

The contact form in `src/sections/Contact.jsx` currently shows a success message. To integrate with a real backend:

1. Use a service like [Formspree](https://formspree.io/)
2. Or integrate with [EmailJS](https://www.emailjs.com/)
3. Or build your own API endpoint

---

## 🚀 Deployment

### Vercel (Easiest - Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Done!** Your portfolio is live in under 1 minute.

### Netlify

1. Build the project: `npm run build`
2. Visit [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Or connect your Git repository

---

## 🐛 Troubleshooting

### Issue: "Module not found" error

**Solution:** Run `npm install` again

### Issue: Profile image not showing

**Solution:** 
- Make sure the image is in `public/profile.jpg`
- Try using a different image format (PNG instead of JPG)
- Check the browser console for errors

### Issue: Styles not loading

**Solution:**
- Delete `.next` folder
- Run `npm run dev` again

### Issue: Port 3000 already in use

**Solution:**
```bash
npm run dev -- -p 3001
```

---

## 📚 Folder Structure Reference

```
portfolio-1/
├── app/                    # Next.js App Router
│   ├── layout.jsx          # Root layout (SEO, Navbar, Footer)
│   └── page.jsx            # Homepage
│
├── src/
│   ├── components/         # Reusable components
│   ├── sections/           # Page sections
│   ├── data/               # Portfolio data
│   └── styles/             # Global styles
│
├── public/                 # Static files
│   ├── profile.jpg         # YOUR PHOTO HERE
│   └── resume.pdf          # YOUR RESUME HERE
│
└── Configuration files
```

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 💡 Pro Tips

1. **Keep it updated** - Add new projects regularly
2. **Optimize images** - Use WebP format for better performance
3. **Test on mobile** - Use Chrome DevTools mobile view
4. **Custom domain** - Buy a domain and connect it to Vercel/Netlify
5. **Google Analytics** - Add tracking to see visitors

---

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Review the README.md for detailed instructions
3. Check that all files are in the correct locations
4. Make sure all dependencies are installed

---

**Happy Coding! 🚀**

Built with ❤️ by Gembali Dinesh
