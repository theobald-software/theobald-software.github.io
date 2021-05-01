### DeltaQ Output 

A DeltaQ source has two outputs:

**DeltaQDataOutput (1)**<br>
The data output correlates with the checkmarked columns including the RequestID.

**DeltaQRequestLog (2)**<br>
The protocol output has the following columns:

- DataSource
- RequestID
- UpdateType
- TimeStamp
- MessageType
- Message

### Best practice

{: .box-tip }
**Recommendation:** For Delta mechanisms in particular, a detailed protocol is very helpful when troubleshooting.

![DeltaQ-DataOutput-01](/img/content/DeltaQ-DataOutput-01.png){:class="img-responsive"}
