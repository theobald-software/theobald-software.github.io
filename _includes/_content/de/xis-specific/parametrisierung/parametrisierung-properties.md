### Parametrisierung mit Expression Properties

Die *Custom Properties* einer Xtract IS Komponente repräsentieren die Eigenschaften der Komponente und werden im "Properties" Fenster der Komponente angezeigt.
Diese Properties sind nicht zu verwechseln mit den *Data Flow Properties*. *Data Flow Properties* können über SSIS-Ausdrücke gesetzt werden und werden im "Properies" Fenster des Data Flow Tasks angezeigt.

Bei der von Microsoft empfohlenen Parametrisierung durch *Data Flow Properties* werden die Eigenschaften der Komponente zur Laufzeit überschrieben.

1. Erstellen Sie ein SSIS Paket, siehe [Erste Schritte](../erste-schritte).
2. Rechtsklicken Sie auf die *Data Flow Canvas* und wählen Sie **Properties**. Das Fenster "Properties" öffnet sich.<br>
3. Fügen Sie eine *Expression* hinzu, indem Sie auf **[...]** klicken. Das Fenster "Property Expression Editor" öffnet sich.<br>
![Expressions](/img/content/xis/expressions.png){:class="img-reagierend"}
4. Wählen Sie eine *Property* aus der Drop-Down-Liste. 
5. Öffnen Sie den "Expression Builder", indem Sie auf den **[…]** Button unter *Expression* klicken.
6. Bauen Sie einen Ausdruck und klicken Sie auf **[Evaluate Expression]**, um die Syntax des Ausdrucks zu prüfen.
7. Bestätigen Sie Ihre Eingabe mit **[OK]**.

