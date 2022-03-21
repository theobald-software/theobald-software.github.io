### Advanced Settings

![ODP Advanced Settings](/img/content/odp/advanced-settings.png){:class="img-responsive"}

#### Package Size
The extracted data will be split into packages of the defined size. 
If the package size is 0, SAP uses the default ODP Packaging size.
Die default package size is 14400000 bytes.

Make sure that your SAP version includes the necessary notes, see [Technical Prerequisites](../odp#technical-prerequisites). <br>

#### Adjust Currency Decimals

The default number of decimal places for a currency in the SAP database is generally 2 decimals.
Currencies that do not have decimals are also stored in this format, e.g. JPY, VND, KRW, etc.

Example:

| Currency        | Actual Amount          | Amount stored in SAP database |
| ------------- |:-------------:| -----:|
| JPY | 100	|1.00|
| KRW | 10000	|100.00|

When extracting currencies with no decimals, the amount stored in SAP is returned e.g., 100 JPY are extracted as 1.00.
To correct the decimal placement of the extracted data, activate *Adjust Currency Decimals*.
If *Adjust Currency Decimals* is active, currencies without decimals are multiplied by a factor that balances out the decimals.
*Adjust Currency Decimals* also requires that the corresponding CURRENCY field is included in the extracted object.


{: .box-note }
**Note:** The multiplication factor used in *Adjust Currency Decimals* is determined by the SAP currency table TCURX. 
To access the table, the following SAP Authority objects must be set in SAP: *S_TABU_NAM	ACTVT=03; TABLE=TCURX*.
