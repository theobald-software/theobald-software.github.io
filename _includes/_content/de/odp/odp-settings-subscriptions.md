### Abonnements
Um Informationen über den Abonnenten zu erhalten, klicken Sie auf **Show Subscriptions / Show active subscriptions** oben im Fenster “Define data source for SAP ODP”:
<br/>
![Subscriptions](/img/content/odp/odp-settings-subscriptions.png){:class="img-responsive"}<br/>
**Tipp:**  Die Informationen, die Im Fenster “Delta Subscriptions for product” angezeigt werden, können auch in der SAP-Transaktion *ODQMON* angeschaut werden.<br/>

![ODP-Abonnent](/img/content/odp/odp-settings-02.png){:class="img-responsive"}<br/>

- **Queue:** Technischer Name aller Abonnements eines bestimmten Xtract-Produkts von Theobald Software (z.B. Xtract Universal). <br/>
Ein Abonnement ist an ein bestimmtes Produkt und die ODP-Komponente gebunden, aus der die init ursprünglich gestartet wurde. 
Ein ODP-Datenanbieter, wie beispielsweise 2LIS_02_ITM, kann mehrere Abonnements haben. Das Abonnement, das sich auf die vorliegende ODP-Komponente bezieht, ist mit einem roten Sternchen gekennzeichnet.<br/>
- **Process:** Technischer Name des Abonnements<br/>
- **R.(number of requests)**: Anzahl der ausgeführten Delta-Anfragen<br/>
- **Last request:** Zeitstempel der letzten Anforderung<br/>
- **Created:** Erstellungszeitstempel <br/>
Um das Abonnement zu löschen, klicken Sie auf das *Mülltonnensymbol* auf der rechten Seite des Fensters. 
