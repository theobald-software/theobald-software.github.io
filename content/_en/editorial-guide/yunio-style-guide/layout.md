---
layout: page
title: Layout
description: LAyout
parent: editorial-guide
parent: yunio-style-guide
weight: 7
permalink: /:collection/:path
lang: en_GB
---


### Menu Container

The following rules apply to the menu containers:
- containers are left-justified at the same horizontal point as the page title (1).
- space between container and text (top and left) is `20px`, see definition in `main.css`.
- every container includes an H3 headline (2).
- the last containers on a page level evenly (3).

<!---
Definition in `main.css`:
	```css
	main h3,
	main p {
		padding-left: 20px;
	}

	main h3 {
		margin: 20px 0 0;
	}
	```
-->

Example:

![Containers](/img/content/help_concept/yunIO/even-containers.png){:class="img-responsive"}

### Headlines

Menu containers use the following headlines:
- H3 for section titles (mandatory for every menu container)
- H4 headlines in descriptions (used for descriptions of dropdown menu options)

H3 color: `--dark_blue`<br>
H3 text size: `18px`

H4 color: `--dark_blue`<br>
H4 text size: `13px`

Example:

![Headlines](/img/content/help_concept/yunIO/new-h4-definition.png){:class="img-responsive" width="400px"}

Definition in `index.css`:

```css
.h3 {
   font-family: poppinsBold;
   color: var(--dark_blue);
   font-size: 18px;
}

.h4 { 
   margin-bottom: 0;
   color: var(--dark_blue); 
}
```


### Descriptions

Color: `--text_help_gray`<br>
Text size: `13px`

Definition in `details-grid.css`:

```css
.details-grid p {
    line-height: 19px;
    letter-spacing: 0.01em;
    color: var(--table_gray);
}

.details-grid-description {
    margin: 0 15px 0 0;
    max-width: 380px;
}
```

### Input Fields

#### Labels

Color: `--text_help_gray`<br>
Text size: `11px`

Definition in `details-grid.css`:

```css
.details-grid-fields-header {
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: var(--text_help_gray);
}
```

#### Text Input

Color: `--black`<br>
Text size: `13px`

Definition in `index.css`:

```css
input:not([type=checkbox]):not([type=radio]):not([type=color]):not([type=button]),
textarea {
    display: block;
    padding: 0.8rem 1rem;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid var(--text_line);
    font-size: 13px;
    font-family: inherit;
    line-height: 19px;
    letter-spacing: 0.01em;
    padding-left: 0;
}
```

### Buttons

Text color: `--white`<br>
Text size: `13px`

Button color: `--dark_blue`<br>
Button size: `padding: 10px 30px`

Definition in `main.css`:

```css
.button {
    background: var(--dark_blue);
    color: var(--white);
    font-size: 13px;
}
```

### Dropdowns

Text size: `13px`<br>
Text color: `--table_gray`

Box size: same as [buttons](#buttons)

### Checkboxes

The following rules apply to checkboxes and radios:
- labels are left of the checkbox
- labels align to the center of the checkbox
- the space between checkbox and label is `5px`
- the text color of the label is `--text_help_gray`
- the text size of the label is `11px`

Example:

![Checkboxes](/img/content/help_concept/yunIO/checkbox.png){:class="img-responsive"}

Definition in `index.css`:

```css
[type="checkbox"],
[type="radio"] {
    width: 1.6rem;
    height: 1.6rem;
}
```

### Tables

The following rules apply to tables:

- text aligns left
- table headers and table content is divided by a horizontal line `<hr>`

Color of table header: `--text_help_gray`<br>
Text size of table header: `13px`

Color of table content: `--table_black`<br>
Text size of table content: `13px`

Definition in `main.css`
```css
table {
    color: var(--table_gray);
    background: var(--white);
    border-collapse: collapse;
}
```

Definition in `index.css`
```css
table {
    width: 100%;
    border: none;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: left;
}

td,
th {
    vertical-align: middle;
    padding: 1.2rem 0.4rem;
}
```
