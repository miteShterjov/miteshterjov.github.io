# Portfolio Website

A responsive, accessible portfolio website showcasing projects and skills in web development.

## Features

### Responsive Design
- Mobile-first approach
- Flexible grid layout for project cards
- Breakpoints for tablets and mobile devices
- Fluid typography and spacing

### Accessibility
- Semantic HTML5 elements
- Skip-to-content link for keyboard navigation
- Proper heading hierarchy
- ARIA labels for social links
- Alt text for all images
- Visible focus styles with 3px outline
- Supports `prefers-reduced-motion` for users sensitive to animations

### Performance
- Lazy loading for images using IntersectionObserver API
- Optimized image sizes with placeholder service
- Minimal JavaScript footprint
- CSS animations with reduced motion support

### SEO & Social
- Meta description and keywords
- Open Graph tags for Facebook sharing
- Twitter Card metadata
- Semantic HTML structure
- Proper title tags

## Structure

### Files
- `index.html` - Main HTML structure with semantic markup
- `styles.css` - All styling with CSS custom properties
- `script.js` - Lazy loading and smooth scroll functionality
- `README.md` - This documentation

### Sections
1. **Header** - Navigation with links to Projects and Contact sections
2. **Hero** - Welcome message with gradient background
3. **Projects** - Grid of 3 featured project cards with:
   - Placeholder images (400x300)
   - Project descriptions
   - Links to GitHub repositories
4. **Contact** - Email link and social media links (GitHub, LinkedIn)
5. **Footer** - Copyright information

## Customization

### Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #333;
    /* ... */
}
```

### Content
- Update project descriptions in `index.html`
- Replace placeholder images with actual project screenshots
- Update social links in the contact section
- Modify the email address in the mailto link

### Images
Replace placeholder images:
```html
<!-- Current -->
<img data-src="https://via.placeholder.com/400x300/..." alt="...">

<!-- Update to -->
<img data-src="path/to/your/image.jpg" alt="...">
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Fallback for browsers without IntersectionObserver
- Progressive enhancement approach

## GitHub Pages

This site is designed to work with GitHub Pages. Simply push to your repository and enable GitHub Pages in the repository settings.

## License

Free to use and modify for personal or commercial projects.
