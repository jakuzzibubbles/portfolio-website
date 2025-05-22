# Localization extraction – learnings & key takeaways

This document summarizes the main insights gained during the process of extracting and structuring German-language website content into a JavaScript object suitable for internationalization (i18n) use.

## Learnings

### 1. Structuring translations as javascript objects
Translating raw HTML content into a nested JavaScript object forces a clear structure and logical grouping of content (e.g., `section -> headline -> paragraph`). This is essential for using translation files effectively in modern frontend frameworks.

### 2. Semantic structure alignment
It’s not enough to translate content word-for-word. The content structure in each language must mirror the original. Any mismatch in the semantic structure (e.g., missing or renamed keys) breaks the integrity of multilingual switching mechanisms.

### 3. Content-code separation
Extracting text into a structured language file separates content from code. This decoupling improves maintainability, especially in teams or projects involving content editors and developers.

### 4. Scalable multilingual setup
Using language keys (`de`, `en`, etc.) as top-level namespaces sets the foundation for scalable multilingual support. New languages can be added without touching the UI code.

## Key takeaway

> **Proper localization starts with structured, semantically aligned, and isolated content. Anything else leads to brittle, unscalable implementations.**

This approach enables reliable translation switching, easier content updates, and a maintainable architecture as the application grows.
