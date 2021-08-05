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
it does shrink to the screen size (to prevent sideways scrolling), but does not scale proportionally, which gives an unwanted effect.
As such, it is advised that if height and width are added, the class img-responsive is also added, so it will scale proportionally on small screens.
  
![Benjamin Bannekat](https://octodex.github.com/images/bannekat.png){:height="200px" width="200px" class="img-responsive"}

To only make them responsive, and thus screen-filling, only add class="img-responsive".

![Benjamin Bannekat](https://octodex.github.com/images/bannekat.png){:class="img-responsive"}
