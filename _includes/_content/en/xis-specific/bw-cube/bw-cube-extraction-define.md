### Defining a BW Cube Extraction

1. A valid connection manager connected to a SAP BW system must be defined, see section [Connection Manager](../sap-connection/the-connection-manager).
2. Double-click the **[icon]**. The window "Extract SAP BW/BEx Queries and Multidimensional Info Providers" opens.
3. Click on the **[binocular button]**.
![Bw-Cube-Data-Source](/img/content/Bw-Cube-Data-Source.png){:class="img-responsive" }

	The search dialog "Look Up Cube or Query" opens.

### Looking up a BW Cube or Query
![Query-LookUp](/img/content/Query-LookUp.png){:class="img-responsive" }
	
4. Select *InfoCubes* or *QueryCubes*.
5. Search for **Cube Name** by using the **[binocular button]**, you can use wildcards (*), if needed.
6. Select an item from the list. 
7. Click **[OK]** to confirm.

![Cube-Details](/img/content/Cube-Details.png){:class="img-responsive" }
On the left-hand side of the editor all dimensions, measures and dimension properties are shown. These parameters are presented hierarchically in a tree view.

8. To extract one or more of these cube elements, drag and drop them to the grid on the right-hand side. If you are choosing the property of a dimension that is not yet contained in the result set, the dimension will be added automatically as well.
9. To select all the properties of a dimension or all key figures, right-click on the corrrespondent node and select the option *Select* for *Output*.
10. If one or more measure is seleted, the button **[Preview}]** is activated.
11. To see the MDX statement that is generated in the background, click the **[Show MDX]** link at the top of the editor. 
