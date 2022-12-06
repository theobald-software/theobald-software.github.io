---
ref: ecs-sin-nintex-forms-04
layout: page
title: Dropdown-Listen III (automatisierte API)
description: Dropdown-Listen III (automatisierte API)
product: erpconnect-services
parent: nintex_forms_fuer_sharepoint
permalink: /:collection/:path
weight: 4
lang: de_DE
---

Für das Beispiel mit der flexiblen Datenselektion in kaskadierenden Dropdown-Listen stellen wir darüber hinaus ein überwiegend automatisiertes Script mit wenigen Zeilen Code zur Verfügung.
Damit ist es auch Anwendern ohne JavaScript Kenntnisse möglich, solche Anwendungsszenarien umzusetzen.  

{% highlight javascript %}
NWF$(document).ready(function () {
    theobald.ready(function () {
        theobald.$ = NWF$;

        tEcs.initializeLiveCombobox({
            controls: {
                inputId: input1,
                selectId: combo1,
                outputId: output1,
                descriptionId: outputd1
            },
            tableSettings: {
                tableName: "MAKT",
                idField: "MATNR",
                textField: "MAKTX",
                language: "EN"
            }
        });
        
        tEcs.initializeLiveCombobox({
            controls: {
                inputId: input2,
                selectId: combo2,
                outputId: output2,
                descriptionId: outputd2
            },
            tableSettings: {
                tableName: "KNA1",
                idField: "KUNNR",
                textField: "NAME1",
                language: "EN"
            }
        });
    });
});
{% endhighlight %}

Die vollständige Signatur finden Sie auch [hier](https://static.theobald-software.com/theobald.ecs.micro/5.6.0/index.html#div-liveCombobox).

Das Script stellt eine Vorlage für folgende beiden Anwendungsfälle dar, die aber beliebig geändert oder angepasst werden können:

1. Suche nach einer Materialnummer in der SAP Tabelle MAKT und Ausgabe der möglichen Treffer in der Dropdown-Liste. Selektiert man einen Treffer, werden die Materialnummer und die Materialbeschreibung in zwei separaten Feldern ausgegeben.

2. Suche nach der Kundennummer in der SAP Tabelle KNA1 und Ausgabe der möglichen Treffer in der Dropdown-Liste. Selektiert man einen Treffer, werden die Kundennummer und der Kundenname in zwei separaten Feldern ausgegeben.    

Folgende Schritte müssen ausgeführt werden, um das Beispiel zum Laufen zu bekommen. 

**Schritt 1: Textfelder definieren**

In der Nintex-Form werden vier frei benennbare Felder benötigt (jeweils für beide Beispiele, wenn diese in einer Form ausgeführt werden sollen): 

1. Das erste Feld vom Typ *Single Line Textbox* ist das Eingabefeld und enthält die Materialnummer. Weisen Sie diesem Feld die JavaScript Variable *input1* zu.
2. Im zweiten Feld vom Typ *Choice** werden die möglichen Treffer für die eingegebene Materialnummer in einer Dropdownliste ausgegeben und sind selektierbar. Weisen Sie diesem Feld die JavaScript Variable *combo1* zu.
3. Im dritten Feld vom Typ *Single Line Textbox* wird die Materialnummer zum gewählten Material angezeigt. Weisen Sie diesem Feld die JavaScript Variable *output1* zu.  	
4. Im vierten Feld vom Typ *Single Line Textbox* wird der Material-Langtext zum ausgewählten Material angezeigt. Weisen Sie diesem Feld die JavaScript Variable *outputd2* zu.  

Das zweite Beispiel im Script funtkioniert analog, verwenden Sie dafür jedoch die entsprechenden Variablenbezeichnungen dieses Beispiels (input2, combo2,...).    

Die Bezeichnungen für die JavaScript Variablen sind im Script so vorgeschlagen, können aber geändert werden.
Zudem lassen sich im Abschnitt *tableSettings* die folgenden Felder frei zuordnen: 

*tableName*: Name der SAP Tabelle
*idField*: Name des Feldes mit der anzuzeigenden ID.  
*textField*: Name des Feldes mit dem Beschreibungstext
*language*: Kürzel der SAP-Anmeldesprache (DE, EN, etc.)

Das Beispiel ist damit für eine Vielzahl von möglichen Szenarien anpassbar und einsetzbar, ohne komplizierten Code.  


**Schritt 2: JavaScript-Code einfügen**

Fügen Sie eine Referenz zu unserer JavaScript-Bibliothek unter *Form Settings -> Advanced -> Custom JavaScript Includes* ein:

[https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html](https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html)

Die aktuelle Version der JavaScript-Bibliothek erhalten Sie bei der Eingabe der abgekürzten URL:

[http://static.theobald-software.com/theobald.ecs.micro/](http://static.theobald-software.com/theobald.ecs.micro/)

Fügen Sie den JavaScript-Code unter *Form Settings -> Advanced -> Custom JavaScript* ein.


**Schritt 3: Die Nintex Form veröffentlichen und ausführen**

Nachdem Sie die Form veröffentlicht haben, können Sie diese ausführen und das Beispiel nutzen.

![nintex-forms-js-dropdown-09](/img/content/nintex-forms-js-dropdown-09.gif){:class="img-responsive"}








