### How to Use Expressions for Properties

Step-by-step instructions for the use of [Xtract Table].[WhereClause] #
In the following example, only results till 01.01 of the current fiscal year are to be extracted. The SAP standard table BKPF - Accounting Document Header and the table field BUDAT - Posting Date in the Document are used.

1. Create an SSIS package, see [Getting Started](../getting-started).
2. Right-click on the Data Flow canvas and click **Properties**. the window "Properties" opens.
3. Add an *Expression* by clicking using **[…]**. The window "Property Expression Editor" opens.<br>
![Expressions](/img/content/xis/expressions.png){:class="img-reagierend"}
4. Select a property from the drop-down list under *Property*.<br>
5. Open the "Expression Builder" using the […] button under *Expression*.
6. Build your Expression and click **[Evaluate Expression]** to check for correct syntax.
7. Confirm your input with **[OK]**.
