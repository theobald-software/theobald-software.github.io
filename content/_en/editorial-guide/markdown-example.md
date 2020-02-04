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

# Including content
To write content that has to be easily injectable in other pages, navigate to the folder __includes_ and then the folder __content_.
There will be folders for every language, as content is language specific. Go to the correct folder and make a new file there.
You can name it anything, as long as it ends with _.md_ . Make sure there is no so-called Front Matter in the file, which are the --- lines at the top of content pages.
To inject it in a page, use the include tag with the file path like so:

{% highlight html %}{% include _content/en/example-content.md %}{% endhighlight %}

Which results in the following:

{% include _content/en/example-content.md %}

# Including a table of content

This table of content element is not to list all sections of the current page, but rather to list all children pages.
This can be done the same way as including content, but using the path "_content/table-of-contents.html". 
It is not in a language folder because it is not language specific and is rendered with the page's titles themselves.

# Including code
Including code can be done with the highlight tag. It also takes a parameter for the language that the code is written in.
Refer to [this github page](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers) to see all supported languages.

A code block can be added with the following:

{% highlight liquid %}

{% raw %}{% highlight html %}
  <html></html>
{% endhighlight %} {% endraw %}

{% endhighlight %}

# Elements
## Info boxes
A specific element that can be inserted is the information box. This can be used to highlight information in a certain way.
For the include method, the contents can be captured or directly placed inside quotations inside the include statement.
For the simplified method, make sure the content is directly after the tag. All other content should at least have a distance of 1 white line.

### Note box

#### Include method

{% capture text %}This is a note box{% endcapture %}
{% include _content/infobox.html type="note" text=text %}

#### Simplified method

{: .box-note }
This is a note box (shortcode version)

{: .box-note }
**Note:** The shortcode version can also contain '**Note:**' but it has to be written explicitly.

### Warning box

#### Include method

{% capture text %}This is a warning box<br>It can contain multiple<br>lines of text.{% endcapture %}
{% include _content/infobox.html type="warning" text=text %}

#### Simplified method

{: .box-warning }
This is a warning box (shortcode version)<br>It can contain multiple<br>lines of text.

{: .box-warning }
**Warning!** The shortcode version can also contain '**Warning!**' but it has to be written explicitly.

### Recommendation / Tip box

#### Include method

{% include _content/infobox.html type="recommendation" text="This is a recommendation box" %}

Note: 'recommendation' is the same as 'tip' and are interchangeable.

#### Simplified method

{: .box-tip }
This is a tip box (shortcode version). There is no equivalent for recommendation as the styling is identical.

{: .box-tip }
**Tip:** The shortcode version can also contain '**Tip:**' but it has to be written explicitly.

## Tables
Tables are styled in a specific way, but this will happen automatically.

| Number | Next number | Previous number |
| :------ |:--- | :--- |
| Five | Six | Four |
| Ten | Eleven | Nine |
| Seven | Eight | Six |
| Two | Three | One |  
  
## Images  
Images should be saved in the /img/content folder.

To make it a specific size, add height="200px" and width="200px". Be aware that if a big size is used and the image is viewed on mobile,
it does shrink to the screen size (to prevent sideways scrolling), but does not scale proportionally, which gives an undesired effect.
As such, it is advised that if height and width are added, the class img-responsive is also added, so it will scale proportionally on small screens.
  
![Benjamin Bannekat](https://octodex.github.com/images/bannekat.png){:height="200px" width="200px" class="img-responsive"}

To only make them responsive, and thus screen-filling, only add class="img-responsive".

![Benjamin Bannekat](https://octodex.github.com/images/bannekat.png){:class="img-responsive"}

|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
|4.0.13 [M]|2020-01-31|Server|Fix for extracting binary values via BAPI, OHS & Query (...unable to cast...)|
|4.0.12 [L]|2019-12-19|DeltaQ|Fix for scripted expressions in selections|
|4.0.11 [M]|2019-12-18|Server|Fix for server not accepting any connections after 99h runtime|
|[4.0.10 [H]](https://kb.theobald-software.com/release-notes/BOARDConnector-4.0.10.html)|2019-12-03|ODP|Several fixes (Bugs introduced in 4.0.8.9)([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-4.0.10.html))|
|4.0.9 [L]|2019-11-14|Table Join|Fixes for creating deprecated Table Join extractions|
|4.0.8 [M]|2019-11-05|Server|Fixed a bug that caused column names to be converted to UPPERCASE which caused problems for Hierarchy, Report and DeltaQ extractions|
|[4.0.7 [M]](https://kb.theobald-software.com/release-notes/BOARDConnector-4.0.7.html)|2019-10-23|Table|Several fixes and improvements([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-4.0.7.html))|
|4.0.6 [L]|2019-10-08|Server|Fixed a bug that caused the servers to crash when clients closed the connection before it could be handled|
|4.0.5 [L]|2019-09-20|Server|Fixes for chaching results of Table (Compression FM) and ODP (non-Hierarchy)|
|4.0.4 [M]|2019-09-06|Table|Fixed a bug that caused scripted expressions to not be evaluated for the preview|
|4.0.3 [M]|2019-09-04|Server|Fixed a bug that could cause some of multiple simultaneous extraction starts to fail |
|4.0.2 [L]|2019-08-20|General|Fix for converting date format of old (e. g. 2.12.6.1) extractions|
|4.0.1 [M]|2019-08-12|General|Fixed config conversion for primary keys when upgrading from versions before 4.0|
|[4.0.0 [M]](https://kb.theobald-software.com/release-notes/BOARDConnector-4.0.0.html)|2019-08-08|General|This release contains general changes, changes to the existing Table component as well as a new ODP component.([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-4.0.0.html))|
|3.7.8 [M]|2019-07-23|General|Updated NW RFC to 7.50 PL 4|
|3.7.7 [L]|2019-06-25|General|Updated product icon|
|3.7.6 [M]|2019-06-03|Server|Fixes & improvements for logging|
|3.7.5 [M]|2019-06-03|General|Fixes & improvements for cloning extractions|
|3.7.4 [L]|2019-05-21|Setup|Fix for silent uninstaller|
|3.7.3 [M]|2019-05-21|Designer|Fix for TableJoin (broken since 3.7.0).|
|3.7.2 [M]|2019-05-16|Table|Updated Z_THEO_READ_TABLE to 1.11|
|3.7.1 [L]|2019-05-14|General|Using MSBuild 16|
|3.7.0 [M]|2019-05-09|General|Updated to .NET Framework 4.7.1|
|3.6.3 [L]|2019-05-08|Setup|Fixed FileNotFoundException that might occur after installing version 3.6.2.12.|
|3.6.2 [M]|2019-04-18|Server|Fixed a bug where starting multiple extractions at the same time caused some of them to fail|
|3.6.1 [L]|2019-03-29|Designer|UI improvements for Connect window|
|[3.6.0 [M]](https://kb.theobald-software.com/release-notes/BOARDConnector-3.6.0.html)|2019-03-26|General|Updated to .NET Framework 4.6.1([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-3.6.0.html))|
|3.5.1 [M]|2019-03-12|Server|Fix for aborting extractions and clearing result cache (Bug introduced in 3.5.0)|
|[3.5.0 [M]](https://kb.theobald-software.com/release-notes/BOARDConnector-3.5.0.html)|2019-03-08|Security|Access to the web server can now be restricted to Active Directory users with Designer read access.([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-3.5.0.html))|
|3.4.0 [L]|2019-03-01|General|Removed support for 32 bit versions of Windows|
|3.3.11 [M]|2019-02-18|Table|Updated Z_THEO_READ_TABLE to 1.10|
|3.3.10 [M]|2019-02-13|Table|Reverted back to Z_THEO_READ_TABLE 1.9|
|3.3.9 [M]|2019-02-13|Table|Updated Z_THEO_READ_TABLE to 1.10|
|3.3.8 [M]|2019-02-08|Table|Updated Z_THEO_READ_TABLE to 1.9|
|3.3.7 [M]|2019-02-07|Table|Updated Z_THEO_READ_TABLE to 1.7|
|3.3.6 [M]|2019-02-06|BW Cube|Fix for decimals in BEx mode|
|3.3.5 [M]|2019-01-28|Table|Updated Z_THEO_READ_TABLE to 1.6|
|3.3.4 [M]|2019-01-25|Table|Updated Z_THEO_READ_TABLE to 1.5|
|3.3.3 [L]|2019-01-23|Setup|Improved error message when Designer is still running during setup|
|3.3.2 [M]|2019-01-23|Table|Updated Z_THEO_READ_TABLE to 1.4|
|3.3.1 [L]|2019-01-23|Setup|Silent setup doesn't initiate config conversion|
|[3.3.0 [L]](https://kb.theobald-software.com/release-notes/BOARDConnector-3.3.0.html)|2019-01-22|Table|Added ABAP code + transport request for Z_THEO_READ_TABLE, removed old ABAP files([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-3.3.0.html))|
|3.2.13 [M]|2019-01-16|Report|Fix for empty column descriptions|
