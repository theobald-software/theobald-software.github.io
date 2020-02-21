---
ref: ecs-core-webservice-designer-05
layout: page
title: Parameter-Mapping
description: Parameter-Mapping
product: ecs-core
parent: transaktionsrekorder_feature
permalink: /:collection/:path
weight: 4
lang: de_DE
---

Um Eingabeparameter auf die angebotenen Input-Felder zu mappen, schließen Sie die *Transaction Recorder Activity* und definieren Sie Ihre Parameter zunächst unter *Parameters*.

![ta_rec_feature_12](/img/content/ecscore/ecscore-wsd_ta_rec_12.png){:class="img-responsive"}


Alle Parameter müssen als Eingabeparameter definiert werden, der Standardfall ist ein Parameter vom Datentyp *String*. 
Beachten Sie, dass Sie nur Eingabeparameter für Felder definieren müssen, mit denen Sie die Interaktion über den Web Service explizit zulassen wollen. Wenn Sie keine Eingabeparameter für Felder definieren, die aufgezeichnet wurden, 
werden für diese Felder die aufgezeichneten Werte als Standardwerte genommen.


Nachdem Sie Ihre Parameter definiert haben, schließen Sie den Parameterdialog und öffnen die *Transaction Recorder Activity*. Sie können nun die definierten Parameter den im Karteireiter *Standard* angebotenen Feldern zuordnen. 

![ta_rec_feature_13](/img/content/ecscore/ecscore-wsd_ta_rec_13.png){:class="img-responsive"}


Im Beispiel für die Materialanlage (Transaktion MM01) soll für das Feld MSICHTAUSW-KZSEL(01), das für die Auswahl des Eingabebildes *Basisdaten 1* steht, kein Eingabeparameter definiert werden. 
Außerdem soll für das Feld MARA-MEINS, das die Mengeneinheit für das neu angelegte Material darstellt, der aufgezeichnete Wert als Vorgabe genommen werden.   

![ta_rec_feature_14](/img/content/ecscore/ecscore-wsd_ta_rec_14.png){:class="img-responsive"}

Es ist möglich, diesem Feld standardmäßig einen anderen festen Wert zuzuweisen, indem der Wert zwischen den Anführungszeichen direkt im *Mapping expression* Feld eingegeben wird.

![ta_rec_feature_15](/img/content/ecscore/ecscore-wsd_ta_rec_15.png){:class="img-responsive"}

Es wird empfohlen, einen Webservice nach einer Transaktionsaufzeichnung zunächst ohne Parameter-Mapping bereitzustellen und zu testen. Damit können Sie überprüfen, ob der Webservice mit den Standardeingabewerten aus der Aufzeichnung funktioniert. 
