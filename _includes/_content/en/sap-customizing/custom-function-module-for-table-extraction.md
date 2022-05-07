### RFC_READ_TABLE Restrictions
Especially with older SAP releases you may encounter a few restrictions when using the SAP standard function module (RFC_READ_TABLE) for table extraction:

- The overall width of all columns to be extracted must not exceed 512 bytes.
- Depending on the SAP version there may be other restrictions. 
  It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point), DEC (decimal, e.g. for percentage) or x (RAW, LRAW).
- Poor extraction performance with larger tables.

If the above-mentioned restrictions hinder your work, install the Theobald Software custom function module *Z_THEO_READ_TABLE* on your SAP system. 

{: .box-warning }
**Warning! Error while converting value '\*.0' of row 1530, column 3** <br>
The SAP standard module *RFC_READ_TABLE* for table extraction  can only extract the ABAP data type DEC to a limited extent. This leads to the mentioned example error during extraction.<br>
Use the function module from Theobald Software *Z_THEO_READ_TABLE*.

### Installing Z_THEO_READ_TABLE 

An SAP transport request for the installation of the function module is provided in the installation directory: `C:\ProgramFiles\[XtractProduct]\ABAP\`.<br>
There are two transports, one for SAP systems >= 7.40 SP5 (*Z_THEO_READ_TABLE.zip*), and one for systems with a lower version (*Z_THEO_READ_TABLE-before_740SP05.zip*).<br>

- Z_THEO_READ_TABLE.zip contains version 2.x of Z_THEO_READ_TABLE - the custom function module, a number of ABAP classes and other DDIC objects.  
- Z_THEO_READ_TABLE-transport-before-740SP05.zip contains version 1.x (till 1.11) of Z_THEO_READ_TABLE - the custom function module.
![Z_THEO_READ_TABLE_SE80](/img/content/Z_THEO_READ_TABLE_SE80.png){:class="img-responsive" }

{: .box-note}
**Note:** Take a look at the README.pdf in the installation directory (e.g.,`C:\Program Files\XtractProduct\ABAP\README.pdf`) before installing any custom function modules.

When importing the Z_THEO_READ_TABLE-transport-before-740SP05 on older SAP releases a syntax error may occur. Contact [Theobald Support](https://support.theobald-software.com) and send the dedicated error message text.

### Testing the module in SAP

{: .box-warning }
**Warning! Generating Short Dumps** <br>
The function module Z_THEO_READ_TABLE can only be called by Theobald products due to the callback function of the module.
Testing the function module on an SAP system is therefore not possible.
