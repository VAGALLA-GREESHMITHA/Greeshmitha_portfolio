# Greeshmitha Vagalla - Personal Portfolio Website

A modern, responsive, and recruiter-friendly personal portfolio website built from scratch for **Greeshmitha Vagalla**, a 2025 B.Tech Computer Science and Engineering graduate seeking entry-level Java Developer and Full Stack Software opportunities.

---

## 📁 Project Structure

```
Greeshmitha-Portfolio/
│
├── index.html            # Main semantic HTML5 markup & Open Graph tags
├── style.css             # Vanilla CSS design system & responsive styling
├── script.js             # Vanilla JS for navigation, modal & contact interactions
├── README.md             # Project documentation & configuration guide
└── assets/
    ├── greeshmitha-profile.jpg    # Professional portrait photo
    └── Greeshmitha_Resume.pdf     # Official resume document
```

---

## 🎨 Design & Key Highlights

- **Original Aesthetics**: Dark slate theme (`#0a0f1d`) complemented by cyan/sky blue (`#38bdf8`) accents and soft indigo highlights.
- **Recruiter-Friendly Honesty**: Zero exaggerated claims, zero fake years of experience, zero fabricated metric bars or fake companies.
- **Dedicated Fresher Sections**:
  - **Training**: 6 Months Hands-on Full Stack Development Training at KodNest Technologies, Bangalore.
  - **Internships Status**: Clear statement that you are seeking your first professional opportunity.
  - **Projects**: Academic and technical systems with detailed breakdowns and an interactive details modal.
  - **Resume**: Direct PDF viewing and downloading from `assets/Greeshmitha_Resume.pdf`.
  - **Contact**: Clean form with direct `mailto:` pre-composition (no fake success states).

---

## ⚙️ Customization & Updating Links

### 1. Photo & Resume
- Place your photo at: `assets/greeshmitha-profile.jpg`
- Place your resume PDF at: `assets/Greeshmitha_Resume.pdf`

### 2. Social & Contact Details
To update your personal links, open `index.html` and edit:
- **GitHub**: Search for `https://github.com` and replace with your profile URL.
- **LinkedIn**: Search for `https://linkedin.com` and replace with your profile URL.
- **Email**: Update `greeshmithavagalla@gmail.com` in:
  - `index.html` (Hero, Contact, and Footer)
  - `script.js` (inside the `contactForm` listener)

---

## 🚀 How to Run Locally

You can run this website on any machine without extra build tools:

1. **Direct Browser Preview**:
   - Double-click `index.html` or drag it into any web browser (Chrome, Edge, Firefox).

2. **Using VS Code Live Server**:
   - Right-click `index.html` and choose **Open with Live Server**.

3. **Using Node / Python HTTP Server**:
   ```bash
   # Python 3
   python -m http.server 8000
   # Then visit http://localhost:8000 in your browser
   ```
