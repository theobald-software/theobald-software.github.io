Selections filter the data that is extracted.
Not all elements of a DataSource support selections.

### Edit Selections

<!---
The table about operators is copied from the WHERE Clause syntax, but with ContainsPattern instead of LIKE and without IN.
-->

{: .box-note } 
**Note:** Do not define selections when using the update mode *Delta Update*, because the selections of the *Init* mode are automatically applied.

1. Choose an item in the section **OLTP Fields** and click *Edit*.
The window "Edit Selections" opens.<br>
![DeltaQ-Edit](/img/content/DeltaQ-Edit.png){:class="img-responsive"}
2. Click **[Add]** to add a new filter criterion.<br>
![DeltaQ-Edit](/img/content/DeltaQ-edit selections.png){:class="img-responsive"}
3. Select *Include* in the **Sign** column to only include the filtered data to the output. <br>
Select *Exclude* in the **Sign** column to exclude the filtered data from the output.
4. Select an operator in the **Option** column. The operator filters data according to the table below.

   | Operator   |      Meaning      |  
   |:---------|:------------- |
   |(Not)ContainsPattern |  True if data matches (does not match) the pattern in operand 1. |
   |(Not)Equal |  True if data is (not)equal to the content of operand 1.|
   |GreaterOrEqual |  True if data is greater than or equal to the content of operand 1.|
   |GreaterThan |  True if data is greater than the content of operand 1.|
   |LessOrEqual | True if data is less than or equal to the content of operand 1.|
   |LessThan | True if data is less than the content of operand 1.|
   |(Not)Between | True if data values do (not) lie between the values of operand 1 and operand 2. |
5. Enter values directly into the **Low** and **High** input fields. 
6. Click **[OK]** to save your input.

You can apply multiple filters or delete filters by clicking ![trashbin](/img/content/icons/trashbin.png).<br>
The number of defined filters is displayed in square brackets next to the *Edit* option.

