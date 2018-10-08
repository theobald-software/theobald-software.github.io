---
layout: page
title: Define a BW Cube Extraction
description: Define a BW Cube Extraction
product: board-connector
parent: bw-infocubes-and-bex-queries
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=define-a-bw-cube-extraction
---

The BOARD BW Cube data source component was developed to extract data from SAP BW InfoCubes and QueryCubes (also known as BEx Queries).

After the definition of a BW Cube data source the following screen pops up:

![BWCube-Extraction-01](/img/content/BWCube-Extraction-01.png){:class="img-responsive"}

Click the binocular button to open up the search dialog as shown below.

You can also use wildcards ( * ) to search for InfoCubes and QueryCubes. Select the cube you want to work with and click *OK*.

**Caution!** A BW Query must have the attribute external access allowed to appear in this list. Please refer to SAP Query Designer documentation for further details.

![BWCube-LookUp](/img/content/BWCube-LookUp.png){:class="img-responsive"}

After having chosen a cube, you will find all dimensions, key figures and dimension properties on the left-hand side of the editor. These parameters are presented hierarchically in a tree view.

To extract one or more of these cube elements, drag and drop them to the grid on the right-hand side. If you are choosing the property of a dimension that is not yet contained in the result set, the dimension will be added automatically as well.

![BWCube-Dimensions](/img/content/BWCube-Dimensions.jpg){:class="img-responsive"}

If at least one measure has been selected, you can see the extraction output in the browser after clicking the *Run* button.

To select all the properties of a dimension or all key figures, right-click on the corrrespondent node and select the option *Select for Output*.

![BWCube-Source-01](/img/content/BWCube-Source-01.png){:class="img-responsive"}

If you are interested in the MDX statement that is generated in the background, please click the *Show MDX* link at the top of the editor.

![BWCube-Extraction-04](/img/content/BWCube-Extraction-04.png){:class="img-responsive"}