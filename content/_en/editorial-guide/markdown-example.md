---
layout: page
title: Markdown Example
description: Markdown Example
parent: editorial-guide
permalink: /:collection/:path
weight: 0
lang: en_GB
---

This page contains almost all elements that can be used for pages.
Check out the source of this page to see how it is made.
(markdown tutorial and cheatsheet link)

For information regarding the site architecture and other things besides content, please visit the github project and read the README file.

### Including content
To write content that has to be easily injectable in other pages, navigate to the folder __includes_ and then the folder __content_.
There will be folders for every language, as content is language specific. Go to the correct folder and make a new file there.
You can name it anything, as long as it ends with _.md_ . Make sure there is no so-called Front Matter in the file, which are the --- lines at the top of content pages.
To inject it in a page, use the include tag with the file path like so:

`{``%`` include _content/en/example-content.md ``%``}`

This results in the following:<br>
{% include _content/en/example-content.md %}

### Table of content

This table of content element is not to list all sections of the current page, but rather to list all children pages.
This can be done the same way as including content, but using the path `_content/table-of-contents.html`. 
It is not in a language folder because it is not language specific and is rendered with the page's titles themselves.

### Code
Including code can be done with the highlight tag. It also takes a parameter for the language that the code is written in.
Refer to [this github page](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers) to see all supported languages.

A code block can be added with the following: <br>
<pre>``` c# 
some code
``` </pre>

Example:

``` c#
using(R3Connection con = new R3Connection())
{
    con.UserName = "steffan";
    con.Password = "DontBeSoCurious";
    con.Language = "EN";
    con.Client = "800";
    con.Host = "ec5.theobald-software.com";
    con.SystemNumber = 00;
    con.Protocol = ClientProtocol.NWRFC;
    con.Open(false);
}
```

### Info boxes
A specific element that can be inserted is the information box. This can be used to highlight information in a certain way.
For the include method, the contents can be captured or directly placed inside quotations inside the include statement.
For the simplified method, make sure the content is directly after the tag. All other content should at least have a distance of 1 white line.

#### Note box

Include method:

{% capture text %}This is a note box{% endcapture %}
{% include _content/infobox.html type="note" text=text %}

Simplified method: 
<pre>
{: .box-note }
**Note:** This is a note box (shortcode version)
</pre>

{: .box-note }
**Note:** The shortcode version can contain '**Note:**' but it has to be written explicitly.

#### Warning box

Include method:

{% capture text %}This is a warning box<br>It can contain multiple<br>lines of text.{% endcapture %}
{% include _content/infobox.html type="warning" text=text %}

Simplified method:
<pre>
{: .box-warning }
**Warning!** The shortcode version can also contain '**Warning!**' but it has to be written explicitly.
</pre>

{: .box-warning }
**Warning!** The shortcode version can also contain '**Warning!**' but it has to be written explicitly.

#### Recommendation / Tip box

Include method:

{% include _content/infobox.html type="recommendation" text="This is a recommendation box" %}

Note: 'recommendation' is the same as 'tip' and are interchangeable.

Simplified method:
<pre>
{: .box-tip }
**Tip:** The shortcode version can also contain '**Tip:**' but it has to be written explicitly.
</pre>

{: .box-tip }
**Tip:** The shortcode version can also contain '**Tip:**' but it has to be written explicitly.

### Tables
Tables are styled in a specific way, but this will happen automatically.

<pre>
| Number | Next number | Previous number |
| :------ |:--- | :--- |
| Five | Six | Four |
| Ten | Eleven | Nine |
| Seven | Eight | Six |
| Two | Three | One |  
</pre>

Example:

| Number | Next number | Previous number |
| :------ |:--- | :--- |
| Five | Six | Four |
| Ten | Eleven | Nine |
| Seven | Eight | Six |
| Two | Three | One |  
  
### Images  
Images should be saved in the `/img/content` folder.

To make it a specific size, add height="200px" and width="200px". Be aware that if a big size is used and the image is viewed on mobile,
it does shrink to the screen size (to prevent sideways scrolling), but does not scale proportionally, which gives an unwanted effect.
As such, it is advised that if height and width are added, the class img-responsive is also added, so it will scale proportionally on small screens.

<pre>
![Benjamin Bannekat](https://octodex.github.com/images/bannekat.png){:height="200px" width="200px" class="img-responsive"}
</pre>

![Benjamin Bannekat](https://octodex.github.com/images/bannekat.png){:height="200px" width="200px" class="img-responsive"}

To only make them responsive, and thus screen-filling, only add class="img-responsive".

<pre>
![Benjamin Bannekat](https://octodex.github.com/images/bannekat.png){:class="img-responsive"}
</pre>

![Benjamin Bannekat](https://octodex.github.com/images/bannekat.png){:class="img-responsive"}

### Icons

Icons should be saved in the `/img/content/icons` folder.<br>
Most icons have a size 16x16 pixels or 18x18 pixels, e.g., ![dustbin](/img/content/icons/trashbin.png){:class="img-responsive" style="display:inline"}.
Icons can be integrated in flowing text via `style="display:inline"`.

<pre>
![dustbin](/img/content/icons/trashbin.png){:class="img-responsive" style="display:inline"}
</pre>

### Redirection Links

When moving/deleting .md files or changing the name of the files, a redirection link can be added to the front matter of the file to redirect from the old file to the new file.
Use redirection links for pages that are used regularly by 3rd parties. <br>
Example: KNIME offers a documentation that contains links to our Online Help and that is integrated into the KNIME software (offline). 
If one of those links changes due to editing .md files, a redirection link must be added. Otherwise KNIME needs to release a new software version to correct broken links.

To redirect deprecated links, use the following command in the front matter of the edited .md file:
<pre>
redirect_from:
  - product/old-file-name
</pre>

List of documentation links in KNIME (last updated March 2023):
-	https://help.theobald-software.com/en/xtract-universal/introduction/requirements
-	https://help.theobald-software.com/en/xtract-universal/advanced-techniques/metadata-access-via-http
-	https://help.theobald-software.com/en/xtract-universal/destinations/csv-via-http
-	https://help.theobald-software.com/en/xtract-universal/destinations/csv-via-http#convert--encoding
-	https://help.theobald-software.com/en/xtract-universal/introduction/sap-connection#authentication
-	https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/extraction-parameters
-	https://help.theobald-software.com/en/xtract-universal/advanced-techniques/user-defined-variables
-	https://help.theobald-software.com/en/xtract-universal/destinations/csv-via-http#csv-settings
-	https://help.theobald-software.com/en/xtract-universal/destinations/csv-via-http#convert--encoding


### Conditional Text

Conditional content can be used in [included content](#including-content) to change text and screenshots according to the product or component that the content is included in.

Example: The BWCube component exists in multiple Xtract products, but uses different screenshots.
The screenshots can be linked to a condition that checks the product name, so that only the screenshot for that product is displayed.
This way you can use a single included content file for multiple products and reduce maintenance.

All objects in the front matter of .md files are available for conditions. This includes: ref, layout, title, product, parent, childidentifier, weight and others.<br>
You can use `if`, `or` and `elsif` logic using the following format:

`{``% if page.product == "xtract-is" %} Use SSIS variables`
`{``% elsif page.product == "xtract-universal" %} Use runtime parameters`
`{``% endif %}`

`{``% if page.product == "xtract-universal" or page.product == "board-connector" %} some text``{``% endif %}`


Example:<br>
{% if page.parent == "editorial-guide" %} This text is only displayed in files that belong to the parent "editorial-guide".{% endif %}

### Animations

Record, format and process animations in Camtasia 2020. 
- use a 12 frames per second GIF format.
- use the following settings for cursor click effects:<br>
![camtasia settings](/img/content/camtasia.png){:class="img-responsive"}

Animations can be added the same way as images.<br>
If necessary, use `style="border:1px solid black` to add a black border to the animation:
<pre>
![Report-Animation](/img/content/Report.gif){:class="img-responsive" style="border:1px solid black;"}
</pre>

Example: 
![yunIO-transaction-parameters](/img/content/yunio/va02param.gif){:class="img-responsive"}

### Icons

Icons can be used in the following manner:

Click ![trashbin](/img/content/icons/trashbin.png) to delete an entry.

Additional clarification that an icon is an icon is unnecessary. Make sure not to write "click on".