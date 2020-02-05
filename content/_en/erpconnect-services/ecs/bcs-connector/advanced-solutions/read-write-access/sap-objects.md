---
ref: ecs-read-write-access-01
layout: page
title: SAP Objects
description: SAP Objects
product: erpconnect-services
parent: read-write-access
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-crud-sap-objects
---

A requirement and first step in creating your CRUD solution is to identify the business entity and function modules that can support the CRUD operations in your SAP system.

This example illustrates how full access to your SAP data can be achieved through the use of simple and well-structured custom SAP function modules.

The SAP business object used in this example is a product (or material) entity which is stored in a custom table 'ZECSPRODUCTS'.

![BCS-CRUD-SAP-Tables-ZECSPRODUCTS](/img/content/BCS-CRUD-SAP-Tables-ZECSPRODUCTS.png){:class="img-responsive"}

The custom SAP table has the following data structure:

| Field     | Key | Data Element (Length) | Short Description                 |
|-----------|-----|-----------------------|-----------------------------------|
| MANDT     | X   | CLNT (3)              | Client                            |
| PRODUCTNR | X   | CHAR (18)             | Material Number                   |
| DESCTEXT  |     | CHAR (40)             | Material Description (Short Text) |
| PRODTYPE  |     | CHAR (4)              | Material Type                     |
| STOCKQUAN |     | QUAN (13)             | Valuated Unrestricted-Use Stock   |
| MEINS     |     | UNIT (3)              | Base Unit of Measure              |

Access to the table is provided through custom function modules that support the CRUD operations on the table data.

**Z_ECS_PRODUCT_GET_LIST**

This function module returns a list of records from table 'ZECSPRODUCTS' and will be mapped to the Finder operation in the BCS.

The function module has two import parameter: 'SEARCH_PRODUCTNR' to specify a search value for Material Number and 'SEARCH_PRODTYPE' to specify a search value for Product Type. The function module has one table structure 'T_PRODUCTS' which represents the result table with the records matching the search criteria.

![BCS-CRUD-SAP-FM-GETLIST](/img/content/BCS-CRUD-SAP-FM-GETLIST.png){:class="img-responsive"}

**Z_ECS_PRODUCT_GET_DETAIL**

This function module returns the details for a product in table 'ZECSPRODUCTS' and will be mapped to the Specific Finder operation in the BCS.

The function module has one import parameters 'I_PRODUCTNR' which identifies a record in the table. The function module has one table structure 'T_PRODUCTS' which represents the result table with a single record.

![BCS-CRUD-SAP-FM-GETDETAIL](/img/content/BCS-CRUD-SAP-FM-GETDETAIL.png){:class="img-responsive"}

**Z_ECS_PRODUCT_CREATE**

This function module inserts a new record into table 'ZECSPRODUCTS' and will be mapped to the Creator operation in the BCS.
The function module has one import parameter 'I_PRODUCT' which represents the structure of a new record.

![BCS-CRUD-SAP-FM-CREATE](/img/content/BCS-CRUD-SAP-FM-CREATE.png){:class="img-responsive"}

**Z_ECS_PRODUCT_ CHANGE**

This function module changes the details of a product record in table 'ZECSPRODUCTS' and will be mapped to the Updater operation in the BCS.
The function module has two import parameters: 'I_PRODUCTNR' which identifies the record to be changed and 'I_PRODUCT' which contains the new values for the record.

![BCS-CRUD-SAP-FM-CHANGE](/img/content/BCS-CRUD-SAP-FM-CHANGE.png){:class="img-responsive"}

**Z_ECS_PRODUCT_DELETE**

This function module deletes a record from table 'ZECSPRODUCTS' and will be mapped to the Deleter operation in the BCS.

The function module has one import parameter 'I_PRODUCTNR' which identifies the product to be deleted.

![BCS-CRUD-SAP-FM-DELETE](/img/content/BCS-CRUD-SAP-FM-DELETE.png){:class="img-responsive"}