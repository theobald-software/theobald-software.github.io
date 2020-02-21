---
ref: ecs-core-webservice-designer-05
layout: page
title: Transaction Recorder Activity
description: Transaction Recorder Activity
product: ecs-core
parent: transaktionsrekorder_feature
permalink: /:collection/:path
weight: 3
lang: de_DE
---

Nach einer erfolgreichen Aufzeichnung wird die SAP GUI geschlossen und das Fenster *Transaction Recorder Activity* erscheint im WebService Designer. Dort finden Sie die folgenden Registerkarten:

**Standard**

Im Karteireiter *Standard* finden Sie die Felder, die Sie irgendwie in der Aufzeichnung verwendet oder mit Werten gefüllt haben, und können diese auf Eingabeparameter abbilden. Es sind die technischen Feldnamen aus SAP. 
Um die Bedeutung der Felder zu verstehen, hilft die Aufzeichnungsübersicht im Kareteireiter *References*. Außerdem können alle Feldbeschreibungen direkt in der SAP-Transaktion nachgeschaut werden. 

![ta_rec_feature_10](/img/content/ecscore/ecscore-wsd_ta_rec_10.png){:class="img-responsive"}

**References**

Im Karteireiter *References* erhalten Sie eine Übersicht über die Aufzeichnung der Transaktion. Sie sehen eine Folge von Aktionen, beginnend mit der Eingabe des Transaktionscodes.
Im Prinzip sind nur die Sequenznummern, bei denen eine Eingabe gemacht wurde, von Bedeutung. Alle anderen Felder (im Beispiel beginnend mit "BDC") sind technische Vorgänge, 
wie z.B. das Springen mit dem Cursor zum nächsten Feld oder zum nächsten Eingabebild und können daher ignoriert werden.

![ta_rec_feature_11](/img/content/ecscore/ecscore-wsd_ta_rec_11.png){:class="img-responsive"}

  
**Labels**

Im Karteireiter *Labels* können Sie den Activity Titel und den Subtitel für die aufgezeichnete Transaktion umbenennen (z.B. einen sprechenden Namen für den Transaktionscode angeben).

![ta_rec_feature_24](/img/content/ecscore/ecscore-wsd_ta_rec_24.png){:class="img-responsive"}
