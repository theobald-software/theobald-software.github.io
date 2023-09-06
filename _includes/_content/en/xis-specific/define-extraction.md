
1. Define a valid connection manager that connects to an SAP system, see [Connection Manager](./sap-connection/the-connection-manager).
2. Drag&drop the Xtract component from the SSIS toolbox into your data flow task.<br>
{% if page.childidentifier == "hierarchy" %}![Toolbox](/img/content/xis/hierarchy-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "bapi" %}![Toolbox](/img/content/xis/BAPI-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "bw-cube" %}![Toolbox](/img/content/xis/bwcube-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "bw-loader" %}![Toolbox](/img/content/xis/bwloader-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "odp" %}![Toolbox](/img/content/xis/odp-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "open-hub-service-ohs" %}![Toolbox](/img/content/xis/ohs-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "query" %}![Toolbox](/img/content/xis/query-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "report" %}![Toolbox](/img/content/xis/query-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "deltaq" %}![Toolbox](/img/content/xis/deltaq-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "table" %}![Toolbox](/img/content/xis/table-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "table-cdc" %}![Toolbox](/img/content/xis/tablecdc-toolbox.png){:class="img-responsive"} {% endif %}
3. Double-click the component. The main window of the component opens.
The majority of the functions of the component can be accessed using the main window.<br>
