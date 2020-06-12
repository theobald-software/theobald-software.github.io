
### Installing Z_XTRACT_IS_TABLE Manually

1. Create a new function module:<br>
Call transaction SE37 and create a new function module named Z_XTRACT_IS_TABLE. You can use an existing function group or create a new one. This is also valid for the development class (Package).
In the tab *Attributes* check *Remote Enabled*.
![Z-Custom-Funcion-01](/img/content/Z_XTRACT_IS_TABLE00.png){:class="img-responsive" }

2. Import parameter - define the imports:
![Z-Custom-Function-02](/img/content/Z_XTRACT_IS_TABLE01.png){:class="img-responsive" }

3. Define the tables parameter:
![Z-Custom-Function-03](/img/content/Z_XTRACT_IS_TABLE02.png){:class="img-responsive" }

4. Define the exceptions:
![Z-Custom-Function-04](/img/content/Z_XTRACT_IS_TABLE03.png){:class="img-responsive" }

5. Code: You can find the ABAP code in [Z_XTRACT_IS_TABLE.txt](/docs/sap-customizing/Z_XTRACT_IS_TABLE.txt){:download="Z_XTRACT_IS_TABLE"}. Press **[Ctrl + C]** and **[Ctrl + V]**  to paste the code into the source code editor.
6. Save the function module and activate it.

