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
Layout refers to the arrangement and organization of visual elements on a screen or page. It involves positioning and sizing various components such as text, images, buttons, and other interactive elements to create a visually appealing and user-friendly interface.

A good layout design considers factors like hierarchy, balance, spacing, and alignment to ensure that the interface is easy to navigate and understand. It helps users to quickly find the information they need and interact with the interface effectively.

### Containers

The following rules apply to the menu containers:
- containers are left-justified at the same horizontal point as the page title (1).<br>
![Containers](/img/content/help_concept/yunIO/even-containers.png){:class="img-responsive"}
- every container includes an H3 headline (2).
- the last containers on a page level evenly (3).
- space between container and text (top and left) is `20px`, see definition in `main.css`.

	```css
	main h3,
	main p {
		padding-left: 20px;
	}

	main h3 {
		margin: 20px 0 0;
	}
	```


### Headlines

Menu containers use the following headlines:
- H3 for section titles (mandatory for every menu container)
- H4 headlines in descriptions (used for descriptions of dropdown menu options)<br>
![Headlines](/img/content/help_concept/yunIO/new-h4-definition.png){:class="img-responsive" width="400px"}

H3 color: `--dark_blue`<br>
H3 text size: `18px`

H4 color: `--dark_blue`<br>
H4 text size: `13px`


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

The following rules apply to descriptions:
- descriptions are displayed on the left side of a container (1).<br>
Do not add buttons or other input options underneath the descriptions.
![Descriptions](/img/content/help_concept/yunIO/descriptions01.png){:class="img-responsive"}
- when a container is too small to divide descriptions and input to the left and right side, the descriptions are added at the top of the container (2).<br>
![Descriptions](/img/content/help_concept/yunIO/descriptions02.png){:class="img-responsive"}

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

The following rules apply to input fields:
- labels are placed above the text field.
- text fields use underscores. <br>
![Input](/img/content/help_concept/yunIO/text-input.png){:class="img-responsive"}

Label color: `--text_help_gray`<br>
Label text size: `11px`

Text input color: `--black`<br>
Text input size: `13px`

Definition of labels in `details-grid.css`:

```css
.details-grid-fields-header {
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: var(--text_help_gray);
}
```

Definition of text input in `index.css`:

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

The following definition only applies to buttons inside containers (1).<br>
Buttons outside containers (**[Save]**, **[Cancel]** and **[Delete]**) may use different colors and sizes (2).

![Buttons](/img/content/help_concept/yunIO/buttons.png){:class="img-responsive"}

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

<!---
Buttons outside containers use other .css definitions.
-->

### Dropdowns

The following rules apply to dropdowns:
- dropdown boxes have the same height as buttons.
- when there are multiple dropdowns in a container, they use the same width.<br>
![Dropdowns](/img/content/help_concept/yunIO/dropdowns.png){:class="img-responsive"}

Text size: `13px`<br>
Text color: `--table_gray`

### Checkboxes

The following rules apply to checkboxes and radios:
- labels are left of the checkbox
- labels align to the center of the checkbox
- the space between checkbox and label is `5px`

![Checkboxes](/img/content/help_concept/yunIO/checkbox.png){:class="img-responsive"}

Text size: `11px`<br>
Text color: `--text_help_gray`

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
- table headers and table content is divided by a horizontal line `<hr>`
- text aligns left<br>
![Checkboxes](/img/content/help_concept/yunIO/table.png){:class="img-responsive"}

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
