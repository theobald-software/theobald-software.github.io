
### Using SSIS Variables in the WHERE Clause Editor

1. Define an SSIS variable. Make sure to assign the correct data type to the variable.
2. Open the Xtract Table component and navigate to the *WHERE Clause* tab.
3. Click **[Editor mode]** to open the WHERE clause editor.
4. Add a new criteria and use **[Default with Parameter]** to add a parameter component.
5. Click on the *Parameter* component. A drop-down-list that displays all available parameters and variables opens. 
Select a variable from the list.
![WHERE-Clause-Builder-Example](/img/content/where-clause-param.png){:class="img-responsive"}
6. To test the WHERE clause, assign a default value for the SSIS variable and click **[Load live Preview]**.