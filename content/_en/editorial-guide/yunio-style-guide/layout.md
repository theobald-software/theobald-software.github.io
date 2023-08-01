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
- space between container and text (top and left) is 20px, see definition in `main.css`.
- every container includes an H3 headline (2).
- the last containers on a page level evenly (3).

<!---
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

Menu containers use the following headlines
- H3 for section titles (mandatory for every menu container)
- H4 headlines in descriptions (used for descriptions of dropdown menu options)

Example:

![Headlines](/img/content/help_concept/yunIO/new-h4-definition.png){:class="img-responsive" width="400px"}

Definition in `index.css`:

<table>
  <tr>
    <th>H3</th>
    <th>H4</th>
  </tr>
  <tr>
    <td><pre>
.h3 {
   font-family: poppinsBold;
   color: var(--dark_blue);
   font-size: 18px;
}	</pre></td>
    <td><pre>
.h4 { 
   margin-bottom: 0;
   color: var(--dark_blue); 
   
}
</pre></td>
  </tr>
</table>


### Descriptions

Color: `--text_help_gray`<br>
Text size:

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

### Text Input


### Buttons

<!---
.main-header-button,
.delete-header-button {
    display: inline;
    vertical-align: middle;
    padding: 12px 42px;
    border-radius: 4px;
    background: var(--dark_blue);
    color: var(--white);
    font-weight: bold;
}


.delete-header-button {
    height: 45px;
    margin-right: 5px;
    padding: 12px 25px;
    background: transparent;
    color: var(--dark_blue);
    border: 1px solid var(--dark_blue);
}

.cancel-header-button {
    padding: 12px 25px;
    height: 45px;
    margin-right: 5px;
}
-->


Definition of menu buttons:
```css
.button {
    background: var(--dark_blue);
    color: var(--white);
    font-size: 13px;
    padding: 10px 30px;
}
```


### Dropdowns

font-size: 13px;

### Checkboxes

The following rules apply to checkboxes:
- labels are left of the checkbox
- labels align to the center of the checkbox
- the text color of the label is `--text_help_gray`
- the text size of the label is `11px`

Example:

![Checkboxes](/img/content/help_concept/yunIO/checkbox.png){:class="img-responsive"}



### Tables
```css
table {
    color: var(--table_gray);
    background: var(--white);
    border-collapse: collapse;
}
```
