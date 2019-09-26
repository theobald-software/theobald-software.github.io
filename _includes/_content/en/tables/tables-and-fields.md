One or more SAP tables or views can be selected under the tab *Tables And Fields*. <br>
Use *Add* or *Remove* to add a new table or remove a table that has already been added. 
 
The following options are available on the right under *Fields* for the column selection: <br>

**Filter** <br>
The column name and the column description can be filtered.

**Alias** <br>
At the moment without functionality (not required). 

**Aggregates Function** <br>
The following aggregation functions are available for column contents:
- None: No aggregation 
- AVG: Average
- COUNT: Number  
- MAX: Maximum
- MIN: Minimum 
- SUM: Total

**Use Conversion Routine (Conv.)** <br>
Defines whether the conversion routines stored in the Data Dictionary are used for the respective fields. 
Typical examples are the language key (for example, D in the database, but DE after conversion) or the project number (for example, T000012738GT in the database, T/12738/GT after conversion). 
After the conversion, the value is always displayed as it would appear in a transaction in the SAP GUI. 
This option is only supported with function module Z_THEO_READ_TABLE. 	

**Load live preview** <br>
The *Load live preview* button allows a real-time preview of the extraction data without executing the extraction. <br>
You can also preview the data with aggregation functions. 
 
**Count rows** <br>
Returns the number of rows/data records of an extraction, taking into account the WHERE and HAVING Clauses stored. 

**Refresh metadata** <br>
A new lookup is performed on the selected table(s). Existing mappings and field selections are retained, which is not the case when the table is added again. <br>
It may be necessary to renew the metadata, for example, if a table has been adjusted on the SAP side, another source system has been connected, or the source system has been updated. 
In such cases, data inconsistencies can occur that are resolved by this function.   

