---
layout: page
title: Empty template 
description: Template to copy and fill with content
parent: editorial-guide
permalink: /:collection/:path
weight: 2
lang: en_GB
---
{: .box-note }
**Note** This is a template to download, copy and to comfortably fill out locally with content.


### Writing a description
In the following section... / the following section gives an overview.../ the following section is about..

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
5. Click on the dustbin icon ( ![dustbin](/img/content/icons/trashbin.png){:class="img-responsive" style="display:inline"} ) (icons: images)

When an instruction contains images with position numbers, make sure to address the position numbers in the text in brackets. 

1. Click **[Add]** (1).
2. Choose the type e.g., *String* out of the drop-down menu (2).
![ODP Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}

Don't use a return before images in instructions to make sure that the image is in the same line as the steps.


------

### Markings in the text
This is an unordered list for items where the order is not important.
- Buttons: bold & square brackets - **[Edit]** 
- URL buttons: just bold - **Subscriptions**
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

#### Note

{: .box-note }
**Note** The corresponding SQL command is generated dynamically and executed on the SAP server.

#### Warning

{: .box-warning }
**Warning! Data loss**<br>
A big amount of information is collected when logging is activated. This can decrease the capacity of your hard drives dramatically.<br>
Activate the debug logging only when necessary, e.g., upon request of the support team.

#### Tip & Recommendation:

{: .box-tip }
**Tip:** This is a tip.


{: .box-tip }
**Recommendation:** This is a recommendation.<br>

------

### Window, not ~~dialog~~

The window "Connection settings" opens.
<!--Die Bezeichnungen der Fenster soll in Anführungszeichen gesetzt werden-->
In the main menu bar of the designer there are additional adjustable settings:   **Servers > Settings**.
<!--Mit dem Symbol ">" können Menusprünge ausgedrückt werden-->

Dialog is another type of a window.
----

### Paths & URLs

`C:\Program Files\ERPConnect Services\ERPConnectServices.NintexWorkflowActions.exe`

#### URLs
For more information on defining of the extractions, see [Define an Extraction](#) with the "SAP Table or View" component as an example.

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



