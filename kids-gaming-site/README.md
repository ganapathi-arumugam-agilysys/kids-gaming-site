# HERE AND NOW AI - Kids Gaming Site

A fun, educational gaming website designed for kids and teens aged 10-15, designed with passion for innovation. This project demonstrates modern web development practices with dynamic content loading, responsive design, and accessibility features.

## 🎮 Project Overview

This website provides a platform for educational games that make learning fun! The site features HERE AND NOW AI branding and is built with:

- **Dynamic Content Loading**: All content is loaded from JSON files for easy customization
- **HERE AND NOW AI Branding**: Integrated organizational branding from branding.json
- **Responsive Design**: Mobile-first approach ensuring great experience on all devices
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Modern CSS**: CSS Grid, Flexbox, and custom properties for theming
- **Interactive Features**: Game countdown timer, hover effects, and animations

## 📁 Project Structure

```
kids-gaming-site/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles with custom properties
├── scripts.js          # JavaScript for dynamic content
├── data/
│   ├── branding.json   # Brand information and contact details
│   ├── theme.json      # Color scheme and design tokens
│   └── games.json      # Game data and content
├── assets/
│   ├── images/         # Image assets
│   └── icons/          # Icon assets
├── README.md           # This file
└── .gitignore         # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Setup Instructions

1. **Clone or download** this project to your local machine
2. **Navigate** to the project directory
3. **Open with a local server** (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   
   # Using PHP
   php -S localhost:8000
   ```
4. **Open your browser** and navigate to `http://localhost:8000`

Alternatively, you can open `index.html` directly in your browser, but some features may not work due to CORS restrictions.

## 🎨 How It Works

### Dynamic Content System

The website uses three JSON files to drive different aspects of the site:

#### 1. `data/branding.json`
Controls the visual branding and contact information:
- Logo and favicon URLs
- Organization name and slogan
- Contact details (email, phone)
- Social media links
- Brand colors

#### 2. `data/theme.json`
Defines the visual design system:
- Color palette (primary, accent, background, text)
- Typography settings
- Spacing and layout values
- Border radius and shadow styles

#### 3. `data/games.json`
Contains all game content and site copy:
- Site title and tagline
- Game information (title, description, difficulty, thumbnails)
- Countdown timer settings
- Featured games and categories

### Key Features

- **Responsive Grid Layout**: Games are displayed in a responsive grid that adapts to screen size
- **Countdown Timer**: Shows time remaining until next game release
- **Accessibility**: Proper ARIA labels, keyboard navigation, and focus management
- **Error Handling**: Graceful fallbacks when data fails to load
- **Mobile-First Design**: Optimized for touch interfaces with large tap targets

## 🎓 Learning Opportunities

This project includes numerous `TODO: student exercise` comments throughout the code, marking areas where students can:

### HTML Enhancements
- Add meta tags for SEO
- Implement structured data markup
- Create additional semantic sections
- Add form elements for user interaction

### CSS Improvements
- Experiment with CSS animations and transitions
- Add dark mode support using CSS custom properties
- Implement advanced layouts with CSS Grid and Flexbox
- Create custom loading animations

### JavaScript Extensions
- Add game filtering and search functionality
- Implement local storage for user preferences
- Create user accounts and progress tracking
- Add real-time features with WebSockets
- Integrate with external APIs

### Advanced Features
- Add PWA (Progressive Web App) capabilities
- Implement offline functionality with Service Workers
- Add game scoring and leaderboards
- Create user-generated content features

## 🔧 Customization Guide

### Changing Branding
1. Edit `data/branding.json` to update:
   - Organization name and slogan
   - Logo and favicon URLs
   - Contact information
   - Social media links

### Updating Theme
1. Modify `data/theme.json` to change:
   - Color scheme
   - Font family
   - Spacing and layout values

### Adding Games
1. Update `data/games.json` to:
   - Add new games to the `games` array
   - Update featured games list
   - Modify countdown settings
   - Change site title and tagline

### Custom Styling
The CSS uses custom properties (CSS variables) for easy theming:
```css
:root {
    --primary: #4A90E2;    /* Main brand color */
    --accent: #FF6B6B;     /* Accent color */
    --bg: #F8F9FA;         /* Background color */
    --text: #2C3E50;       /* Text color */
}
```

## 🎯 Learning Checkpoints

As you work through this project, try to accomplish these learning goals:

### Beginner Level
- [ ] Understand how HTML, CSS, and JavaScript work together
- [ ] Modify colors and text in the JSON files
- [ ] Add a new game to the games.json file
- [ ] Change the countdown target date

### Intermediate Level
- [ ] Add hover animations to game cards
- [ ] Implement a search/filter feature for games
- [ ] Create a dark mode toggle
- [ ] Add form validation for a contact form

### Advanced Level
- [ ] Implement user accounts with local storage
- [ ] Add game categories and filtering
- [ ] Create a mobile app version using PWA features
- [ ] Integrate with a backend API for dynamic content

## 🌐 Browser Support

This website supports all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is an educational project! Feel free to:
- Fork the repository
- Add new features
- Fix bugs
- Improve documentation
- Share your enhancements

## 📞 Support

If you need help with this project:
1. Check the comments in the code for guidance
2. Review the browser console for error messages
3. Ensure all JSON files are valid (use a JSON validator)
4. Make sure you're running the site from a web server, not opening files directly

Happy coding! 🎮✨
