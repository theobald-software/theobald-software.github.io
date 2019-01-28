In this section, we will discuss the EXECUTE FUNCTION activity in the GetCustomers operation.
Right-click on the EXECUTE FUNCTION activity and choose *Edit*.

![WSD-ExecuteFunctionEdit](/img/content/WSD-ExecuteFunctionEdit.png){:class="img-responsive"}

In the *Execute Function Activity Dialog* dialog partner, you see the name of the SAP function module (*SD_RFC_CUSTOMER_GET*).<br> in the Name field.
These include the various parameters, that is, *EXPORTS, IMPORTS, CHANGINGS* and TABLES (*Input* and *Output*), of the *function module* (FuBa) and the corresponding assignment (*Mapping*). 


The EXPORTS parameters consist of two simple input parameters. <br>
The FuBa parameter *NAME1* is mapped to the Web services input parameter *namePattern*.<br>
The Web service input parameter namePattern is specified when the Web service operation is called. <br>
We'll look at the definition later. 

![WSD-FM-Exports](/img/content/WSD-FM-Exports.PNG){:class="img-responsive"}

The FuBa has a single TABLES parameter *CUSTOMER_T*, which we use for the output and assign to the output parameter *customerList* of the Web service operation.

The customerList parameter will be available when the Web service operation is called. 

![WSD-FM-Tables](/img/content/WSD-FM-Tables.PNG){:class="img-responsive"}

Click OK to close the *Execute Function Activity Dialog* dialog box.
In the *ECS Web Service Designer* dialog box, click the *Parameters* button.

![WSD-WebServiceDesigner2](/img/content/WSD-WebServiceDesigner2.PNG){:class="img-responsive"}

In the *Parameters* dialog box, you manage the input and output parameters of the operation. 
The following parameters are defined:<br>
namePattern: Input parameter (Direction Input) of type String. <br>
customerList: List-type output parameter (Direction Return) of type List of Customer. The definition of the data type *Customer* is shown below.

You can use the Edit button to assign a default value to the *namePattern* parameter, e.g. T*. 

![WSD-Parameters](/img/content/WSD-Parameters.PNG){:class="img-responsive"}

Click OK to close the window. 

In the main dialog, click the *Custom Data Types* button.
The *Custom Data Types Dialog* window lists the defined data types *Customer*. 

![WSD-CustomerDataTypes](/img/content/WSD-CustomerDataTypes.PNG){:class="img-responsive"}

Select the data type *Customer* and click Edit. 
The Customer data type has two properties, ID and Name.

![WSD-CustomDataTypesEdit](/img/content/WSD-CustomDataTypesEdit.PNG){:class="img-responsive"}

Click OK to go to the main window. 