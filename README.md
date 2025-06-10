# Rohan Sharma – Modern Front-End Developer Portfolio Template

## 🚀 Welcome to your next stunning portfolio!

This is a clean, modern, and highly customizable front-end developer portfolio template designed to help you showcase your skills, projects, and services in the most engaging way possible. Built with the latest web technologies, it ensures a responsive, performant, and visually appealing experience across all devices.

Whether you're a seasoned developer or just starting, this template provides a perfect foundation to establish your online presence and impress potential clients or employers.

---

## ✨ Live Demo

Experience the template in action!

👉 [**View Live Website Demo**](https://snehavish595.github.io/Portfolio-Template/) _(Please replace this with your actual live demo URL once deployed)_

---

## 📌 Key Features

- **Modern & Sleek Design:** A clean, visually appealing layout that puts your work first.
- **Fully Responsive:** Optimized for desktop, tablet, and mobile devices, ensuring a seamless experience for all users.
- **Built with Tailwind CSS:** Leveraging the power of Tailwind CSS for rapid and flexible styling. Easy to customize with utility-first classes.
- **Interactive Typewriter Effect:** Engaging animated typing and erasing effect for your name in the hero section, captivating visitors instantly.
- **Dynamic Scroll Animations (AOS):** Smooth and elegant "Animate on Scroll" effects for various sections, adding a professional touch.
- **Lottie Animations Integration:** Utilizes Lottie for lightweight and scalable animations, enhancing visual appeal without sacrificing performance.
- **Clear Section Structure:** Dedicated sections for Home, About, Skills, Projects, Services, and Contact for organized content presentation.
- **Skills Grid with Hover Effects:** Visually showcase your technical proficiencies.
- **Functional Contact Form UI:** A ready-to-use contact form structure (frontend only), easily connectable to a backend service of your choice.
- **Downloadable Resume/CV:** A clear call to action to download your resume.
- **Easy Customization:** Well-commented code and a logical file structure make it simple to adapt to your needs.
- **Performance Optimized:** Clean code and efficient asset loading for fast page speeds.

---

## 📚 Technologies Used

- **HTML5:** The core structure of the template.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **JavaScript (Vanilla JS):** For interactive elements and animations.
- **AOS (Animate On Scroll) Library:** For beautiful scroll-triggered animations.
- **LottieFiles / Lottie Web:** For integrating scalable vector animations.
- **Google Fonts:** For modern and elegant typography (`Poppins`, `Gloria Hallelujah`, `Tangerine`).

## 📁 Folder Structure

<pre>
├── index.html                  // Main HTML file for the portfolio
├── styles.css                  // Custom CSS for additional styling and overrides
├── script.js                   // JavaScript for interactive elements (e.g., typewriter, Lottie)
├── assets/                     // Contains all media assets
│   ├── resume-rohan-sharma.pdf // Placeholder for your resume
│   └── images/                 // Folder for images
│       └── Rohan-Sharma.jpg    // Placeholder for your profile image
└── README.md                   // This documentation file
</pre>

## 🛠️ How to Use and Customize

Follow these simple steps to set up and personalize your new portfolio template:

### 1. **Download the Template**

Download the entire project folder from Envato.

### 2. **Open in Your Code Editor**

Unzip the downloaded file and open the project folder in your favorite code editor (e.g., VS Code, Sublime Text).

### 3. **Customize Content (`index.html`)**

- **Your Name:** Update `"Rohan Sharma"` in the `h1` tag in the `index.html` file (specifically, the `nameToType` variable in `script.js` also controls the animated text).
- **About Section:** Modify the text in the "About Me" section (`#about`).
- **Skills:** Update your skills in the "Skills" section (`#skills`). Each skill can be an `img` tag with a caption.
- **Projects:** Replace the placeholder project details (`#projects`) with your own. Ensure you update titles, descriptions, and links.
- **Services:** Adjust the service descriptions (`#services`) to reflect what you offer.
- **Contact Information:** Update the email, phone, and social media links in the "Contact" section (`#contact`) and the footer.
- **Resume:** Replace `assets/resume-rohan-sharma.pdf` with your actual PDF resume. Update the `href` in the "Download Resume" button.
- **Images:** Replace `assets/images/Rohan-Sharma.jpg` with your profile picture. Update other image paths as needed.

### 4. **Customize Styling (`styles.css` & `tailwind.config.js`)**

- **Colors:** The primary colors are defined in `tailwind.config.js` within `index.html` (under `<script> tailwind.config = {...}`):
  - `bg: "#111111"` (background)
  - `text: "#ffffff"` (primary text)
  - `accent: "#ff004f"` (highlight/accent color)
    You can easily change these values to match your brand.
- **Fonts:** Google Fonts are linked in the `<head>` of `index.html`. You can modify the `fontFamily` in `tailwind.config.js` to use different fonts.
- **Custom CSS:** For more specific styling adjustments, use `styles.css`. This file is already linked and ready for your custom rules.
- **Tailwind CSS:** For fine-grained control over layout and component styling, refer to the Tailwind CSS documentation and directly modify the utility classes in `index.html`.

### 5. **Customize JavaScript (`script.js`)**

- **Typewriter Effect:**
  - `nameToType`: Change `"Rohan Sharma"` to your name.
  - `typingSpeed`, `erasingSpeed`, `delayBeforeErase`, `delayBeforeType`: Adjust these variables to control the speed and timing of the typing and erasing animation.
- **Lottie Animations:**
  - The background bubble animation uses a Lottie JSON file. You can replace `https://assets4.lottiefiles.com/packages/lf20_tll0j4bb.json` with your own Lottie animation URL.
  - Similarly, for the contact section, update the `path` for `contact-lottie`.

### 6. **Deployment**

- This is a static HTML, CSS, and JavaScript website. You can host it on any static hosting service like:

  - GitHub Pages (as demonstrated by the live demo link)
  - Netlify
  - Vercel
  - Firebase Hosting
  - Any traditional web server (Apache, Nginx)

  Simply upload the entire project folder to your hosting provider.

---

## ⚠️ Important Notes

- **Contact Form:** The contact form is purely a UI (User Interface). To make it send emails, you will need to integrate it with a backend service (e.g., Formspree, Netlify Forms, custom server-side script with Node.js, PHP, etc.). This template _does not_ include backend functionality.
- **Resume & Profile Picture:** Remember to replace the placeholder `resume-rohan-sharma.pdf` and `Rohan-Sharma.jpg` with your actual files.
- **External Libraries:** This template uses CDN links for AOS, Lottie, and Tailwind CSS. While convenient, for production, you might consider self-hosting these libraries for better control and performance, especially if you plan extensive custom builds.
- **AOS Initialization:** There are two AOS initialization scripts in `index.html`. You only need one. It's recommended to keep the one inside the `DOMContentLoaded` listener in `script.js` or directly before the closing `</body>` tag if you separate it, ensuring it runs after the DOM is fully loaded. (The current `script.js` already includes `AOS.init()` inside `DOMContentLoaded` so you can remove the other instances).
  ```html

  ```
  _(Self-correction: The provided `index.html` has two `AOS.init()` calls. The one inside `script.js` is better placed. You should remove the redundant ones in `index.html` to avoid conflicts.)_

---

## 🤝 Credits

- **Tailwind CSS:** For the fantastic utility-first framework.
- **AOS (Animate On Scroll):** Michalsnik for the smooth scroll animations.
- **LottieFiles:** For providing an extensive library of animations and the Lottie Web player.
- **Google Fonts:** For the beautiful typography.
- **Unsplash / Pexels:** (If you used any stock photos, specify here, otherwise remove)

---

## ✉️ Support

If you have any questions or need assistance with this template, please don't hesitate to reach out through the Envato comments section or my profile page. I'm here to help you get the most out of your purchase!

---

**Thank you for choosing Rohan Sharma – Modern Front-End Developer Portfolio Template!**
We hope it helps you land your next big opportunity.

---

