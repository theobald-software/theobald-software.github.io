The Xtract BW Cube data source component was developed to extract data from SAP BW InfoCubes and QueryCubes (also known as BEx Queries).

### Look up a BW Cube
1.Click **[Search]** (binoculars icon) in the main window of the component.
![Bw-Cube-Data-Source](/img/content/Bw-Cube-Data-Source.png){:class="img-responsive"}
The dialog “Look Up Cube or Query” opens.
![Look-Up-Cube](/img/content/Look-Up-Cube.png){:class="img-responsive"}
2. Select *InfoCubes* or *QueryCubes*.
3. Search for **Cube Name** by using **[Search]** (binoculars icon), you can use wildcards (*), if needed.
{: .box-warning }
**Warning! Invalid action**<br>
 A BW Query must have the attribute *Allow External Access to this Query* switched on in the BEx Query Designer or the BW Modeling Tool to appear in the list.
 
 For additional details see the knowledge base article [Allow external access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries).
4. Select an item from the list. 
5. Click **[OK]** to confirm.
![Cube-Details](/img/content/Cube-Details.png){:class="img-responsive" }
On the left-hand side of the editor all dimensions, measures and dimension properties are shown. These parameters are presented hierarchically in a tree view.

6. To extract one or more of these cube elements, drag and drop them to the grid on the right-hand side. If you are choosing the property of a dimension that is not yet contained in the result set, the dimension will be added automatically as well.
[Cube-Details](/img/content/XU-Tableau-BExQuery.png){:class="img-responsive"}
7. Click **[Run]** after selected at least one measure to see the the extraction output in the browser.
8. To select all the properties of a dimension or all key figures, right-click on the correspondent node and select the option *Select* for *Output*.
![Cube-Browser-Output](/img/content/Cube-Browser-Output.png){:class="img-responsive"}
9. To see the MDX statement that is generated in the background, click the **[Show MDX]** link at the top of the editor. 
![Cube-Extraction-Mdx-Statement](/img/content/Cube-Extraction-Mdx-Statement.png){:class="img-responsive"}
