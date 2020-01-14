---
layout: page
title: Empty template 
description: Template to copy and fill with content
permalink: /:collection/empty_template
weight: 1
---

### Writing a description
In this section... / this section gives an overview.../ the following section is about..

1. Open the xyz. 
2. Click **[OK]**. The window "Window Name" opens.

#### To check the connection
This is a random H4 heading.

-----------

### Marking the elements
This is an ordered list.
1. Click **[Edit]** (Buttons: bold & square brackets)
2. Click **Subscriptions** (URL buttons: bold)
3. Enter the name the field **Name** (Fields within a window: bold)
4. Enter the value *123* (entered values: italics)

When an instruction contains images with position numbers, make sure to address the position numbers in the text in brackets.
1. Click **[Add]** (1).
2. Choose the type e.g., *String* out of the drop-down menu (2).
![ODP Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}

Don't use a return before images in instructions to make sure that the image is in the same line as the steps.

------

### Markings in the text
This is an unordered list for items where the order is not important.
- Buttons: bold & square brackets - **[Edit]** 
- URLbuttons: just bold - **Subscriptions**
- Fields within a window: bold - **Name** 
- Input values: italics - *MATNR*
- Drop-down menu options: italics - *EC5* 

------

### Tables

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

------

### Notes, Warnings etc.

#### Note:
<div class="alert alert-info">
  <i class="fas fa-info-circle"></i> <strong>Note:</strong> The corresponding SQL command is generated dynamically and executed on the SAP server.</div>

#### Warning - not typical for function descriptions:
<div class="alert alert-warning">
  <i class="fas fa-exclamation-triangle"></i> <strong>Warning:</strong> 
  <!--Type & source of the problem, use bold and <br> --> <strong>Data loss</strong> <br>
  <!--- Cause with an explanation of the threat + <br>: ---> A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically.<br>
  <!---Remedy:--> Activate the debug logging only when necessary, e.g., upon request of the support team.
</div><br>

{: .box-warning }
**Warning! Data loss**<br>
A big amount of information is collected when ogging is activated. This can decrease the capacity of your hard drives dramatically.<br>
Activate the debug logging only when necessary, e.g., upon request of the support team.

#### Tip & Recommendation:
**Tip:** / **Recommendation:** This is a smart alternative. <br>

or <br>

<div class="alert alert-success">
  <i class="fas fa-lightbulb"></i> <strong>Tip:</strong> Basics of the product Xtract Universal are described in the section <a href= "https://help.theobald-software.com/en/xtract-universal/getting-started-table" class="alert-link">Getting Started with Table</a>.<br>
</div>

------

### Window, not ~~dialog~~

The window "Connection settings" opens.
<!--Die Bezeichnungen der Fenster soll in Anführungszeichen gesetzt werden-->
In the main menu bar of the designer there are additional adjustable settings:   **Servers > Settings**.
<!--Mit dem Symbol ">" können Menusprünge ausgedrückt werden-->

----

### Paths & URLs

#### URLs
For more information on defining of the extractions, see [Define an Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started-table/define-a-table-extraction) with the "SAP Table or View" component as an example.

#### Paths
`C:\Program Files\ERPConnect Services\ERPConnectServices.NintexWorkflowActions.exe`
#### Code
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```
### Examples - Blockquotes

>This is an example.



