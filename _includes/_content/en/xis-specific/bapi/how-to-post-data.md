This example that shows how to use an SAP function module to post data to SAP. 

### Prerequisites

**SAP function module**<br>

This example uses the SAP custom function module Z_ECS_PRODUCT_CREATE_MULTI.
It has a table parameter *T_PRODUCTS* that can be used for input. 
The table has the following structure:

![ssis-write-sap-01](/img/content/ssis-write-sap-01.png){:class="img-responsive" }

**Table in SQL Server**

This example uses the SQL Server table *SAP Products*, that is used as input for the function module.

```
CREATE TABLE [SAP Products] (
    [MANDT] nvarchar(3), 
    [PRODUCTNR] nvarchar(18),
    [DESCTEXT] nvarchar(40),
    [PRODTYPE] nvarchar(4),
    [STOCKQUAN] numeric(18,3),
    [MEINS] nvarchar(3),
    [ERDAT] nvarchar(8),
    [ERZET] nvarchar(6)
)
```

The table has the following content:

![ssis-write-sql-01](/img/content/ssis-write-sql-01.png){:class="img-responsive" }

### Workflow with SSIS


1. Define the SQL Server Table *SAP Products* as the Source.
2. Define the function module Z_ECS_PRODUCT_CREATE_MULTI in the Xtract BAPI component. Activate the checkbox of *T_PRODUCTS* to mark it for output. <br>
![ssis-write-xtractis-fuba-01](/img/content/ssis-write-xtractis-fuba-01.png){:class="img-responsive" }
3. Connect the Source component with the Xtract component. <br>
![ssis-write-xtractis-fuba-02](/img/content/ssis-write-xtractis-fuba-02.png){:class="img-responsive" }
4. Right-click the connection of the components and select **Resolve References**. Map the columns of the input tables. <br>
![ssis-write-xtractis-fuba-03](/img/content/ssis-write-xtractis-fuba-03.png){:class="img-responsive" }
5. Click **[OK]** and run the SSIS Package.<br>
![ssis-write-xtractis-fuba-04](/img/content/ssis-write-xtractis-fuba-04.png){:class="img-responsive" }