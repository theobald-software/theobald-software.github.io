---
ref: erpconnect-13
layout: page
title: Miscellaneous
description: Appendix
product: erpconnect
parent: erpconnect
childidentifier: appendix
permalink: /:collection/:path
weight: 13
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=appendix
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for ERPConnect.<br>
Make sure to use the documentation within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

### Data Type Mapping

The table shows the  data type mapping between ABAP / RFC and .NET.

| ABAP       | ABAP Dictionary                    | ERPConnect      | .NET           | Remarks                                   |
|------------|------------------------------------|-----------------|----------------|-------------------------------------------|
| b          | INT1                               | RFCTYPE INT1    | System Byte    |                                           |
| s          | INT2, PREC                         | RFCTYPE INT2    | System Int16   |                                           |
| i          | INT4                               | RFCTYPE INT     | System Int32   |                                           |
| p          | DEC, CURR, QUAN                    | RFCTYPE BCD     | System Decimal | Max. supported length is 28 digits        |
| decfloat16 | DF16_DEC, DF16_RAW, DF16_SCL       | RFCTYPE BYTE    | System Byte[]  | No ReadTable support                      |
| decfloat34 | DF34_DEC, DF34_RAW, DF34_SCL       | RFCTYPE BYTE    | System Byte[]  | No ReadTable support                      |
| f          | FLTP                               | RFCTYPE FLOAT   | System Double  |                                           |
| c          | CUKY, UNIT, CHAR, LCHR, CLNT, LANG | RFCTYPE CHAR    | System String  |                                           |
| string     | STRING                             | RFCTYPE STRING  | System String  | No ReadTable support                      |
| n          | NUMC, ACCP                         | RFCTYPE NUM     | System String  | Only characters 0_9 ACCP format is YYYYMM |
| d          | DATS                               | RFCTYPE DATE    | System String  | Format is YYYYMM                          |
| t          | TIMS                               | RFCTYPE TIME    | System String  | Format is HHMMSS                          |
| x          | RAW, LRAW                          | RFCTYPE BYTE    | System Byte[]  |                                           |
| xstring    | RAWSTRING                          | RFCTYPE XSTRING | System Byte[]  | No ReadTable support                      |


### ERPConnect API

The ERPConnect API documenation is availalbe in the Object Browser in Visual Studio (Menu: View -> Object Browser). Be sure that the file ERPConnectXX.xml is in the same folder as the ERPConnectXX.dll.

![erpconnect-api-object-browser](/img/content/erpconnect-api-object-browser.png){:class="img-responsive" }