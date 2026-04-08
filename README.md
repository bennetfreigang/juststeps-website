# JustSteps Website

GitHub Pages site for the JustSteps iOS app.

## Pages

| URL | File | Description |
|-----|------|-------------|
| `/` | `index.html` | Marketing / Landing page |
| `/support` | `support.html` | Support, FAQ, Privacy Policy |

## Setup

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` / `(root)`
5. Click **Save**

Your site will be live at `https://yourusername.github.io/repository-name/`

## Custom domain (optional)

To use a custom domain like `juststeps.app`:

1. Add a `CNAME` file to this folder containing just your domain:
   ```
   juststeps.app
   ```
2. In your DNS provider, add:
   - `A` records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or a `CNAME` record: `www` → `yourusername.github.io`

3. In GitHub Pages settings, enter your custom domain and enable **Enforce HTTPS**

## Updating contact emails

Replace `support@juststeps.app` and `privacy@juststeps.app` in both HTML files with your actual email address before publishing.

## Updating the App Store link

Replace `https://apps.apple.com/app/juststeps` with your actual App Store URL once the app is live.
