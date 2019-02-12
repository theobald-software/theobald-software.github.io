Here you find the guide for the manual installation of Z_XTRACT_IS_TABLE.

**Step 1 - Create a new function module**

Call transaction SE37 and create a new function module named Z_XTRACT_IS_TABLE. You can use an existing function group or create a new one. This is also valid for the development class (Package).
In tab *Attributes* check *Remote Enabled*.

![Z-Custom-Function-01](/img/content/Z_XTRACT_IS_TABLE00.png){:class="img-responsive" }

**Step 2 - ImportParameter**

Define the imports as shown in the screenshot.

![Z-Custom-Function-03](/img/content/Z_XTRACT_IS_TABLE01.png){:class="img-responsive" }

**Step 3 - Tables Parameter**

Define the tables as shown in the screenshot.

![Z-Custom-Function-03](/img/content/Z_XTRACT_IS_TABLE02.png){:class="img-responsive" }

**Step 4 - Exception**
Define the exceptions as shown in the screenshot.

![Z-Custom-Function-04](/img/content/Z_XTRACT_IS_TABLE03.png){:class="img-responsive" }

**Step 5 - Code**<br>
You can find the ABAP code in [Z_XTRACT_IS_TABLE.txt](/docs/sap-customizing/Z_XTRACT_IS_TABLE.txt){:download="Z_XTRACT_IS_TABLE"}. Use *Ctrl + C* and *Ctrl + V*  to paste the code in the source code editor.
Save the function module and activate it.


You can use the transport request (thtrans.zip), that can be found in the ABAP subfolder of the installation folder, to install the function module. For more detail information about installing the transport request please read the following [Knowledgebase article](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/68/67/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms) or check the SAP help.
