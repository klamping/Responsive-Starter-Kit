# Responsive Starter Kit

A stripped down, but highly functional, toolkit to help jump-start a typical responsive web design project. Sample HTML files included to demonstrate possible layouts: style guide/sampler, left sidebar, right sidebar, full width, sample form, and audio/video transcript.

Plugins and polyfills can be easily added to include support for features such as data tables, content carousels, embedded videos, modal dialogs, touch detection, etc. As well, all CSS is included without the aid of a CSS pre-processor (LESS, Sass, others). This is a bare bones starter kit to help you get started. Those handy items can be added later as needed.

There's a basic *theme.css* file in the *assets/style* directory. Feel free to edit, or even delete, this file as needed. It's been included for demonstration purposes only. It's not intended to influence visual and/or user experience design preferences.

## General ##

* **Responsive** layout with a fluid/elastic grid, not *adaptive* with multiple fixed-width breakpoints
* Prefererence for **readability over compression** for HTML and CSS coding style; can minify using CSS pre-processor (or server) - http://isobar-idev.github.com/code-standards/

## HTML ##

* Modified version of *HTML5 Reset v2* by Tim Murtaugh - http://html5reset.org/
* Uses the new HTML5 section tags: HEADER, FOOTER, NAV, SECTION, ARTICLE, ASIDE
* Doesn't use the new HTML5 outline algorithm
* Doesn't use XHTML-style trailing "space and slash" on self-closing elements such as INPUT, META, IMG, BR, HR, etc.
* Meta viewport tag set to "width=device-width, initial-scale=1.0" (causes a documented iPad orientation change zoom bug)

## CSS ##

* Mobile first technique emphasizing **progressive enhancement**
* Proportional media queries - http://blog.cloudfour.com/the-emshave-it-proportional-media-queries-ftw/
* Don't Overthink It Grids - http://css-tricks.com/dont-overthink-itgrids/
* Column widths use %, fixed-width gutters use px, fonts use em, images use "max-width: 100%" and "height: auto"
* *Box-sizing: Border-box* for everything - http://paulirish.com/2012/box-sizing-border-box-ftw/
* Uses unitless line-heights for typography - http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/

## IE 8 ##

* Includes *Respond.js* and *HTML5shim/v* for media query support

## Accessibility ##

* Semantic HTML throughout
* WAI-ARIA Landmark Roles: banner, navigation, main, complementary, contentinfo - http://a11yproject.com/posts/aria-landmark-roles/
* Forms include LABELs and TITLEs on INPUT fields
* Alt text for images, unless no content conveyed - http://a11yproject.com/posts/alt-text/
* Doesn't include "maximum-scale=1.0" in META VIEWPORT tag - http://a11yproject.com/posts/never-use-maximum-scale/

## Recommended Add-ons ##

The following is a list of add-ons (plugins) that can be added easily for additional functionality.

* Zurb Responsive Tables (for data tables) - https://github.com/zurb/responsive-tables
* Riloadr (images, including Retina and scroll position support) - https://github.com/tubalmartin/riloadr
* FitVids (videos) - https://github.com/davatron5000/FitVids.js
* fancyBox (modal dialogs) - https://github.com/fancyapps/fancyBox
* WooThemes FlexSlider (content carousel) - https://github.com/woothemes/FlexSlider
* Modernizr (feature detection) - https://github.com/Modernizr/Modernizr