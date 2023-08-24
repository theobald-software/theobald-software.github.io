Dieser Abschnitt beinhaltet Informationen zu Anpassungen, die in {% if page.product == "xtract-is" %}Xtract IS{% elsif page.product == "xtract-for-alteryx" %}Xtract for Alteryx{% elsif page.product == "xtract-universal" %}Xtract Universal{% elsif page.product == "board-connector" %}Board Connector{% endif %} notewendig sind, wenn Sie von SAP R3 oder SAP ERP (SAP ECC) nach SAP S/4HANA migrieren.

{: .box-tip }
**Empfehlung:** Verwenden Sie eine Testumgebung, um die Migration zu einem neuen SAP System zu testen. 

### Migration der SAP Quellen

1. Migrieren Sie das SAP System in Ihrer Testumgebung nach SAP S/4HANA.
2. Aktualisieren Sie alle SAP-Verbindungen, in denen das ursprüngliche SAP System hinterlegt war, siehe {% if page.product == "xtract-universal" or page.product == "board-connector" %}[Eine SAP-Verbindung erstellen](../erste-schritte/sap-verbindungen-anlegen){% else %}[SAP Verbindung](../sap-verbindung){% endif %}.
3. Testen Sie alle Extraktionen in Ihrer Testumgebung.<br>
**Tipp:** Wenn sich die Metadaten eine SAP Datenquelle nach der Migration geändert haben, aktualisieren Sie die Metadaten in {% if page.product == "xtract-is" %}Xtract IS{% elsif page.product == "xtract-for-alteryx" %}Xtract for Alteryx{% elsif page.product == "xtract-universal" %}Xtract Universal{% elsif page.product == "board-connector" %}Board Connector{% endif %}.
4. Wenn Fehler auftreten, empfehlen wir das Produkt zu aktualisieren. Die Fehlerursache kann in einer neueren Softwareversion bereits behoben sein.
- Laden Sie die neueste Softwareversion im Theobald Software [Kundenportal](https://my.theobald-software.com/) herunter.
- Aktualisieren Sie das Produkt, siehe {% if page.product == "xtract-universal" or page.product == "board-connector" %}[Installation und Update](./einfuehrung/installation-und-update){% elsif page.product == "xtract-for-alteryx" or page.product == "xtract-is"%}[Update](./update){% endif %}.
- Wenn das Softwareupdate die Fehler nicht behebt, kontaktieren Sie den Theobald Software [Support](support@theobald-software.com).
5. Stellen Sie das Upgrade für die Produktivumgebung bereit.

****
#### Weiterführende Links
- [SAP Dokumentation: Converting SAP Systems to S/4HANA Using Software Update Manager](https://help.sap.com/docs/SLTOOLSET/e239e55723bc4d8ca923bba137df205b/11ce6d4c264c44db965f9272ed785ec3.html)
{% if page.product == "xtract-universal" or page.product == "board-connector" %}- [Installation und Update](./installation-and-update){% elsif page.product == "xtract-for-alteryx" or page.product == "xtract-is"%}- [Update](./update){% endif %}
{% if page.product == "xtract-universal" or page.product == "board-connector" %}- [Backup und Migration](./backup-und-migration){% endif %} 