### DeltaQ Output 

A DeltaQ source has two outputs:

- **DeltaQDataOutput:**<br>
The data output correlates with the checkmarked columns including the RequestID.
- **DeltaQRequestLog:**<br>
The protocol output has the following columns:
	- DataSource
	- RequestID
	- UpdateType
	- TimeStamp
	- MessageType
	- Message

{: .box-tip }
**Recommendation:** For Delta mechanisms in particular, a detailed protocol is very helpful when troubleshooting.

![DeltaQ-DataOutput-01](/img/content/DeltaQ-DataOutput-01.png){:class="img-responsive"}
