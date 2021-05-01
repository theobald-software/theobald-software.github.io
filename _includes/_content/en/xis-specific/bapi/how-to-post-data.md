Here is a short example that shows, how to use an SAP function module to post data to SAP. 

**SAP function module**<br>
In SAP we have the following custom function module Z_ECS_PRODUCT_CREATE_MULTI. 
It has a table parameter *T_PRODUCTS* that can be used for input. The table has the following structure:

![ssis-write-sap-01](/img/content/ssis-write-sap-01.png){:class="img-responsive" }

**Table in SQL Server**

In SQL Server I have the table *SAP Products* that would be used as input for the function module. 

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

The table has the following content

![ssis-write-sql-01](/img/content/ssis-write-sql-01.png){:class="img-responsive" }

**SSIS**

1.Define the Source

2.Define the function module. Set the *Input Type* for the Table to *Pipeline*.


![ssis-write-xtractis-fuba-01](/img/content/ssis-write-xtractis-fuba-01.png){:class="img-responsive" }

3.Connect the components

![ssis-write-xtractis-fuba-02](/img/content/ssis-write-xtractis-fuba-02.png){:class="img-responsive" }

4.Click on Edit to map the columns. 

![ssis-write-xtractis-fuba-03](/img/content/ssis-write-xtractis-fuba-03.png){:class="img-responsive" }

5.Click on OK and run the SSIS Package 

![ssis-write-xtractis-fuba-04](/img/content/ssis-write-xtractis-fuba-04.png){:class="img-responsive" }