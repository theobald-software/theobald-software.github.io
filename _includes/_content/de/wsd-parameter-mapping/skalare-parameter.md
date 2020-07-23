Im Folgenden wird erklärt, wie man unterschiedliche Ausgabeparameter eines SAP-Funktionsbausteins auf skalare Ausgabeparameter einer Webservice-Operation mappen können. Beachten Sie, dass die Mapping-Richtung in diessem Fall umgekehrt ist: Vom Funktionsbaustein zu den WebService-Parametern. 


### Struktur-Parameter auf skalare Parameter mappen

Im folgenden Beispiel zeigen wir Ihnen, wie Sie einen Struktur-Parameter eines Funktionsbausteins auf skalare Parameter einer Webservice-Operation mappen können. 

Als Anwendungsfall ziehen wir den Funktionsbaustein BAPI_COMPANYCODE_GETDETAIL heran. Dieser Funktionsbaustein liest Firmeninformationen zu einem bestimmten Buchungskreis aus und listet die Ergebnisse in mehreren Struktur-Parametern auf.    

Ziel dieses Szenarios ist es, die Felder CITY, COMP_NAME und COMP aus der Ausgabestruktur COMPANYCODE_DETAIL auf die skalaren Ausgabeparameter CompanyID, CompName und City der Webservice-Operation zu mappen.  

Legen Sie eine Operation an, die den Funktionsbaustein BAPI_COMPANYCODE_GETDETAIL aufruft und kehren Sie zur Übersichtsseite zurück.. 

Definieren Sie anschließend Ihre skalaren Ausgabeparameter. 

![WSD-MappingStructureMappingOutput6](/img/content/WSD-MappingStructureMappingOutput6.png){:class="img-responsive"}

Schließen Sie Ihre Eingaben mit OK ab und rufen Sie den Aktivitätsdialog auf.<br> 
Das Mapping einer Ausgabestruktur auf skalare Parameter funktioniert nur über die Advanced-Einstellungen. Rufen Sie den Tab "Advanced" auf und klicken unter Output-Mappings auf New. In dem Dialogfenster werden nun alle definierten skalaren Outputparameter angezeigt. <br>
Die entsprechenden Felder des Strukturparameters COMPANYCODE_DETAIL sollen nun auf diese Parameter gemappt werden.  

![WSD-MappingStructureMappingOutput8](/img/content/WSD-MappingStructureMappingOutput8.png){:class="img-responsive"}

Markieren Sie den Ausgabeparameter CompanyID und rufen die Mapping Expression auf. Im Mapping Expression Dialog wechseln Sie zum Tab *Function Parameters* und wählen die Struktur COMPANYCODE_DETAIL mit einem Doppelklick aus. 

![WSD-MappingStructureMappingOutput9](/img/content/WSD-MappingStructureMappingOutput9.png){:class="img-responsive"}

Unter *Mapping Expression* muss nun noch definiert werden, welche Felder der Struktur mit dem Ausgabeparameter CompanyID gemappt werden sollen. Schauen Sie in die SAP-Ausgabestruktur des Funktionsbausteins BAPI_COMPANYCODE_GETDETAIL, wenn Sie die Feldnamen benötigen.

![WSD-MappingStructureMappingOutput10](/img/content/WSD-MappingStructureMappingOutput10.png){:class="img-responsive"}

Das Feld *COMP* soll mit dem skalaren Ausgabeparameter CompanyID gemappt werden. Dieser Vorgang muss manuell als Syntax in der Mapping Expression Zeile hinzugefügt werden. 

Im vorliegenden Beispiel lautet der Befehl *["COMP"].ToString* ()<br>
Bestätigen Sie die Eingaben mit OK.

![WSD-MappingStructureMappingOutput11](/img/content/WSD-MappingStructureMappingOutput11.png){:class="img-responsive"}

Verfahren Sie so auch mit den weiteren beiden Parametern. Mappen Sie das Feld *COMP_NAME* auf den Parameter CompName und das Feld *CITY* auf den Parameter City. Unter *Output Mappings* im Tab "Advanced" stehen dann drei Einträge.

![WSD-MappingStructureMappingOutput12](/img/content/WSD-MappingStructureMappingOutput12.png){:class="img-responsive"}

Das Mapping der Ausgabe-Parameter ist damit abgeschlossen.
  

### Tabellenwerte auf skalare Parameter mappen


Im nächsten Beispiel demonstrieren wir, wie Tabellenwerte eines Funktionsbausteins auf skalare Ausgabe-Parameter einer Webservice-Operation gemappt werden können.

Als Anwendungsbeispiel dient uns der Funktionsbaustein BAPI_REQUISITION_CREATE. Dieser Funktionsbaustein wird verwendet um eine Bestellanforderung (BANF) in SAP anzulegen. Die Ergebnisse des ausgeführten Funktionsbausteins werden in der Tabelle RETURN zurückgegeben. Ziel ist es, das Feld *Message* der Ausgabetabelle RETURN auf den Ausgabeparameter ResultMessage der Webservice-Operation zu mappen.  

Legen Sie zunächst eine Operation an, die den Funktionsbaustein BAPI_REQUISITION_CREATE aufruft und kehren Sie zur Übersichtsseite zurück. Legen Sie anschließend den Ausgabe-Parameter an. Öffnen Sie das Parameters Dialogfenster und erzeugen Sie einen neuen Eintrag mit *New*. Nennen Sie den Parameter *ResultMessage*. Die Richtung ist bei Ausgabe-Parametern *Output*.  

![WSD-MappingSkalarMappingOutput9](/img/content/WSD-MappingSkalarMappingOutput9.png){:class="img-responsive"}

Als nächsten Schritt wollen wir den Wert *Message* der Ausgabetabelle RETURN auf den Ausgabe-Parameter *ResultMessage* mappen. <br>
Rufen Sie dafür im Aktivitätsdialog den Tab *Advanced* auf. Es ist nicht möglich, die folgenden Aktionen im Standard-Tab durchzuführen.<br>  
Im *Advanced* Fenster finden Sie Sie die zwei Bereiche *Input Mappings* und *Output Mappings*. Die Bereiche sollten leer sein, wenn Sie zuvor keine Mapping-Aktivitäten durchgeführt haben. Klicken Sie unter *Output Mappings* auf *New*, um mit dem Mapping der Ausgabe-Parameter fortzufahren.

![WSD-MappingSkalarMappingOutput2](/img/content/WSD-MappingSkalarMappingOutput2.png){:class="img-responsive"}

Machen Sie einen Doppelklick auf den Outputparameter *ResultMessage* und klicken Sie rechts der Mapping Expression Zeile auf den Button mit den drei Punkten, um in den Mapping Expression Dialog zu gelangen.

![WSD-MappingSkalarMappingOutput4](/img/content/WSD-MappingSkalarMappingOutput4.png){:class="img-responsive"}

Rufen Sie hier den Tab *Function Parameters* auf und scrollen zur Tabelle RETURN. Rufen Sie diese mit einem Doppelklick auf, damit wird der Funktionsparameter im Feld *Mapping Expression* gesetzt. 

![WSD-MappingSkalarMappingOutput5](/img/content/WSD-MappingSkalarMappingOutput5.png){:class="img-responsive"}

Der Rest der Befehlssyntax muss manuell im Feld *Mapping Expression* ergänzt werden. Aus Zeile 1 der Tabelle soll die Instanz Message in die Ausgabeliste geschrieben werden. 

Der Befehl lautet damit .*Rows[0]["Message"].ToString*() 

![WSD-MappingSkalarMappingOutput6](/img/content/WSD-MappingSkalarMappingOutput6.png){:class="img-responsive"}

Bestätigen Sie die Eingaben mit OK.

![WSD-MappingSkalarMappingOutput7](/img/content/WSD-MappingSkalarMappingOutput7.png){:class="img-responsive"}

![WSD-MappingSkalarMappingOutput8](/img/content/WSD-MappingSkalarMappingOutput8.png){:class="img-responsive"}

Das Mapping der Ausgabe-Parameter ist damit abgeschlossen. 