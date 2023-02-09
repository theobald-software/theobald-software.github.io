1. Es muss ein gültiger Verbindungsmanager definiert sein, der mit einem SAP-System verbunden ist, siehe Abschnitt [Connection Manager](./sap-verbindung/verbindungsmanager).
2. Ziehen Sie die Xtract Komponente aus der SSIS-Toolbox in Ihren Data Flow Task.<br>
{% if page.childidentifier == "hierarchy" %}![Toolbox](/img/content/xis/hierarchy-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "xtract-is-bapi" %}![Toolbox](/img/content/xis/BAPI-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "bw-cube" %}![Toolbox](/img/content/xis/bwcube-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "bw-loader" %}![Toolbox](/img/content/xis/bwloader-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "odp" %}![Toolbox](/img/content/xis/odp-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "open-hub-service" %}![Toolbox](/img/content/xis/ohs-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "query" %}![Toolbox](/img/content/xis/query-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "report" %}![Toolbox](/img/content/xis/query-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "xtract-is-deltaq" %}![Toolbox](/img/content/xis/deltaq-toolbox.png){:class="img-responsive"}
{% elsif page.childidentifier == "xtract-is-table" %}![Toolbox](/img/content/xis/table-toolbox.png){:class="img-responsive"} {% endif %}
3. Doppelklicken Sie auf die Komponente. Das Hauptfenster der Komponente öffnet sich.
Die meisten Funktionen der Komponente sind über das Hauptfenster verfügbar.<br>