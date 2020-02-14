The Xtract Universal BW Cube data source component was developed to extract data from SAP BW InfoCubes and QueryCubes (also known as BEx Queries).

After the definition of a BW Cube data source the following screen pops up:

![Bw-Cube-Data-Source](/img/content/Bw-Cube-Data-Source.png){:class="img-responsive"}

Click the binocular button to open up the search dialog as shown below.

You can also use wildcards ( * ) to search for InfoCubes and QueryCubes. Select the cube you want to work with and click OK.

{: .box-warning }
**Warning! Invalid action**<br>
 A BW Query must have the attribute *Allow External Access to this Query* switched on in the BEx Query Designer or the BW Modeling Tool to appear in the list.
 
 For additional details see the knowledge base article [Allow external access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries).

![Look-Up-Cube](/img/content/Look-Up-Cube.png){:class="img-responsive"}

After having chosen a cube, you will find all dimensions, key figures and dimension properties on the left-hand side of the editor. These parameters are presented hierarchically in a tree view.

To extract one or more of these cube elements, drag and drop them to the grid on the right-hand side. If you are choosing the property of a dimension that is not yet contained in the result set, the dimension will be added automatically as well.

![Cube-Details](/img/content/Cube-Details.png){:class="img-responsive"}

If at least one measure has been selected, you can see the extraction output in the browser after clicking the *Run* button.

To select all the properties of a dimension or all key figures, right-click on the corrrespondent node and select the option *Select for Output*.

![Cube-Browser-Output](/img/content/Cube-Browser-Output.png){:class="img-responsive"}

If you are interested in the MDX statement that is generated in the background, please click the *Show MDX* link at the top of the editor.

![Cube-Extraction-Mdx-Statement](/img/content/Cube-Extraction-Mdx-Statement.png){:class="img-responsive"}
