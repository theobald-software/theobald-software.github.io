### Edit Parameters 

{: .box-note } 
**Note:** Parameters are not allowed with the **Delta Update** mode, since the parameters of the **Init** mode will be automatically applied.

Parameters can have *single values*, *intervals* and *complex selections*. <br>
![Edit-Parameters](/img/content/Parameters_edit.png){:class="img-responsive"}

Click on **[Edit]** (1) and open the editor to change the parameters. The window "Edit Range" opens.

Set the values for **Sign** (2), **Option** (3), **Low Value** (4) and if needed, for **High Value** (5).<br>
![Parameters-2](/img/content/Parameters-2.png){:class="img-responsive"}

**Sign** (2) can get two values: *Include* or *Exclude*. This determines for every row whether the result of the condition is included or excluded in the entire resulting set for all rows.<br>
**Option** (3) contains the selection option for the condition of the row in form of logical operators.<br>
**Low Value** (4) designates the comparison value or the lower interval limit.<br>
**High Value** (5) designates the upper interval limitation.

{: .box-note }
**Note:** Add *@* right before the value to mark it as a variable.<br>
 

| Operator   |      Meaning      |  
|:---------|:------------- |
|=, EQ |  True if the content of operand1 is equal to the content of operand2|
|<>, NE | True if the content of operand1 is not equal to the content of operand2|
| <, LT | True if the content of operand1 is less than the content of operand2|
|>, GT |  True if the content of operand1 is greater than the content of operand2|
|<=, LE | True if the content of operand1 is less than or equal to the content of operand2.|
|>=, GE |  True if the content of operand1 is greater than or equal to the content of operand2|
|*, LIKE | True if the value of the operand operand1 matches (does not match) the pattern in the operand operand2.|
|[], BETWEEN | True if the content of the operand operand (not) lies between the values of the operands operand1 and operand2. |

### Delete
To *delete* a row, click the icon at the bottom left.

### Supported features

SSIS Variables are supported. 



