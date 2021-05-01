Bis zum Release BW 7.0 sind InfoSpokes der zentrale Dreh- und Angelpunkt für die Open Hub Services. Falls Sie bereits ein Release 7.0 nutzen, können Sie alternativ auch in das nächste TeilAbschnitt springen und erfahren, wie OHS-Destinations gehandhabt werden.<br>
In der Transaktion RSA1 erhalten Sie über das Menü *Werkzeuge -> Open Hub Service -> Infospoke* editieren den Einstieg zum Anlegen eines Infospokes. Hinterlegen Sie dort eine Datenquelle (z.B. ein ODS-Objekt oder einen Cube)

![OHS-InfoSpoke-01](/img/content/OHS-InfoSpoke-01.png){:class="img-responsive"}

Im Tab Destination definieren Sie den Infospoke so, dass eine Extraktion in ein Fremdsystem möglich ist (siehe Screenshot). Insbesondere muss hier die zuvor angelegte RFC-Destination eingetragen werden.

![OHS-InfoSpoke-02](/img/content/OHS-InfoSpoke-02.png){:class="img-responsive"}

Anschließend müssen noch die zu übertragenden Spalten und ggfs. eine Selektion gefüllt werden. Danach kann der Spoke gespeichert und aktiviert werden.<br>
Als letzten Schritt benöigen wir eine Prozesskette. Gehen Sie dazu von der Transaktion RSA1 in das Menü *Editieren -> Prozessketten* und legen Sie dort eine neue Prozesskette an. In der Variante für die Kette muss *Start durch API*  angekreuzt sein. Fügen Sie dann den vorher angelegten Infospoke in die Kette ein.

![OHS-InfoSpoke-03](/img/content/OHS-InfoSpoke-03.png){:class="img-responsive"}

Zum Schluss müssen Sie noch die Prozesskette speichern und aktivieren.