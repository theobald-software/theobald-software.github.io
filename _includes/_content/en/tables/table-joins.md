The *Join* functionality of the table component allows joining two or more tables and extract the result of the join. 
To do this, the corresponding SQL command is generated dynamically and the join is executed on the SAP server. <br>

Possible scenarios would be to join tables for header and item data or tables for master data and texts. 

Supported join types are *Inner Join* and *Left Outer Join*, also referred to as *Left Join*. An explanation can be found [here](https://help.sap.com/doc/saphelp_nwpi71/7.1/en-US/cf/21ec77446011d189700000e8322d00/content.htm?no_cache=true). <br>


{: .box-note }
**Note**: As a prerequisite for using the table join, function module [Z_THEO_READ_TABLE](../sap-customizing/custom-function-module-for-table-extraction) needs to be available in SAP. <br> 

{: .box-note }
**Note**: Joining of cluster or pool tables is not supported. These types of tables need to be extracted individually and joined in the destination.

### Joining two tables
The following example shows, how tables MARA and MAKT can be joined.

![Table join steps](/img/content/join_steps_1.png){:class="img-responsive"}

1. Add the two tables using the *Tables and Fields* dialog.
2. Select each table on the left and select the fields which you want to extract. 
3. Switch to the *Joins* tab to define the join condition. A Join condition, based on the foreign key relationship of the joined tables, is automatically preset.
4. Optional: Switch to the *WHERE clause* tab and specify a [WHERE clause](./where-clause).

{: .box-note }
**Note**: Pay attention to the [WHERE clause restrictions ](./where-clause#where-clause-restrictions) when specifying a WHERE clause.

In the *Joins* tab, click the *pencil icon* for details. In this example a left outer join on tables MARA (left table) and MAKT (right table) on the field MATNR is performed. A WHERE clause on MAKT~SPRAS = 'EN' has been specified.<br>

![Table-Join-Connections](/img/content/join_verknüpfungen_01.png){:class="img-responsive"}

*Left Table*, *Right Table*, *Join Type* and *Join Mapping* are preset with default values. They can be modified as required. <br>
- Click **[Add]** to extend the join condition to more fields. 
- Remove existing joins by clicking the *trash can icon*. 
- Join additional tables by using the *Tables and Fields* dialog. 

{: .box-note }
**Note**: To avoid poor extraction performance, we recommend that you do not join more than five tables.

{: .box-tip }
**Tip**: Different tables can have the same field names. Defining a join condition based on the same field names is not always giving the expected result (e.g. VBAK~VBELN <> LIPS~VBELN).
Make sure the fields you use in a join condition do actually contain the same content/data.

**Auto mapping function** <br>

The *Auto-map* button deletes existing join conditions and performs a new field mapping based on the foreign key relationship of the joined tables. This step is optional.

![Table-Join-Automapping](/img/content/join_automap.png){:class="img-responsive"}



### Joining three tables
Example of a join with a third table:

![Table-Join-Verknüpfungen2](/img/content/join_verknüpfungen_02.png){:class="img-responsive"}

![Table-Join-Verknüpfungen3](/img/content/join_verknüpfungen_03.png){:class="img-responsive"}

   

