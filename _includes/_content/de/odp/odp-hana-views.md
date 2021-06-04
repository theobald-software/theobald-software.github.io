Mit Operational Data Provisioning (ODP) können Sie die SAP HANA-Datenbank eines SAP ABAP-Quellsystems anbinden. <br>
Die Verbindung wird über RFC bereitgestellt. 

### Verfügbare HANA Views
- Analysis Views
- Calculation Views 
- Associated Attribute Views 

### HANA Views verwenden
Worauf Sie bei der Verwendung von HANA Views achten müssen: 
1. Wenn Sie nach HANA Views [suchen](./odp-define), stellen Sie sicher, dass Sie den richtigen Kontext auswählen. 
![ODP HANA View](/img/content/odp/odp-component-hanaview-salesdocumentitem-01.png){:class="img-responsive"}
2. Wenn Delta-Load für das Quellobjekt im SAP-Quellsystem verfügbar ist, ist die Option **Delta Update** in der ODP-Komponente verfügbar. 
3. Klicken Sie auf **[Load live preview]**, um eine Echtzeitvorschau anzuzeigen, ohne dabei eine Extraktion auszuführen.