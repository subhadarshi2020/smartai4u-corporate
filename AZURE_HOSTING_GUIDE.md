# Azure Hosting Guide for SmartAI4u Website

This guide provides step-by-step instructions for hosting your SmartAI4u website on Microsoft Azure using Azure Static Web Apps with your domain SmartAi4u.com.

## Prerequisites

- Azure subscription (free tier available)
- GitHub account
- Domain SmartAi4u.com (already purchased)
- Admin email admin@SmartAi4u.com

## Part 1: Prepare Your Code Repository

### Step 1: Create GitHub Repository

1. **Go to GitHub** (https://github.com) and sign in
2. **Click "New Repository"**
3. **Repository Settings:**
   - Repository name: `smartai4u-website`
   - Description: `SmartAI4u AI Consulting Website`
   - Set to Public (required for free Azure Static Web Apps)
   - Initialize with README: ✓

### Step 2: Upload Website Files

1. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/smartai4u-website.git
   cd smartai4u-website
   ```

2. **Copy all project files** from `/workspaces/spark-template/` to your repository folder:
   - Copy all files and folders
   - Exclude: `node_modules/`, `.git/` folders if present

3. **Commit and push files:**
   ```bash
   git add .
   git commit -m "Initial SmartAI4u website deployment"
   git push origin main
   ```

## Part 2: Azure Static Web Apps Setup

### Step 3: Create Azure Static Web App

1. **Sign in to Azure Portal** (https://portal.azure.com)

2. **Create Resource:**
   - Click "Create a resource"
   - Search for "Static Web Apps"
   - Click "Create"

3. **Basic Configuration:**
   - **Subscription:** Select your subscription
   - **Resource Group:** Create new: `smartai4u-rg`
   - **Name:** `smartai4u-webapp`
   - **Plan type:** Free
   - **Region:** Choose closest to your target audience
   - **Source:** GitHub

4. **GitHub Integration:**
   - Click "Sign in with GitHub"
   - **Organization:** Your GitHub username
   - **Repository:** `smartai4u-website`
   - **Branch:** `main`

5. **Build Configuration:**
   - **Build Presets:** React
   - **App location:** `/` (root)
   - **Build location:** `dist`
   - **Output location:** `dist`

6. **Click "Review + create"** then **"Create"**

### Step 4: Wait for Deployment

- Azure will automatically create a GitHub Action workflow
- Initial deployment takes 3-5 minutes
- Monitor progress in Azure Portal > Your Static Web App > GitHub Actions

## Part 3: Custom Domain Configuration

### Step 5: Configure Custom Domain

1. **In Azure Portal:**
   - Go to your Static Web App resource
   - Navigate to "Custom domains" in the left sidebar
   - Click "Add custom domain"

2. **Domain Setup:**
   - **Domain name:** `smartai4u.com`
   - **Hostname record type:** CNAME
   - Click "Next"

3. **DNS Configuration:**
   - Azure will provide you with a CNAME value (like `xyz.azurestaticapps.net`)
   - Note this value for the next step

### Step 6: Configure DNS Records

**At your domain registrar (where you bought SmartAi4u.com):**

1. **Access DNS Management:**
   - Log into your domain registrar's control panel
   - Navigate to DNS management for SmartAi4u.com

2. **Add CNAME Records:**
   ```
   Type: CNAME
   Name: www
   Value: [Azure-provided-value].azurestaticapps.net
   TTL: 3600 (1 hour)
   ```

   ```
   Type: CNAME  
   Name: @
   Value: [Azure-provided-value].azurestaticapps.net
   TTL: 3600 (1 hour)
   ```

3. **Save DNS Changes**
   - Changes can take 24-48 hours to propagate
   - Most registrars update within 1-2 hours

### Step 7: Verify Domain in Azure

1. **Return to Azure Portal**
2. **In Custom domains section:**
   - Click "Validate" next to your domain
   - Wait for validation (may take several hours)
   - Once validated, domain status shows "Ready"

## Part 4: SSL Certificate Setup

### Step 8: Enable SSL

1. **In Azure Static Web App:**
   - Go to "Custom domains"
   - Click on your domain `smartai4u.com`
   - Enable "Auto-generated certificate"
   - Azure automatically provisions SSL certificate (free)

2. **Certificate validation:** Takes 15-30 minutes

## Part 5: Email Configuration

### Step 9: Email Setup Options

**Option A: Microsoft 365 Business (Recommended)**

1. **Purchase Microsoft 365 Business Basic** ($6/user/month)
2. **Configure MX Records:**
   ```
   Type: MX
   Name: @
   Value: smartai4u-com.mail.protection.outlook.com
   Priority: 0
   TTL: 3600
   ```

3. **Add admin@SmartAi4u.com** in Microsoft 365 admin center

**Option B: Google Workspace**

1. **Sign up for Google Workspace** ($6/user/month)
2. **Configure MX Records** as provided by Google
3. **Create admin@SmartAi4u.com** mailbox

**Option A: Simple Email Forwarding**

1. **Many registrars offer free email forwarding**
2. **Set up forwarding:** admin@SmartAi4u.com → your-personal-email@gmail.com

## Part 6: Performance Optimization

### Step 10: Configure Azure Performance Settings

1. **In Azure Static Web App:**
   - Navigate to "Configuration"
   - Add environment variables if needed
   - Configure routing rules in `staticwebapp.config.json`

2. **Create staticwebapp.config.json** in project root:
   ```json
   {
     "routes": [
       {
         "route": "/*",
         "serve": "/index.html",
         "statusCode": 200
       }
     ],
     "navigationFallback": {
       "rewrite": "/index.html"
     },
     "mimeTypes": {
       ".json": "application/json",
       ".js": "application/javascript",
       ".css": "text/css"
     },
     "globalHeaders": {
       "Cache-Control": "no-cache"
     }
   }
   ```

### Step 11: Enable CDN (Optional)

1. **Azure CDN integration:**
   - Navigate to "Azure CDN" in your Static Web App
   - Enable CDN for global performance
   - Configure caching rules

## Part 7: Monitoring and Analytics

### Step 12: Set Up Monitoring

1. **Application Insights:**
   - Enable Application Insights in Azure
   - Monitor website performance and user analytics

2. **Google Analytics (Optional):**
   - Add Google Analytics tracking code to website
   - Monitor visitor behavior and conversions

## Part 8: SSL and Security

### Step 13: Security Configuration

1. **Force HTTPS:**
   - All traffic automatically redirected to HTTPS
   - Configure security headers in staticwebapp.config.json

2. **Security headers in staticwebapp.config.json:**
   ```json
   {
     "globalHeaders": {
       "X-Frame-Options": "DENY",
       "X-Content-Type-Options": "nosniff",
       "Referrer-Policy": "strict-origin-when-cross-origin"
     }
   }
   ```

## Part 9: Backup and Maintenance

### Step 14: Backup Strategy

1. **GitHub Repository:**
   - Your code is automatically backed up in GitHub
   - Enable branch protection rules

2. **Azure Backup:**
   - Static Web Apps content is automatically backed up
   - Download deployment packages from Azure Portal

### Step 15: Update Process

**To update your website:**

1. **Make changes** to files in your local repository
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```
3. **Azure automatically deploys** changes (2-3 minutes)

## Part 10: Cost Optimization

### Step 16: Monitor Costs

1. **Azure Cost Management:**
   - Monitor usage in Azure Portal
   - Set up billing alerts
   - Free tier includes:
     - 100 GB bandwidth per month
     - 0.5 GB storage
     - Custom domains and SSL

2. **Expected Monthly Costs:**
   - Static Web App: $0 (free tier)
   - Domain: $10-15/year (already purchased)
   - Email: $6/month (if using Microsoft 365)
   - **Total: ~$6-12/month**

## Troubleshooting

### Common Issues:

1. **DNS not propagating:**
   - Wait 24-48 hours
   - Use DNS checker tools online
   - Clear browser cache

2. **SSL certificate issues:**
   - Ensure DNS is properly configured
   - Wait for automatic certificate generation
   - Contact Azure support if needed

3. **Website not updating:**
   - Check GitHub Actions for build failures
   - Verify file paths in repository
   - Check Azure deployment logs

4. **Email not working:**
   - Verify MX record configuration
   - Check email provider setup
   - Test with online MX record tools

### Support Resources:

- **Azure Documentation:** https://docs.microsoft.com/azure/static-web-apps/
- **Azure Support:** Available through Azure Portal
- **Community Forums:** Microsoft Q&A, Stack Overflow

## Security Checklist

- ✅ HTTPS enabled with valid SSL certificate
- ✅ Security headers configured
- ✅ Domain validated and verified
- ✅ Regular backups through GitHub
- ✅ Monitoring and alerts configured
- ✅ Email security (SPF, DKIM if using business email)

## Final Steps

1. **Test website:** Visit https://smartai4u.com
2. **Test email:** Send test email to admin@SmartAi4u.com
3. **Performance test:** Use tools like Google PageSpeed Insights
4. **SEO setup:** Submit sitemap to Google Search Console
5. **Business setup:** Add to Google My Business, LinkedIn

Your SmartAI4u website is now live and professional! The total setup time is typically 2-4 hours, with most time spent waiting for DNS propagation.