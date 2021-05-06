Der folgende Abschnitt gibt einen Überblick über die Einstellungen, die für die ODP-Komponente geändert werden können.
Die Einstellungen können über das Fenster "Define data source for SAP ODP" geändert werden. 
![ODP Component](/img/content/odp/odp_overview.png){:class="img-responsive"}

{% include _content/de/odp/odp-settings-update_mode.md %} 
{% include _content/de/odp/odp-settings-subscriptions.md %} 
{% include _content/de/odp/odp-settings-filtering.md %}

### General Settings
Die [General Settings](../erste-schritte/allgemeine-einstellungen) beinhalten Einstellungen zu Sicherheit, Verschlüsselung und Schlüsselwörtern.

{% include _content/de/odp/odp-settings-parameters.md %}
{% include _content/de/odp/odp-settings-advanced.md %}

#### Parameter in SSIS anschauen
Parameter erscheinen als Eigenschaften des Xtract ODP-Objekts sowie des SSIS-Datenflusses (Data Flow). Die Parameter und die Eigenschaften werden zur Laufzeit des SSIS-Pakets mit Hilfe von Standard-SSIS-Funktionen wie Ausdrücken, Variablen usw. gefüllt. 

![ODP-Eigenschaften](/img/content/xis/odp_parameter.png){:class="img-reagierend"}

