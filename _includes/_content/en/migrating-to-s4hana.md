The following section contains information on how to test and adjust {% if page.product == "xtract-is" %}Xtract IS{% elsif page.product == "xtract-for-alteryx" %}Xtract for Alteryx{% elsif page.product == "xtract-universal" %}Xtract Universal{% elsif page.product == "board-connector" %}Board Connector{% endif %} when migrating from SAP R3 or SAP ERP (SAP ECC) to SAP S/4HANA.

### Migration of SAP Sources

{: .box-tip }
**Recommendation:** Use a test environment to test the migration to the new SAP system. 

1. Migrate the SAP system on your test environment to SAP S/4HANA.
2. Edit all SAP connections that connect to the original SAP system to use the new SAP system, see {% if page.product == "xtract-universal" or page.product == "board-connector" %}[Create an SAP Connection](../getting-started/sap-connection){% else %}[SAP Connection](../sap-connection){% endif %}.
3. Test all extractions on the test environment. <br>**Tip:** If the metadata of an SAP data sources changed after migration, refresh the metadata in {% if page.product == "xtract-is" %}Xtract IS{% elsif page.product == "xtract-for-alteryx" %}Xtract for Alteryx{% elsif page.product == "xtract-universal" %}Xtract Universal{% elsif page.product == "board-connector" %}Board Connector{% endif %}.
4. In case of errors, we recommend updating {% if page.product == "xtract-is" %}Xtract IS{% elsif page.product == "xtract-for-alteryx" %}Xtract for Alteryx{% elsif page.product == "xtract-universal" %}Xtract Universal{% elsif page.product == "board-connector" %}Board Connector{% endif %} to the latest product version. 
Is is possible that the issue is resolved in newer releases.
- Download the latest product version in the Theobald Software [Customer Portal](https://my.theobald-software.com/). 
- Update the product, see {% if page.product == "xtract-universal" or page.product == "board-connector" %}[Installation and Update](./installation-and-update){% elsif page.product == "xtract-for-alteryx" or page.product == "xtract-is"%}[Update](./update){% endif %}.<br>
- If the software update does not solve the issue, contact the Theobald Software [support](support@theobald-software.com).
5. Deploy the upgrade to your production environment.

****
#### Related Links
- [SAP Documentation: Converting SAP Systems to S/4HANA Using Software Update Manager](https://help.sap.com/docs/SLTOOLSET/e239e55723bc4d8ca923bba137df205b/11ce6d4c264c44db965f9272ed785ec3.html)
{% if page.product == "xtract-universal" or page.product == "board-connector" %}- [Installation and Update](./installation-and-update){% elsif page.product == "xtract-for-alteryx" or page.product == "xtract-is"%}- [Update](./update){% endif %}
{% if page.product == "xtract-universal" or page.product == "board-connector" %}- [Backup and Migration](./backup-and-migration){% endif %} 