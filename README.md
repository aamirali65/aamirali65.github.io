# Aamir Almani - Game Developer Website

## Overview
This is the official website for Aamir Almani, an independent Android game developer. The website is hosted on GitHub Pages using the free subdomain `aamirali65.github.io`.

## Website Structure
```
developer-website/
│
├── index.html           - Homepage with developer introduction and game listings
├── about.html           - About the developer page
├── contact.html         - Contact form and information
├── style.css            - Modern, responsive styles (no frameworks)
├── script.js            - Vanilla JavaScript interactions
│
├── games/
│   └── skybound-adventures.html - Skybound Adventures game page
│
├── privacy/
│   ├── index.html       - General privacy policy
│   └── skybound-adventures.html - Skybound Adventures-specific privacy policy
│
├── support/
│   ├── index.html       - Support/Skybound Adventures page
│   └── skybound-adventures.html - Skybound Adventures support page
│
├── terms/
│   └── index.html       - Terms of Service
│
├── app-ads.txt          - AdMob authorized sellers file
│
└── README.md            - This file
```

## Design Features
- **Modern, clean design** with dark background and subtle gradients
- **Mobile-first responsive design** - works on all device sizes
- **No unnecessary frameworks** - pure HTML, CSS, and JavaScript
- **Fast loading** - minimal dependencies, optimized assets
- **Professional game developer identity**
- **Accessibility-conscious** - semantic HTML, proper contrast

## Pages and Their Purpose

### Homepage (`index.html`)
- Developer introduction
- Published and upcoming games
- Game descriptions
- Google Play Store links (placeholders)
- Privacy Policy links
- Support links
- Contact information

### About Page (`about.html`)
- Developer background and philosophy
- Development experience
- Contact information

### Games Page
- Skybound Adventures details
- Game features and descriptions
- Google Play Store links
- Privacy Policy and Support links

### Privacy Policy (`privacy/index.html`)
- Comprehensive privacy policy covering all games
- AdMob integration disclosure
- Data collection and processing information
- User privacy rights
- Contact information
- Last updated date

### Skybound Adventures Privacy Policy (`privacy/skybound-adventures.html`)
- Game-specific privacy policy
- AdMob integration details for this title
- Device identifier handling
- Children's privacy information
- User rights specific to this game

### Support Page (`support/index.html`)
- Contact form for developer communication
- FAQ section
- Community links (GitHub)
- Game-specific support information

### Terms of Service (`terms/index.html`)
- Terms governing use of games and website
- Use license information
- Intellectual property rights
- Limitation of liability
- Termination conditions

### AdMob (`app-ads.txt`)
- Authorized sellers of ad inventory
- Placeholder AdMob Publisher ID (must be replaced with real ID)
- Instructions for obtaining real Publisher ID

## Google Play Store Integration

### Privacy Policy URL for Google Play Console
```
https://aamirali65.github.io/privacy/skybound-adventures.html
```
or the general policy at:
```
https://aamirali65.github.io/privacy/
```

### Developer Website Field
```
https://aamirali65.github.io/
```

### App Support/Contact Field
```
https://aamirali65.github.io/contact.html
```

## AdMob Configuration

### app-ads.txt File
The `app-ads.txt` file is located at:
```
https://aamirali65.github.io/app-ads.txt
```

**Important:** This file currently contains a Google test AdMob Publisher ID. To use it in production:

1. Log in to your AdMob account at https://admob.google.com/
2. Go to Monetization > Apps
3. Select your app
4. Find the "AdMob Publisher ID" (format: ca-app-pub-YYYYYYYYYYYYYY/ZZZZZZZZZZ)
5. Replace the placeholder in `app-ads.txt` with your actual Publisher ID

### How to Connect Website to Google Play Store
1. Add the Privacy Policy URL to your Google Play Console listing
2. Add the website URL (`https://aamirali65.github.io/`) to the Developer Website field
3. Add the contact/support URL to the App support/contact field
4. Ensure the app-ads.txt file is accessible from the website root

## Deployment

### GitHub Pages Setup
This website is deployed on GitHub Pages. To deploy changes:

1. Ensure all files are in the repository
2. The site is pushed to the `main` branch
3. GitHub Pages is enabled in repository settings
4. The site is available at `https://aamirali65.github.io/`

### Adding New Games
To add a new game:
1. Create a new HTML file in the `games/` directory
2. Add game details to the homepage `index.html`
3. Create a specific privacy policy in `privacy/` if needed
4. Update the navigation if necessary

## Local Development
No build step required. Open any HTML file in a browser to preview. Changes can be tested locally before pushing to GitHub.

## Contact
- GitHub: [github.com/aamirali65](https://github.com/aamirali65)
- Website: [aamirali65.github.io](https://aamirali65.github.io)