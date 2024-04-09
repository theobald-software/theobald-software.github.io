---
ref: ec-tools-02
layout: page
title: IDoc-Schema-Generator
description: IDoc-Schema-Generator
product: erpconnect
parent: tools
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=idoc-schema-generator
---

The *IDoc-Schema-Generator* generates an XML file that can be used to load IDoc schemas.<br>
Loading IDoc schemas via XML usually has higher performance than loading them via `CreateIdoc` or `CreateEmptyIdoc`, because no SAP connection is necessary.<br>
See [XML-Support for IDoc programming](../receiving-and-sending-idocs/xml-support-for-idoc-programming) for more information on using the generated XML file.

### How to Use *IDoc-Schema-Generator*
1. To start the *IDoc-Schema-Generator*, run the *IdocSchemaGenerator.exe* in the ERPConnect directory `C:\Program Files\ERPConnect`.
2. Enter the IDoc type you want to generate. If needed, enter enhancements and click **[Generate Now!]**. <br>
![Tools-002](/img/content/Tools-002.png){:class="img-responsive" }
3. The window "SAP Login" opens. Enter your SAP credentials and click **[OK]**.
4. Save the XML file to your local hard drive. 
5. Use the method `Idoc.LoadIdocSchema` to load the XML file into your program. 
