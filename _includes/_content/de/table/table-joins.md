Die *Join*-Funktionalität der Xtract Table-Komponente ermöglicht es, zwei oder mehr Tabellen zu verknüpfen (joinen) und das Ergebnis des Joins zu extrahieren. 
Um die Extraktion durchzuführen, wird der entsprechende SQL-Befehl dynamisch generiert und der Join auf dem SAP-Server ausgeführt. <br>

Mögliche Szenarien sind die Verknüpfung von Tabellen für Kopf- und Positionsdaten oder Tabellen für Stammdaten und Texte. 

Unterstützte Join-Typen:
- Inner Join
- Left Outer Join, auch als *Left Join* bezeichnet.

Weitere Informationen über Join-Typen finden Sie in der [SAP-Online-Help](https://help.sap.com/doc/saphelp_nwpi71/7.1/en-US/cf/21ec77446011d189700000e8322d00/content.htm?no_cache=true).

{: .box-note }
**Hinweis**: Die Verwendung von Table Join ist mit dem Funktionsbaustein [/THEO/READ_TABLE](../sap-customizing/funktionsbaustein-fuer-table-extraktion) in SAP möglich. 
Version 1.x des Funktionsbausteins unterstützt Inner Join, ab Version 2.10 werden sowohl Inner Join als auch Left Outer Join unterstützt.<br> 

{: .box-note }
**Hinweis**: Das Joinen von Cluster- oder Pool-Tabellen wird nicht unterstützt. Cluster- und Pool-Tabellen müssen einzeln extrahiert und im Datenziel miteinander verknüpft (gejoint) werden.


### Joinen von zwei Tabellen

Das folgende Beispiel zeigt, wie die Tabellen KNA1 und KNVV verknüpft werden können.

![Table join steps](/img/content/join_steps_1.png){:class="img-responsive"}

1. Klicken Sie im Tab *Tables and Fields* auf **[Add]** (1), um zwei Tabellen (z.B. KNA1 und KNVV) hinzuzufügen.
2. Wählen Sie beide Tabellen auf der linken Seite aus und markieren Sie die Felder, die Sie extrahieren möchten (2). 
3. Wechseln Sie zum Tab *Joins* (3), um die Join-Bedingung zu definieren. Eine Join-Bedingung ist automatisch voreingestellt. Die Join-Bedingung basiert auf der Fremdschlüsselbeziehung der beteiligten Tabellen.
4. Optional: Wechseln Sie zum Tab *WHERE clause* und geben Sie eine [WHERE-Bedingung](./where-bedingung) ein.

{: .box-note }
**Hinweis**: Achten Sie bei der Angabe einer WHERE-Bedingung auf die [Einschränkungen der Bedingung](./where-bedingung#einschränkungen-bei-where-bedingungen) für rechte Tabellen eines Table-Joins über einen LEFT OUTER JOIN.

Klicken Sie in dem Tab *Joins* auf **[Edit]** ( ![pen](/img/content/icons/pen.png) Symbol), um die Join-Optionen anzuzeigen. <br>
Im dargestellten Beispiel wird ein Left Outer Join auf die Tabellen KNA1 (linke Tabelle) und KNVV (rechte Tabelle) auf dem Feld KUNNR durchgeführt. Es wird eine WHERE-Bedingung *KNA1~LAND1 = 'DE'* spezifiziert. 
![Table-Join](/img/content/join_verknüpfungen_01.png){:class="img-responsive"}


*Left Table* (linke Tabelle), *Right Table* (rechte Tabelle), *Join Type* (Join-Typ) und *Join Mapping* sind mit Standardwerten voreingestellt. Sie können bei Bedarf modifiziert werden. Das *Join Mapping* basiert auf der Fremdschlüsselbeziehung der verknüpften Tabellen.<br>
- Klicken Sie auf **[Add]**, um die Join-Bedingung auf weitere Felder auszudehnen. 
- Klicken Sie auf **[Remove]** ( ![trashbin](/img/content/icons/trashbin.png) Symbol), um bestehende Verknüpfungen zu entfernen. 
- Joinen Sie zusätzliche Tabellen im Tab *Tables and Fields*. 

{: .box-tip }
**Empfehlung**: Um Performance-Probleme zu vermeiden, joinen Sie nicht mehr als fünf Tabellen.

{: .box-tip }
**Tipp**: Verschiedene Tabellen können identische Feldnamen haben. Die Definition einer Join-Bedingung auf der Grundlage der identischen Feldnamen liefert nicht immer das erwartete Ergebnis (z.B. VBAK~VBELN <> LIPS~VBELN).
Stellen Sie sicher, dass die Felder, die Sie in einer Join-Bedingung verwenden, den gleichen Inhalt/die gleichen Daten enthalten.


##### Auto-Mapping-Funktion (optional)

Der Button **[Auto-Map]** löscht bestehende Join-Bedingungen und führt eine neue Feldzuordnung auf der Grundlage der Fremdschlüsselbeziehung der verknüpften Tabellen durch. 
![Table-Join-Automapping](/img/content/join_automap.png){:class="img-responsive"}



### Joinen von drei Tabellen
Beispiel für einen Join mit einer dritten Tabelle KNB1:

![Table-Join-Verknüpfungen2](/img/content/join_verknüpfungen_02.png){:class="img-responsive"}

![Table-Join-Verknüpfungen3](/img/content/join_verknüpfungen_03.png){:class="img-responsive"}

   

