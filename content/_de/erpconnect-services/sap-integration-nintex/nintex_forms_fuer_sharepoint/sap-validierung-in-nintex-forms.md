---
ref: ecs-sin-nintex-forms-01
layout: page
title: SAP-Validierung in Nintex-Forms
description: SAP-Validierung in Nintex-Forms
product: erpconnect-services
parent: nintex_forms_fuer_sharepoint
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=sap-validierung-in-nintex-forms
---

Beim Einsatz von Nintex-Forms in SAP-Integrationsszenarien ist es oft notwendig, die Eingabedaten zu prüfen, ob sie gültig im SAP-System sind, bevor wir die Form verschicken. Wenn die Form ein Eingabefeld beispielsweise für eine SAP-Kundennummer hat, wollen wir prüfen, ob diese Kundennummer im SAP-System existiert. 

ERPConnect Services (ECS) bieten REST-Services für SAP-Operationen, welche von JavaScript konsumiert werden können, welches wieder von den Nintex-Forms unterstützt wird. In diesem Beispiel werden wir die eingegebene SAP-Kundennummer in der Nintex-Form mit Hilfe von JavaScript und ERPConnect Services REST Services auf Gültigkeit im SAP-System prüfen.

**Schritt 1: Textfelder definieren**

In unserer Nintex-Form benötigen wir zwei Felder: 
Das erste Feld *field_input* enthält die Kundennummer. 
Das zweite Feld *field_output* enthält den SAP-Kundennamen falls die Eingabe gültig ist ansonsten eine Fehlermeldung.

![nintex-forms-js-ecs-01](/img/content/nintex-forms-js-ecs-01.png){:class="img-responsive"}

Klicken Sie mit der rechten Maustaste auf das erste Feld und wählen Sie *Settings*.

![nintex-forms-js-ecs-02](/img/content/nintex-forms-js-ecs-02.png){:class="img-responsive"}

Setzen Sie die Option *Store Client ID in JavaScript Variable* auf *Yes*.<br>
Setzen Sie einen Namen ins Feld *Client ID JavaScript variable name*, z.B. *field_input*.

![nintex-forms-js-ecs-03](/img/content/nintex-forms-js-ecs-03.png){:class="img-responsive"}

Wiederholen Sie die letzten Schritte fürs zweite Feld und benennen Sie es, z.B. *field_output*.

![nintex-forms-js-ecs-04](/img/content/nintex-forms-js-ecs-04.png){:class="img-responsive"} 

**Schritt 2: JavaScript-Code einfügen**

Fügen Sie eine Referenz zu unserer JavaScript-Bibliothek unter *Form Settings -> Advanced -> Custom JavaScript Includes* ein:

[https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html]()


![nintex-forms-js-ecs-05](/img/content/nintex-forms-js-ecs-05.png){:class="img-responsive"}

Fügen Sie den JavaScript-Code unter *Form Settings -> Advanced -> Custom JavaScript* ein.

![nintex-forms-js-ecs-06](/img/content/nintex-forms-js-ecs-06.png){:class="img-responsive"}

Im Code wird die Funktion *tEcs.ExeculeXQL* aufgerufen, um den Kundennamen aus der SAP-Tabelle KNA1 zu lesen. 

{% highlight javascript %}
// webpage loaded
NWF$(document).ready(function() {
    // tecs5
    theobald.ready(function() {    
        var $ = NWF$,
            // number input
            tsInput = $('#' + field_input),
            // description output
            tsInputDescription = $('#' + field_output);           
        tsInput.on('blur', function() {        
            tEcs.executeXql({            
                data: tEcs.format("SELECT TOP 2 KUNNR, NAME1 FROM KNA1 WHERE (KUNNR LIKE '%{0}') ", tsInput.val())        
            }).done(function(data) {            
                if (data.length === 1) {                
                    var firstRow = data[0];                
                    tsInputDescription.val(tEcs.format('{0} - {1}', firstRow.KUNNR, firstRow.NAME1));            
                } else {                
                    tsInputDescription.val('No direct match!');            
                }        
            }).fail(function(data, data2) {            
                tsInputDescription.val('Communication error, please see console');        
            });    
        });
    });
});
{% endhighlight %}

Für weitere Informationen siehe [JavaScript Library for REST]().  
Dieses Szenario können Sie auch mit ECS Core umsetzen, siehe [Developing with ECS Core]().

**Schritt 3: Die Nintex Form ausführen**

Nun führen Sie die Form aus und geben Sie eine Kundennummer ein. Der Kundenname wird aus SAP gelesen und im zweiten Feld angezeigt.  



![nintex-forms-js-ecs-07](/img/content/nintex-forms-js-ecs-07.png){:class="img-responsive"}

Sollte die eingegebene Kundennummer im SAP nicht existieren, erscheint eine entsprechende Fehlermeldung. 

![nintex-forms-js-ecs-08](/img/content/nintex-forms-js-ecs-08.png){:class="img-responsive"}

Dieses Beispiel zeigt, wie Sie Eingabedaten in Nintex Form auf SAP-Gültigkeit prüfen. Die Prüfung wurde mit Hilfe von JavaScript und ERPConnect Services REST Services umgesetzt. <br>
Weitere Szenarien sind ggf. möglich. Möglich wäre es, eine Combobox mit SAP Kundennummern bzw. -namen zu füllen oder eine direkte SAP-Suche anzubieten.<br>
Ein anderer Ansatz wäre, die SAP-Daten (z.B. Kundennummer bzw. -name) als externe Spalte in die Nintex-Form einzubinden. Die externe Spalte kommt aus einem externen SharePoint-Inhaltstyp, welcher auf das SAP-Businessobjekt (z.B. Kunde) basiert und mit dem [BCS Connector](../../ecs-de/bcs-connector) angelegt wird. 


