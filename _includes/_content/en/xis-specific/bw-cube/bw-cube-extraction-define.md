First, at least one connection manager must be assigned as explained in the previous chapters on the other source components. A connection must be made with an SAP BW system.

![Bw-Cube-Data-Source](/img/content/Bw-Cube-Data-Source.png){:class="img-responsive" }

Double-click the icon to launch the editor. Click the binocular button to open up the search dialog as shown below.

You can also use wildcards ( * ) to search for InfoCubes and QueryCubes. Select the cube you want and click *OK*.

![Query-LookUp](/img/content/Query-LookUp.png){:class="img-responsive" }

After having chosen a cube, you will find all dimensions, measures and dimension properties on the left-hand side of the editor. These parameters are presented hierarchically in a tree view.

To extract one or more of these cube elements, drag and drop them to the grid on the right-hand side. If you are choosing the property of a dimension that is not yet contained in the result set, the dimension will be added automatically as well.

![Cube-Details](/img/content/Cube-Details.png){:class="img-responsive" }

If at least one measure has been selected, the preview button can be clicked. If you are interested in the MDX statement that is generated in the background, please click the *Show MDX* link at the top of the editor.

To select all the properties of a dimension or all key figures, right-click on the corrrespondent node and select the option *Select* for *Output*.
If you are interested in the MDX statement that is generated in the background, please click the Show MDX link at the top of the editor.