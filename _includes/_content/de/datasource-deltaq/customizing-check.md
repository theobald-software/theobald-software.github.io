### DeltaQ Customizing in SAP

Für die Verwendung der{% if page.product == "xtract-is"%} Xtract{% endif %} DeltaQ-Komponente ist ein Customizing in SAP erforderlich, siehe [Customizing für DeltaQ](../sap-customizing/customizing-fuer-deltaq).

### Einstellungen in der{% if page.product == "xtract-is"%} Xtract{% endif %} DeltaQ Komponente

Wenn eine RFC-Destination in SAP eingerichtet wird, müssen die RFC-Destination und das RFC-Zielsystem eingegeben werden.

![deltaq-tech-settings](/img/content/deltaq-tech-settings.png){:class="img-responsive"}

#### Gateway

Klicken auf ![magnifying-glass](/img/content/icons/magnifying-glass.png), um nach einer [RFC Destination](../sap-customizing/customizing-fuer-deltaq) zu suchen oder geben Sie die Daten Ihrer RFC-Destination manuell ein:

**Host**<br>Der Name (oder die IP-Adresse) Ihres SAP-Systems. <br>
Stellen Sie sicher, dass der Gateway-Host mit dem in Ihrer {% if page.product == "xtract-is"%} [SAP-Verbindung](../sap-verbindung/verbindungsmanager){% else %}[SAP-Verbindung](../erste-schritte/sap-verbindungen-anlegen){% endif %} identisch ist.

**Service**<br>Der Gateway-Service ist im Allgemeinen *sapgwNN*, wobei *NN* die Instanznummer Ihres SAP-Systems ist, z. B. eine Zahl zwischen *00*und *99*.


**Program ID**<br>Der Name des registrierten RFC-Servers.
Stellen Sie sicher, dass die Registrierung der Programm-ID und des Hosts in der reginfo-ACL auf dem SAP Gateway auf der Whitelist steht, siehe [SAP Blog: RFC Gateway Security](https://blogs.sap.com/2021/01/26/rfc-gateway-security-part-1-basic-understanding/).

#### Log. Destination
Klicken Sie auf ![magnifying-glass](/img/content/icons/magnifying-glass.png), um ein logisches RFC-Zielsystem zu suchen oder den Namen des RFC-Zielsystems manuell einzugeben.

### Customizing Check
Klicken Sie im Hauptfenster der Komponente auf **Customizing Check** zur Validierung des DeltaQ-Customizings auf dem SAP-System.
Stellen Sie sicher, dass alle Häkchen grün sind.

![customizing-check-successful](/img/content/customizing-check-successfull.png){:class="img-responsive"}