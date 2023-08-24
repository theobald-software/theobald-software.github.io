The following section contains information on how to test and adjust {% if page.product == "xtract-is" %}Xtract IS{% elsif page.product == "xtract-for-alteryx" %}Xtract for Alteryx{% elsif page.product == "xtract-universal" %}Xtract Universal{% elsif page.product == "board-connector" %}Board Connector{% endif %} when migrating from SAP R3 or SAP ERP (SAP ECC) to SAP S/4HANA.

{: .box-tip }
**Recommendation:** Use a test environment to test the migration to a new SAP system. 

### Migration of SAP Sources

After the migration to SAP S/4HANA, check the following {% if page.product == "xtract-is" %}Xtract IS{% elsif page.product == "xtract-for-alteryx" %}Xtract for Alteryx{% elsif page.product == "xtract-universal" %}Xtract Universal{% elsif page.product == "board-connector" %}Board Connector{% endif %} settings in a test environment:

1. Update all SAP connections that still connect to the old SAP system, see {% if page.product == "xtract-universal" or page.product == "board-connector" %}[Create an SAP Connection](../getting-started/sap-connection){% else %}[SAP Connection](../sap-connection){% endif %}.
2. Test all extractions in a test environment. <br>**Tip:** If the metadata of an SAP data sources changed after migration, refresh the metadata in {% if page.product == "xtract-is" %}Xtract IS{% elsif page.product == "xtract-for-alteryx" %}Xtract for Alteryx{% elsif page.product == "xtract-universal" %}Xtract Universal{% elsif page.product == "board-connector" %}Board Connector{% endif %}.
3. In case of errors, we recommend updating {% if page.product == "xtract-is" %}Xtract IS{% elsif page.product == "xtract-for-alteryx" %}Xtract for Alteryx{% elsif page.product == "xtract-universal" %}Xtract Universal{% elsif page.product == "board-connector" %}Board Connector{% endif %} to the latest product version. 
It is possible that the issue is resolved in newer releases.
- Download the latest product version in the Theobald Software [Customer Portal](https://my.theobald-software.com/). 
- Update the product, see {% if page.product == "xtract-universal" or page.product == "board-connector" %}[Installation and Update](./installation-and-update){% elsif page.product == "xtract-for-alteryx" or page.product == "xtract-is"%}[Update](./update){% endif %}.<br>
- If the software update does not solve the issue, contact the Theobald Software [support](support@theobald-software.com).
4. Deploy the upgrade to your production environment.
