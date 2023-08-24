Dieser Abschnitt beinhaltet Informationen zu Anpassungen, die in {% if page.product == "xtract-is" %}Xtract IS{% elsif page.product == "xtract-for-alteryx" %}Xtract for Alteryx{% elsif page.product == "xtract-universal" %}Xtract Universal{% elsif page.product == "board-connector" %}Board Connector{% endif %} notewendig sind, wenn Sie von SAP R3 oder SAP ERP (SAP ECC) nach SAP S/4HANA migrieren.

{: .box-tip }
**Empfehlung:** Verwenden Sie eine Testumgebung, um die Migration zu einem neuen SAP System zu testen. 

### Migration der SAP Quellen

Nach der Migration nach SAP S/4HANA, prüfen Sie die folgenden {% if page.product == "xtract-is" %}Xtract IS{% elsif page.product == "xtract-for-alteryx" %}Xtract for Alteryx{% elsif page.product == "xtract-universal" %}Xtract Universal{% elsif page.product == "board-connector" %}Board Connector{% endif %} Einstellungen in einer Testumgebung.

1. Aktualisieren Sie alle SAP-Verbindungen, die sich noch auf das alte SAP System verbinden, siehe {% if page.product == "xtract-universal" or page.product == "board-connector" %}[Eine SAP-Verbindung erstellen](../erste-schritte/sap-verbindungen-anlegen){% else %}[SAP Verbindung](../sap-verbindung){% endif %}.
2. Testen Sie alle Extraktionen in Ihrer Testumgebung.<br>
**Tipp:** Wenn sich die Metadaten einer SAP Datenquelle nach der Migration geändert haben, aktualisieren Sie die Metadaten in {% if page.product == "xtract-is" %}Xtract IS{% elsif page.product == "xtract-for-alteryx" %}Xtract for Alteryx{% elsif page.product == "xtract-universal" %}Xtract Universal{% elsif page.product == "board-connector" %}Board Connector{% endif %}.
3. Wenn Fehler auftreten, empfehlen wir das Produkt zu aktualisieren. Die Fehlerursache kann in einer neueren Softwareversion bereits behoben sein.
- Laden Sie die neueste Softwareversion im Theobald Software [Kundenportal](https://my.theobald-software.com/) herunter.
- Aktualisieren Sie das Produkt, siehe {% if page.product == "xtract-universal" or page.product == "board-connector" %}[Installation und Update](./einfuehrung/installation-und-update){% elsif page.product == "xtract-for-alteryx" or page.product == "xtract-is"%}[Update](./update){% endif %}.
- Wenn das Softwareupdate die Fehler nicht behebt, kontaktieren Sie den Theobald Software [Support](support@theobald-software.com).
4. Stellen Sie das Upgrade für die Produktivumgebung bereit.

