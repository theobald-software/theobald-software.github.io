
Use the following internal SAP representation for input:
- Date: The date 01.01.1999 has the internal representation 19990101 (YYYYMMDD).<br>
- Year period: The year period 001.1999 has the internal representation 1999001 (YYYYPPP).<br>
- Numbers: Numbers must contain the leading zeros, e.g., customer number 1000 has the internal representation 0000001000.<br>

{: .box-warning }
**Warning! Values must use the internal SAP representation.**
Input that does not use the internal SAP representation results in error messages e.g.: <br>
`ERPConnect.ABAPProgramException: RfcInvoke failed(RFC_ABAP_MESSAGE): Enter date in the format \_.\_.\_`
