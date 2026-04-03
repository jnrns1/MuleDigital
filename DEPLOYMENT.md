# Deployment Checklist for Vercel

## Pre-Deployment

- [x] All files committed to git
- [x] `vercel.json` configured
- [x] `.vercelignore` configured
- [x] Security headers added (vercel.json)
- [x] Cache headers optimized (vercel.json)
- [x] No hardcoded development URLs
- [x] README.md updated with deployment instructions

## Deployment Steps

### Option 1: Vercel Dashboard (Recommended)
1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Select "Import Git Repository"
4. Find and select `jnrns1/MuleDigital`
5. Click "Import"
6. Vercel will automatically detect it as a static site
7. Click "Deploy"
8. Add custom domain if desired

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project directory
cd MuleDigital

# Deploy
vercel

# Follow the prompts to link project and deploy
```

## Post-Deployment

1. **Verify Deployment**
   - Check that the site loads correctly
   - Test theme toggle (dark/light mode)
   - Check responsive design on mobile
   - Verify all links work (internal anchors)

2. **Configure Custom Domain** (if needed)
   - Project Settings → Domains
   - Add your custom domain
   - Follow DNS instructions

3. **Enable Analytics** (optional but recommended)
   - Project Settings → Integrations
   - Enable Web Analytics
   - Enable Speed Insights

4. **Monitor Performance**
   - Check the Analytics dashboard
   - Review Core Web Vitals
   - Monitor error logs

## Performance Optimizations Already Configured

- ✅ Static site (no server processing)
- ✅ Aggressive asset caching (1 year TTL for CSS/JS/Images)
- ✅ HTML caching (1 hour with must-revalidate)
- ✅ Google Fonts preconnected (fast font loading)
- ✅ CSS-in-file approach (minimal HTTP requests)
- ✅ SVG animations (GPU accelerated)
- ✅ Clean URLs enabled (no .html extensions)

## Security Headers Configured

- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY (prevents clickjacking)
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy: disables geolocation, microphone, camera

## Environment Variables

No environment variables needed for this static site deployment.

## Troubleshooting

### Site shows blank/errors
- Check browser console for errors
- Verify all assets loaded (Network tab)
- Check Vercel deployment logs

### Theme toggle not working
- Verify JavaScript isn't blocked
- Check browser DevTools console for errors

### Slow performance
- Check Network tab for slow assets
- Review Vercel Analytics
- Enable Vercel Speed Insights

## Next Steps After Deployment

1. Set up email forwarding for `contact@yourdomain.com`
2. Configure contact form backend (optional)
3. Add Google Analytics/GTM (optional)
4. Set up monitoring/alerts for uptime
5. Create deployment documentation for team
