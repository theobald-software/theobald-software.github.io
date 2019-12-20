---
layout: page
title: Screenshot conventions
description: Guidelines on creating consistent screenshots
permalink: /:collection/screenshots
weight: 0
---
### About screenshot conventions
The following section contains information on creating consistent screenshots.<br>

The main topics around creating screenshots are the following:
- Storing & naming screenshots
- Size, resolution & quality
- Highlighting (type, size, color)
- Position numbers

### General
The author of a section decides about the number of used screenshots. The rule of thumb in this case is:
"The main focus is on the user, if an additional screenshot is necessary for understanding, place a screenshot."
Additional benefits of using more screenshots
- less text
- less translation effort
- lower error probability

#### Storing & naming screenshots

Creating new subfolders for new content and placing the new screenshots into existing subfolders simplifies search and ensures order in the image repository.
For better searching it is also advisable to use a self-explanatory file name.
For screenshots that don't belong to a product, try to place the component or destination name at the beginning (e.g., odp_dynamic-param.png)
For product specific screenshots, place the product name at the beginning of the file name (e.g., xfa_settings_update-mode.png)

Optionally underscore can be used to separate the items and hyphen (minus) to separate words belonging to one item (e.g., xfa_settings_update-mode.png )

### Size, resolution & quality
The recommended software for creating the screenshots is Greenshot. The following instructions will be based on the usage of Greenshot.

For consistency purposes it is crucial that there are only several option sizes for the screenshots.
The size of the screenshot should be set within the .md-file using the attribute "width".

Size | Width in px | Example description
------------ | ------------- | ----------
XL | 1000 | Whole Screen; also applicable for architecture illustrations
L | 800 | Big windows
M | 650 | Medium windows
S | 450 | Smaller windows
XS | 250 | Parts of windows

#### XL
![client_Server_architecture_xis_final](/img/content/xis/client_server_xis.png){:class="img-responsive" width="1000px"} <br>
#### L
![ODP Add parameters](/img/content/odp/odp-component-general.png){:class="img-responsive" width="800px"}<br> 
#### M
![OPD settings](/img/content/odp/odp-settings-02.png){:class="img-responsive" width="650px"}
#### S
![XIS_License_Manager](/img/content/xis/xis_license-manager.png){:class="img-responsive" width="450px"}
#### XS
![ODP Settings](/img/content/odp/odp-settings-01.png){:class="img-responsive" width="250px"}

#### Quality 
Png is recommended file type for online content. Jpeg is not forbidden but remember that .jpeg-files are more compressed and this may lead to quality loss. In Greenshot .png is set by default. To check or change output file type in Greenshot, navigate to **Settings > Output > Image format**.
When manually resizing the file size in Greenshot editor, the quality of the image decreases. 
To prevent quality loss, you can use other screenshot taking options:
- Capture window **[Alt]+[Print]** - to capure only a prompted window
- Capture full screen **[Ctrl]+[Print]** - to capture full screen and crop image in the editor. 
The quality does not decrease  when it's cropped. 

### Highlighting (type, size, color)
Generally use squares to highlight parts of a screenshot. Use Theobald red for any kind of highlighting.
### Position numbers
Use the default position numbers provided in Greenshot. Change the color to Theobald red.