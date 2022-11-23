### Parametrisierung mit Expression Properties


Die empfohlene Art der Parametrisierung ist das Befüllen von *Data Flow Properties* durch SSIS-Ausdrücke.<br>
*Data Flow Properties* werden im "Properies" Fenster des Data Flow Tasks angezeigt.
Diese Properties sind nicht zu verwechseln mit den *Custom Properties*, die im "Properies" Fenster der Komponente angezeigt werden.
Die *Custom Properties* werden bei der Parametrisierung von *Data Flow Properties* überschrieben.

Für mehr Informationen zu Eigenschaftsausdrücken, siehe [Microsoft Dokumentation: Verwenden von Eigenschaftsausdrücken in Paketen](https://learn.microsoft.com/de-de/sql/integration-services/expressions/use-property-expressions-in-packages?view=sql-server-ver16).

#### How to Use Expressions for Data Flow Properties


1. Erstellen Sie ein SSIS Paket, siehe [Erste Schritte](../erste-schritte).
2. Rechtsklicken Sie auf die *Data Flow Canvas* und wählen Sie **Properties**. Das Fenster "Properties" öffnet sich.<br>
3. Fügen Sie eine *Expression* hinzu, indem Sie auf **[...]** klicken. Das Fenster "Property Expression Editor" öffnet sich.<br>
![Expressions](/img/content/xis/expressions.png){:class="img-reagierend"}
4. Wählen Sie eine *Property* aus der Drop-Down-Liste. 
5. Öffnen Sie den "Expression Builder", indem Sie auf den **[…]** Button unter *Expression* klicken.
6. Bauen Sie einen Ausdruck und klicken Sie auf **[Evaluate Expression]**, um die Syntax des Ausdrucks zu prüfen.
7. Bestätigen Sie Ihre Eingabe mit **[OK]**.

