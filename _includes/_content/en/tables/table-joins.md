In the *Joins* tab, table joins can be defined in the component as of version 4.x. For versions older than 4.x, see the section on the separate [Table Join](../table-join) component. <br>

The *Join* functionality allows to join many tables (and views) on the SAP side and to extract the result. <br>
Possible scenarios would be to join tables for header and item data (for example, a purchase order or invoice) or tables for master data and texts (for example, a material). <br>
To do this, the corresponding SQL command is generated dynamically and executed on the SAP server. <br>

The prerequisite for use is the installation of function module [Z_THEO_READ_TABLE](../sap-customizing/custom-function-module-for-table-extraction) in SAP. <br> 

*Note*: Joins of cluster and pool tables are not supported, but can be extracted as individual tables.

To define table joins, follow the steps below:

**Define Tables** <br>

In the example, the tables MARA and MAKT are to be joined. To do this, add the two tables using the *Tables* dialog. 

![Table join tables](/img/content/join_tabellen_auswählen.png){:class="img-responsive"}

**Select fields** <br>

Then select the required fields in the tables. The aggregation functions described under [Tables and fields](./tables_and_fields) are available for selection. 

Here is an example of how to return the number of language fields (SPRAS) in table MAKT.   

![Table join fields](/img/content/join_felder_auswählen.png){:class="img-responsive"}

**Define links** <br>

If you switch to the *Joins* dialog, an Inner Join between the two tables is already predefined. The terms *Inner Join* and *Outer Join* are explained [here](https://help.sap.com/doc/saphelp_nwpi71/7.1/en-US/cf/21ec77446011d189700000e8322d00/content.htm?no_cache=true). <br>
Click on the pencil icon for details. In the example the table MARA (left table) was merged with the table MAKT (right table) using the fields MATNR and MANDT with the join type "Inner". <br>
The settings and links offered are only default values. All components, that is, *Left Table*, *Right Table*, *Join Type* and *Join Mapping* can be changed subsequently. <br>
- To add more field links, click *Add*. 
- Existing links can be removed with *Remove* (trash can icon). 
- More tables can be added using the *Tables and Fields* dialog. We recommend that you do not join more than five tables.    

![Table-Join-Connections](/img/content/join_verknüpfungen_01.png){:class="img-responsive"}

Example of a join with a third table:

![Table-Join-Verknüpfungen2](/img/content/join_verknüpfungen_02.png){:class="img-responsive"}

![Table-Join-Verknüpfungen3](/img/content/join_verknüpfungen_03.png){:class="img-responsive"}

   
**Auto mapping function** <br>

The *Auto-map* button deletes existing mapping values and performs a new field mapping of identically named fields. This step is optional and may be necessary, for example, if the reference table is only added at the end.     

![Table-Join-Automapping](/img/content/join_automap.png){:class="img-responsive"}