### Parameterizing Using Custom Properties

The *Custom Properties* of an Xtract IS component are displayed in the "Properties" window of the component. 
These properties are not to be confused with *Data Flow Properties*. 
The *Data Flow Properties* can be set via SSIS expressions and are displayed in the "Properties" window of the Data Flow Task. 

When parameterizing using *Data Flow Properties* as recommended by Microsoft, the *Custom Porperties* are overwritten.


<!---(technically: the property's *expressionType* XML-attribute is set to *notify*).
VS: und was heißt das? Muss ich das wissen? Und falls ja, wofür????-->

#### How to Use Expressions for Data Flow Properties

1. Create an SSIS package, see [Getting Started](../getting-started).
2. Right-click the Data Flow canvas and select **Properties**. The window "Properties" opens.
3. Add an *Expression* by clicking using **[…]**. The window "Property Expression Editor" opens.<br>
![Expressions](/img/content/xis/expressions.png){:class="img-reagierend"}
4. Select a property from the drop-down list under *Property*.<br>
5. Open the "Expression Builder" using the **[…]** button under *Expression*.
6. Build your Expression and click **[Evaluate Expression]** to check for correct syntax.
7. Confirm your input with **[OK]**.


