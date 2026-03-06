# 🚀 Deployment Guide

This guide will help you deploy your portfolio to production.

---

## 🌐 Vercel Deployment (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Visit Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up / Sign in with GitHub

3. **Import Project:**
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

4. **Deploy:**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site is live! 🎉

5. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS settings as instructed

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

---

## 🎨 Netlify Deployment

### Method 1: Deploy via Netlify Dashboard

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Visit Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up / Sign in

3. **Deploy:**
   - Click "Add new site"
   - Choose "Import an existing project"
   - Connect to your Git provider (GitHub)
   - Select your repository

4. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

5. **Custom Domain:**
   - Go to Site settings → Domain management
   - Add custom domain
   - Update DNS records

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Initialize:**
   ```bash
   netlify init
   ```

4. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

---

## 🔧 Pre-Deployment Checklist

Before deploying, make sure you:

- ✅ Added your profile image (`public/profile.jpg`)
- ✅ Added your resume PDF (`public/resume.pdf`)
- ✅ Updated all personal information in `src/data/data.js`
- ✅ Tested the site locally (`npm run dev`)
- ✅ Built the project successfully (`npm run build`)
- ✅ Updated social media links
- ✅ Verified contact form works
- ✅ Checked all images load correctly
- ✅ Tested on mobile devices
- ✅ Reviewed SEO meta tags in `app/layout.jsx`

---

## 🌍 Custom Domain Setup

### For Vercel:

1. **Buy a domain** (Namecheap, GoDaddy, Google Domains, etc.)

2. **Add domain in Vercel:**
   - Project Settings → Domains
   - Add your domain

3. **Update DNS records:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait for propagation** (can take up to 48 hours)

### For Netlify:

1. **Add domain in Netlify:**
   - Site settings → Domain management

2. **Update DNS records:**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

---

## 📊 Post-Deployment

### 1. Test Your Site

- ✅ Open your deployed URL
- ✅ Test all sections scroll correctly
- ✅ Click all links and buttons
- ✅ Test contact form
- ✅ Check mobile responsiveness
- ✅ Test on different browsers

### 2. Performance Audit

Run a Lighthouse audit:
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Generate report"
4. Aim for 90+ on all metrics

### 3. SEO Optimization

- Add `sitemap.xml`
- Submit to Google Search Console
- Add Google Analytics (optional)
- Verify Open Graph tags

### 4. Share Your Portfolio

Share your portfolio on:
- LinkedIn profile
- GitHub profile README
- Twitter/X
- Resume

---

## 🔄 Continuous Deployment

Once connected to Git:

1. **Make changes locally**
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update project"
   git push
   ```
3. **Auto-deployment** - Vercel/Netlify will automatically rebuild and deploy

---

## 🐛 Common Deployment Issues

### Issue: Build fails on Vercel/Netlify

**Solution:**
- Check build logs for errors
- Ensure `npm run build` works locally
- Verify all dependencies are in `package.json`

### Issue: Images not loading

**Solution:**
- Ensure images are in `public` folder
- Check image paths (use `/image.jpg` not `./image.jpg`)
- Verify image file names are correct

### Issue: 404 on page refresh

**Solution:**
- This shouldn't happen with Next.js App Router
- Verify you're using App Router (not Pages Router)

### Issue: Environment variables not working

**Solution:**
- Add environment variables in deployment platform settings
- Prefix with `NEXT_PUBLIC_` for client-side access
- Rebuild after adding env vars

---

## 📈 Analytics Setup (Optional)

### Google Analytics:

1. **Create Google Analytics account**
2. **Get tracking ID**
3. **Add to `app/layout.jsx`:**
   ```jsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
     strategy="afterInteractive"
   />
   ```

---

## 🎉 Your Portfolio is Live!

Congratulations! Your portfolio is now live and accessible worldwide.

**Next steps:**
1. Share your portfolio link
2. Add it to your resume
3. Update your LinkedIn
4. Keep adding new projects
5. Monitor analytics (if added)

---

## 💡 Pro Tips

1. **Regular Updates** - Add new projects as you build them
2. **Performance** - Regularly check Lighthouse scores
3. **Backups** - Keep your code on GitHub
4. **SSL** - Both Vercel and Netlify provide free SSL
5. **CDN** - Both platforms use global CDN for fast loading

---

**Need help? Check the main README.md or create an issue on GitHub.**

Happy deploying! 🚀
