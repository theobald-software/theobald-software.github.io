### RFC_READ_TABLE Restrictions
Especially with older SAP releases you may encounter a few restrictions when using the SAP standard function module (RFC_READ_TABLE) for table extraction:

- The overall width of all columns to be extracted must not exceed 512 bytes.
- Depending on the SAP version there may be other restrictions. 
  It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).
- Poor extraction performance with larger tables.

When facing restrictions, install the Theobald Software custom function module */THEO/READ_TABLE* on your SAP system. 

{: .box-warning }
**Warning! Error while converting value '\*.0' of row 1530, column 3** <br>
The SAP standard module *RFC_READ_TABLE* for table extraction can only extract the ABAP data type DEC to a limited extent. This leads to the mentioned example error during extraction.
Use the function module from Theobald Software */THEO/READ_TABLE*.

### Installation of /THEO/READ_TABLE

An SAP transport request for the installation of the function module is provided in the installation directory: 
{% if page.product == "yunio" %}`C:\Program Files\Theobald Software\yunIO\ABAP\`.{% else %}`C:\Program Files\[XtractProduct]\ABAP\`.{% endif %}<br>
Transport requests are imported into SAP by your SAP Basis team.

{: .box-note}
**Note:** Take a look at the README.pdf in the installation directory (e.g.,`C:\Program Files\XtractProduct\ABAP\README.pdf`) before installing any custom function modules.

There are two custom function modules available for Table extractions: 
- /THEO/READ_TABLE
- Z_THEO_READ_TABLE

It is recommended to install the latest custom function module /THEO/READ_TABLE:
- `THEO_READ_TABLE_740SP05.zip` - compatible with ABAP version 7.40 SP05 and higher
- `THEO_READ_TABLE_710.zip` - compatible with ABAP version 7.10 and higher
- `THEO_READ_TABLE_640.zip` - compatible with ABAP versions from 6.40 until 7.03
- `THEO_READ_TABLE_46C.zip` - compatible with ABAP versions from 4.6C until 6.40

When importing the transport requests on older SAP releases a syntax error may occur. Contact [Theobald Support](https://support.theobald-software.com) and send the dedicated error message text.

#### Testing the module in SAP

{: .box-warning }
**Warning! Generating Short Dumps** <br>
The function modules /THEO/READ_TABLE and Z_THEO_READ_TABLE can only be called by Theobald products due to the callback function of the module.
Testing the function modules on an SAP system is therefore not possible.


### Supported Features

| Supported Features | THEO_READ_TABLE_740SP05 | THEO_READ_TABLE_710 | THEO_READ_TABLE_640 | THEO_READ_TABLE_46C |
| :------ |:---: | :---: | :---: | :---: |
| WHERE Clause | x | x | x | x | 
| HAVING Clause | x | x | x | - |
| INNER JOIN | x | x | x | x |
| LEFT OUTER JOIN | x | x | x | x |
| Conversion exits | x | x | x | x |
| Aggregate functions | x | x | x | x |
| SQL expressions (subqueries) | x | - | - | - |
| Background jobs | x | x | - | - |

