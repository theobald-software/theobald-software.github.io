In the following example for mapping input parameters, we show you how list-like input parameters can be mapped. A list-type parameter is comparable to a structure parameter, but contains its data elements in the form of a list. List-type parameters were designed in particular for mapping input or output tables.  

As an example, we use the function module BAPI_REQUISITION_CREATE. This FuBa is used to create a purchase requisition (BANF) in SAP. The items are transferred to table REQUISITION_ITEMS.
In our scenario, we only want to transfer one item. The following five input parameters are necessary for this: Material, Quantity, Plant, Delivery Date and DocType. The aim is to define a list-type input parameter that contains five list elements and to map them to the above-mentioned fields of the REQUISITION_ITEMS table.  

First create an operation that calls the function module BAPI_REQUISITION_CREATE. <br>
Then call  *Custom Data Types* in the overview screen and create a new data type with the name *ReqItem*. This data type should contain the elements Material, Quantity, Plant, Delivery Date and DocType.   

![WSD-MappingStructureNewCustomDataType6](/img/content/WSD-MappingStructureNewCustomDataType6.png){:class="img-responsive"}

The next step is to define your list-type input parameter. To do this, open  *Parameters* in the overview screen and click on *New*. Name the new parameter as SAPReqItems and choose *ListofReqItem* as the data type. Finish the entries with OK. The list-type input parameter is now created.

![WSD-MappingSkalarParameterDialog2](/img/content/WSD-MappingSkalarParameterDialog2.png){:class="img-responsive"}

Then call the activity dialog to perform the mapping. Scroll to the input table REQUISITION_ITEMS and select the list-type parameter *SAPReqItems* from the dropdown list in the mapping field. Then call the *Mapping Expression* settings by clicking the button on the right with the three dots.

![WSD-MappingSkalarMappingInput9](/img/content/WSD-MappingSkalarMappingInput9.png){:class="img-responsive"}

You can now use the dropdown list under *Mapping* to select the listed elements of the list-type parameter *SAPReqItems* and assign them to the corresponding table fields. If the list elements and the table fields have the same names, you can also use the automap function.  

![WSD-MappingSkalarMappingInput10](/img/content/WSD-MappingSkalarMappingInput10.png){:class="img-responsive"}

![WSD-MappingSkalarMappingInput11](/img/content/WSD-MappingSkalarMappingInput11.png){:class="img-responsive"}

Confirm your entries with OK. The mapping of the list-type input parameters is now complete. 