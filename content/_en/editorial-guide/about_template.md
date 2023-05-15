---
layout: page
title: Template for creating online help content
description: Explanation and descripion of the template
parent: editorial-guide
permalink: /:collection/:path
weight: 1
lang: en_GB
progressstate: 5
---
### About the template
To maintain the constant formatting, follow the guidelines described in this document template.
The [empty template](./empty_template) to copy and fill with content is located in the repository under `content/_en/editorial-guide/empty_template`.

-----------

### About the introduction information
Especially for "landing pages" that are placed before a bigger section it is advisable to write an introduction:
In the following section... / the following section gives an overview.../ the following section is about...

Keep in mind that function descriptions differ textually and in terms of formatting from the procedural tasks - a reader must see, if there is a todo immediately.
<!--Einleitung und kurze Einführung worum es im Folgenden geht, bitte kein "Will"-Future verwenden-->

### Headings
The correct headers for the page is H3 (###) and H4 (####) for the subsections. Don't only use bold, otherwise the anchors cannot be set at all. 

Example:

#### To check the connection
<!--Unterüberschrift H4. Optional, wird gesetzt wenn es sinnvoll ist.
Formulierung:  Das Verb mit to (z.B. To check the connection) -->

Suitable titles for function descriptions are "About xyz" or a noun "Requirements" <br>
Suitable titles for tasks & procedures are verb+ing or verb with "to":
 - Inserting data (for H3)
 - To configure AnySQL Maestro (for H4)
 
-----------

### About function descriptions
<!--Unterüberschrift. Optional, wird gesetzt wenn es sinnvoll ist-->
This section / part of text does not contain any procedural steps.
Make sure to keep the product descriptions separate from the instructions with steps, when possible.
Each author needs first to consider whether he wants to describe the product or a part of it or a function (e.g., architecture or use case) or whether he wants to show the user steps for performing a particular task. <br>
This division needs to be considered per section.
If it makes sense to incorporate description in one subsection and procedural steps in the other subsection within the document, the author is free to do so.

<!--Die Produktbeschreibungen sollen möglichst getrennt von den Handlungsanweisungen gehalten werden. 
Jeder Autor sollte zunächst überlegen, ob er eine Funktion beschreiben will (z.B. Architektur oder Use Case)
oder ob er dem Benutzer Schritte aufzeigen will, damit er eine bestimmte Aufgabe Ausführen kann. 

-----------

### Creating procedural instructions
This section should contain no or only short descriptions. Ordered lists should be used for steps.
<!---Überschrift 3, bitte nicht nur fett verwenden, sonst können die Anker gar nicht gesetzt werden-->
<!-- Handlungsanweisungen sollten möglichst getrennt von den Produktbeschreibungen gehalten werden.
<!--Überschriften für Handlungsanweisungen mit Schritten sollten möglichst einen Verb haben.-->

Example for a procedure with steps:
1. Open the xyz. <!--OL für die Schritte-->
2. Click **[OK]**. The window "Window Name" opens. (Intermediate result) <!--- intermediate result--->
3. Close the xyz. <br> The table is extracted. (Result)

<!--Eine Ergebnisangabe hilft dem Nutzer die Sicherheit zu haben, dass er alles richtig macht-->
Results or intermediate results supports the user orientation within the help.
When an instruction contains images with position numbers, make sure to address the position numbers in the text in brackets.

Example:

1. Click **[Add]** (1).
2. Choose the type e.g., *String* out of the drop-down menu (2).
![ODP Add parameters](/img/content/odp/odp-settings-add-parameters.png){:class="img-responsive"}

Reference symbol buttons with small images, e.g., "Click on the dustbin icon ( ![dustbin](/img/content/icons/trashbin.png) )."

{: .box-note }
**Note** <br> When placing an image within a text block, make sure to place a break and an additional return to mainain space between the text and the image.
When placing an image within a list (OL or UL) avoid breaks and returns after a list item to maintain the proper formatting: images in the same horizontal line as the numbers or bullet points.

-----------

### Markings in the text
The ULs (unordered lists) are used for listing the elements, when the order is not important.<br>
The OLs (ordered lists) are used for instructions and steps, if possible.
<!--Eine UL (unordered list) wird für die Auflistung verwendet. OL (ordered list) soll möglichst für Handlungsanweisungen und Schritte verwendet werden s. anderes Template-->
- Buttons: bold & square brackets - **[Edit]** 
- URL buttons: just bold - **Subscriptions**
- Fields within a window: bold - **Name** 
- Input values: italics - *MATNR*
- Drop-down menu options: italics - *EC5* 
- Tabs: italics - *Exports*

### Tables
<!---Einfache Tabellen verwenden, Markierungen in Tabellen möglichst vermeiden-->
Keep the tables simple. No markings (bold, italics etc.) in tables, when possible.

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

-----------

### Notes, Warnings etc.
There are three main types of warning messages with the corresponding colors.

Signal word| Color
------------ | -------------
Note |Blue
Warning | Yellow
Tip| Green
Recommendation | Green

See also additional info on boxes in the [markdown example](./markdown-example).

{: .box-warning } 
**Warning! Formatting issues**<br>
Make sure to leave space before and after the info boxes, otherwise the whole text will be incorporated in the box.

#### Note:
Notes is additional information and can be formulated freely.
 <!--Note /Hinweis ist eine zusätzliche Information.-->

Example:

 {: .box-note }
**Note:** The corresponding SQL command is generated dynamically and executed on the SAP server.

#### Warning - not typical for function descriptions:
The general guideline is to not use many "Warnings" as the less "Problems" the product can cause, the better is the product. The warning **must** be placed in front of the possible issue and not after.
If possible, the warning note needs to be formulated according to the following principle:
- Type & source of the problem, use bold and break;
- Cause with an explanation of the threat, break;
- Remedy with steps to avoid the threat.

<!-- Dieser Block wird später von Erwin programmiert und kann leichter befüllt werden. 
Warning / Warnung wird verwendet, wenn beim Missachten etwas tatsächlich passieren kann. z.B. Datenverlust. Dieser Hinweis wird öfter in den Handlungsanweisungen verwendet.
Der Warning-Hinweis soll möglichst nach dem folgenden Prinzip formuliert werden:
- Type & source of the problem, use bold and <br>:
- Cause with an explanation of the threat + <br>:
- Remedy:
 -->
Example:

{: .box-warning }
**Warning! Data loss** A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically. <br> Activate the debug logging only when necessary, e.g., upon request of the support team.
 <!--Type & source of the problem, use bold and <br> -->
 <!--- Cause with an explanation of the threat + <br>: ---> 
 <!---Remedy:-->

#### Tip & Recommendation:
Tips and recommendations can be formulated freely. <br>

>Example:

{: .box-tip }
**Tip:** This is a tip.

Tips can be an alternative solution or additional information. For example, this can also be looked up in SAP using this transaction.

<!--Soll verwendet werden, wenn es um eine alternative Lösung sich handelt oder etwas zusätzliches angesprochen werden kann. z.B. dies kann über diese Transaktion auch in SAP nachgeschaut werden. Wenn es soweit ist, stellt Erwin ein grünes Kästchen für die Tipps und Empfehlungen zur Verfügung--> <br>

{: .box-tip }
**Recommendation:** This is a recommendation.<br>

A recommendation from Theobald Software is a piece of information that comes from the experience of the team or from best practices. Make sure to avoid "we" and "our" when formulating recommendations.
<!--Eine Recommendation von Theobald Software, die aus der eignen Erfahrung oder aus Best Practices kommt - hiermit wird das "we" und "our" vermieden-->

------

### Window, not ~~dialog~~

The window "Connection settings" opens. The designations or titles of the windows needs to be put into quotation marks.
<!--Die Bezeichnungen der Fenster soll in Anführungszeichen gesetzt werden-->
In the main menu bar of the designer there are additional adjustable settings:   **Servers > Settings**.
The symbol ">" can be used to demonstrate menu jumps. 
<!--Mit dem Symbol ">" können Menusprünge ausgedrückt werden-->

----

### Paths & URLs
When inserting links it is recommended to use relative links
Example: 
![Link](/img/content/help_concept/link.png){:class="img-responsive"}

<br>
*remove spaces 

#### URLs
Don't use the "full qualified URLs". Square brackets have to contain a meaningful description, not just "click here" or "click me".

For more information on defining of the extractions, see [Define an Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction) with the "SAP Table or View" component as an example.

<!-- Nicht den "full qualified URL" verwenden.
In den eckigen Klammern soll eine sinnvolle Bezeichung stehen, nicht z.B. nur "hier" oder "Klick mich".-->
#### Paths
Paths need to be marked with the element Inline Code. If it makes sense, the paths can be placed into a new line, by using break.

You find the installation file in the following folder:

`C:\Program Files\ERPConnect Services\ERPConnectServices.NintexWorkflowActions.exe`

<!--Pfade sollen mit dem Element `Inline Code` markiert werden. Wenn es sinnvoll ist, können die Pfade eingerückt werden--->

-----------

#### Code
Code has to be marked with the element Inline Code.

Use also the automatic highlighting of keywords based on programming language:

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

```sql
UPDATE [dbo].[KNA1] 
SET [Extraction_Date] = '#{DateTime.Now}#' 
WHERE [Extraction_Date] IS NULL;
```

<!--Code soll mit dem Element inline code ausgezeichnet werden-->

#### Error messages
Use code blocks for error messages.

```
This statement only works with lib:// paths in this script mode.
```




