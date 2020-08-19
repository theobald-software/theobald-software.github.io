---
ref: ec-receiving-and-sending-idocs-03
layout: page
title: Ein ORDER-IDoc versenden
description: Ein ORDER-IDoc versenden
product: erpconnect
parent: idocs-senden-und-empfangen
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=ein-order-idoc-versenden
---

**Sie finden den Code dieses Beispiels im ERPConnect-Installationsverzeichnis im Verzeichnis SendOrderIdoc**

Wir haben bereits in einem anderen Beispiel das Senden von IDocs behandelt. Dieses Mal wollen wir allerdings ein etwas komplexeres IDoc behandeln, nämlich ORDERS01, um damit einen Kundenauftrag anzulegen.

Es sind einige Voraussetzungen nötig, damit das SAP-System das IDoc auch wirklich zu einem Auftrag weiterverarbeitet. Diese Schritte sind im AdministrationsAbschnitt für Sie zusammengefasst.

Nach dem Verbinden mit dem SAP-System gibt es zwei Möglichkeiten ein IDoc-Objekt zu erstellen, entweder mit *CreateIdoc* oder mit *CreateEmptyIdoc*. Im ersten Fall werden alle Kind-Segmente bereits gefüllt. Bei einem ORDERS-IDoc ist es aber sinnvoll, *CreateEmptyIdoc* zu nutzen, um nicht so viele leere Segmente, die gar nicht genutzt werden, an das IDoc zu hängen.

Die einzelnen Segmente werden dann mittels *CreateSegment* erzeugt und an die jeweiligen Segment-Collections angehängt. Wir haben auf der Maske der Beispielanwendung zwei Textfelder: Eines für die Materialnummer (txtMaterialNumber) und eines für die Menge (txtQty).

Das folgende Beispiel-IDoc benötigt drei Segmente:

E1EDK01 ist ein Pflichtsegment. Es bleibt leer, muss aber enthalten sein, da das IDoc sonst syntaktisch nicht korrekt wäre.

E1EDP01 ist ein Positionssegment, das die gewünschte Bestellmenge enthält. Es kann natürlich mehrfach vorkommen. In unserem Beispiel gehen wir davon aus, dass der Kundenauftrag nur eine Position enthält.

E1EDP19 ist ein Segment für eine Objektdefinition. Das Kennzeichen 002 bedeutet, dass das nachfolgende Feld eine Materialnummer ist und die Materialnummer selbst wird als Objektschlüssel angegeben. E1EDP19-Segmente sind immer Kindsegmente von E1EDP01.

Falls Sie möchten, können Sie diese Hierarchie auch mit Hilfe der Transaktion WE60 ansehen. 

<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void button1_Click(object sender, System.EventArgs e)
{
    using (R3Connection con = new R3Connection())
    {
 
        con.UserName = "erpconnect";
        con.Password = "pass";
        con.Language = "DE";
        con.Client = "800";
        con.Host = "sapserver";
        con.SystemNumber = 11;
 
        con.Open(false);
 
        Idoc idoc = con.CreateEmptyIdoc("ORDERS01", "");
        idoc.MESTYP = "ORDERS";
 
        // Fill information about idoc sender 
        idoc.SNDPRN = "1172"; // Partner number 
        idoc.SNDPRT = "KU"; // Partner type 
 
        // Create document header segment 
        IdocSegment e1edk01 = idoc.CreateSegment("E1EDK01");
        idoc.Segments.Add(e1edk01);
 
        // Create item segment IdocSegment 
        e1edp01 = idoc.CreateSegment("E1EDP01");
        e1edp01.Fields["MENGE"].FieldValue = txtQty.Text;
        idoc.Segments.Add(e1edp01);
 
        // Create Object identification (material number in this case) 
        IdocSegment e1edp19 = idoc.CreateSegment("E1EDP19");
        // Following Value “002” for Material number 
        e1edp19.Fields["QUALF"].FieldValue = "002";
        // material number 
        e1edp19.Fields["IDTNR"].FieldValue = txtMaterialNumber.Text;
        e1edp01.ChildSegments.Add(e1edp19);
 
        idoc.Send();
        this.lblInfo.Text = "IDoc sent";
    }
}
{% endhighlight %}
</details>

Die Abbildung zeigt das so gesendete IDoc in der Transaktion WE02. Wenn SAP-seitig alles korrekt eingestellt ist, wird das IDoc automatisch zu einem Kundenauftrag weiterverarbeitet. 

![SAP-Send-IDoc-002](/img/content/SAP-Send-IDoc-002.png){:class="img-responsive"}
