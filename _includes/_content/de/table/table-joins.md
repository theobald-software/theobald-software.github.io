Die *Join*-Funktionalität der Xtract Table-Komponente ermöglicht es, zwei oder mehr Tabellen zu verbinden (joinen) und das Ergebnis der Verbindung zu extrahieren. 
Um die Extraktion durchzuführen, wird der entsprechende SQL-Befehl dynamisch generiert und der Join auf dem SAP-Server ausgeführt. <br>

Mögliche Szenarien können die Verknüpfung von Tabellen für Kopf- und Positionsdaten oder Tabellen für Stammdaten und Texte sein. 

Unterstützte Join-Typen:
- Inner Join
- Left Outer Join, auch als *Left Join* bezeichnet.

Weitere Informationen über Join-Typen finden Sie in der [SAP-Online-Hilfe] (https://help.sap.com/doc/saphelp_nwpi71/7.1/en-US/cf/21ec77446011d189700000e8322d00/content.htm?no_cache=true).

{: .box-note }
**Hinweis**: Als Voraussetzung für die Verwendung des Tabellen-Join muss der Funktionsbaustein [Z_THEO_READ_TABLE](../sap-customizing/custom-function-module-for-table-extraction) in SAP verfügbar sein. <br> 

{: .box-note }
**Hinweis**: Das Joinen von Cluster- oder Pool-Tabellen wird nicht unterstützt. Diese Arten von Tabellen müssen einzeln extrahiert und auf der Seite der Destination zusammengefügt werden.

### Joinen von zwei Tabellen

Das folgende Beispiel zeigt, wie die Tabellen MARA und MAKT verbunden werden können.

![Table join steps](/img/content/join_steps_1.png){:class="img-responsive"}

1. Klicken Sie im Tab *Tabellen und Felder* auf **[Add]** (1), um zwei Tabellen (z.B. MARA und MAKT) hinzuzufügen.
2. Wählen Sie beide Tabellen auf der linken Seite aus und markieren Sie die Felder, die Sie extrahieren möchten (2). 
3. Wechseln Sie zum Tab *Joins*, um die Join-Bedingung zu definieren. Eine Join-Bedingung, die auf der Fremdschlüsselbeziehung der verknüpften Tabellen basiert, ist automatisch voreingestellt.
4. Optional: Wechseln Sie zum Tab *WHERE clause* und geben Sie eine [WHERE-Bedingung](./where-bedingung) ein.

{: .box-note }
**Hinweis**: Achten Sie bei der Angabe einer WHERE-Bedingung auf die Einschränkungen der [WHERE-Bedingung](./where-clause#where-clause#where-clause_restrictions).

Klicken Sie in dem Tab *Joins* auf **Edit** (Bleistift-Symbol), um die Join-Optionen anzuzeigen. <br>
Im dargestellten Beispiel wird ein Left Outer Join auf die Tabellen MARA (linke Tabelle) und MAKT (rechte Tabelle) auf dem Feld MATNR durchgeführt. Es wird eine WHERE-Bedingung *MAKT~SPRAS = 'EN'* spezifiziert.<br>
![Table-Join-Verbindung](/img/content/join_verknüpfungen_01.png){:class="img-responsive"}


*Left Table* (Linke Tabelle), *Right Table* (Rechte Tabelle), *Join Type* (Join-Typ) und *Join Mapping* sind mit Standardwerten voreingestellt. Sie können bei Bedarf modifiziert werden. Das *Join Mapping* basiert auf der Fremdschlüsselbeziehung der verbundenen Tabellen.<br>
- Klicken Sie auf **[Add]**, um die Verknüpfungsbedingung auf weitere Felder auszudehnen. 
- Klicken Sie auf **Remove** (Mülleimer-Symbol), um bestehende Verknüpfungen zu entfernen. 
- Joinen Sie zusätzliche Tabellen im Tab *Tabellen und Felder*. 

{: .box-tip }
**Empfehlung**: Um Performance-Probleme zu vermeiden, joinen Sie nicht mehr als fünf Tabellen.

{: .box-tip }
**Tipp**: Verschiedene Tabellen können identische Feldnamen haben. Die Definition einer Join-Bedingung auf der Grundlage der identischen Feldnamen liefert nicht immer das erwartete Ergebnis (z.B. VBAK~VBELN <> LIPS~VBELN).
Stellen Sie sicher, dass die Felder, die Sie in einer Join-Bedingung verwenden, den gleichen Inhalt/die gleichen Daten enthalten.

##### Auto-Mapping-Funktion (optional)

Der Button **[Auto-Map]** löscht bestehende Join-Bedingungen und führt eine neue Feldzuordnung auf der Grundlage der Fremdschlüsselbeziehung der verbundenen Tabellen durch. 
![Table-Join-Automapping](/img/content/join_automap.png){:class="img-responsive"}


### Joinen von drei Tabellen
Beispiel für einen Join mit einer dritten Tabelle MARC:

![Table-Join-Verknüpfungen2](/img/content/join_verknüpfungen_02.png){:class="img-responsive"}

![Table-Join-Verknüpfungen3](/img/content/join_verknüpfungen_03.png){:class="img-responsive"}

   

