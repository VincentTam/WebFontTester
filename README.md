# 📝 Web Font Tester

A lightweight, single-page utility to live-test web fonts (`.woff2`, `.ttf`, `.otf`) before installing them on your system or integrating them into projects. 

This tool was specifically built to verify **Cantonese and Traditional Chinese** glyph coverage, ensuring that specialized characters (like 喺, 咗, 嗰) render correctly without "Tofu" boxes.

## 🚀 Live Demo
https://vincenttam.github.io/WebFontTester

## ✨ Features

- **Instant Preview**: Inject any font URL and see results across multiple technical test cases.
- **GitHub Link Auto-Conversion**: Automatically converts standard GitHub "blob" URLs into "raw" content links so they load correctly in the browser.
- **CJK Optimized**: Includes specific strings for HK/Cantonese particles and CJK Extension ideographs.
- **Editable Sandbox**: A dedicated area to type and test specific phrases in real-time.
- **Responsive Design**: Test how fonts look on different screen sizes.

## 🛠 How to Use

1. **Get a Font URL**: Find a link to a font file.
   - *Example*: `https://github.com/user/repo/blob/main/font.ttf`
2. **Paste & Apply**: Paste the link into the input field. The tool will handle the GitHub raw conversion for you.
3. **Verify Coverage**: 
   - Check the **Cantonese** section for local particles.
   - Check the **Extension** section for rare characters.
   - Check the **Latin** section for kerning and numeral alignment.

## ⚠️ Important: CORS & Loading

Most browsers block font loading from random domains due to **CORS (Cross-Origin Resource Sharing)** security. 
- **Recommended**: Use CDNs like [jsDelivr](https://www.jsdelivr.com/) or GitHub Raw links.
- **Troubleshooting**: If a font fails to load, check the browser console (`F12`). If you see a "CORS" error, the server hosting the font does not allow direct browser linking.

## 📂 Installation for customization

Since this is a client-side tool, no installation is required. Just clone the repo and open `index.html` in any modern browser.

```bash
git clone https://github.com/VincentTam/WebFontTester.git
```
