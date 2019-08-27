#### Date conversion

**Convert date strings**<br>
Converts the character-type SAP date (YYYYMMDD, for example, 19900101) to a formatted date (YYYY-MM-DD, for example, 1990-01-01). In the data target, the SAP date does not have a string data type but a real date type.

**Convert invalid dates to**<br>
If an SAP date cannot be converted to a valid date, this default date value is used.
invalid value is then converted to the entered date. NULL is supported as a value.

When an invalid SAP date is converted, the two special cases 00000000 and 9999XXXX are checked first.

**Convert 00000000 to**<br>
Converts the SAP date 00000000 to this value.

**Convert 9999XXXX to**<br>
Converts the SAP date 9999XXXX to this value.