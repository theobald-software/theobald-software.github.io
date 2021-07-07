### Properties of Xtract Components in SSIS

The custom properties of an Xtract IS component are displayed in the window "Properties". <br>

![Properties](/img/content/xis/properties_component.png){:class="img-reagierend"}

{: .box-note }
**Note:** The properties that can be set via SSIS expressions are displayed in the "Properties" window of the Data Flow Task. 

<!---(technically: the property's *expressionType* XML-attribute is set to *notify*).
VS: und was heißt das? Muss ich das wissen? Und falls ja, wofür

![DataFlow Properties](/img/content/xis/properties_data_flow.png){:class="img-reagierend"}????-->

### How to Use Expressions for Properties

1. Create an SSIS package, see [Getting Started](../getting-started).
2. Right-click the Data Flow canvas and select **Properties**. The window "Properties" opens.
3. Add an *Expression* by clicking using **[…]**. The window "Property Expression Editor" opens.<br>
![Expressions](/img/content/xis/expressions.png){:class="img-reagierend"}
4. Select a property from the drop-down list under *Property*.<br>
5. Open the "Expression Builder" using the **[…]** button under *Expression*.
6. Build your Expression and click **[Evaluate Expression]** to check for correct syntax.
7. Confirm your input with **[OK]**.


*****
#### Related Links:
- [Use Property Expressions in Packages](https://docs.microsoft.com/en-us/sql/integration-services/expressions/use-property-expressions-in-packages?view=sql-server-ver15)
- [Dynamization of WHERE conditions of the XIS table components](https://kb.theobald-software.com/xtract-is/Dynamization-of-WHERE-conditions-of-the-XIS-table-components).
