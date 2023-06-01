function isFromBellville(registrationNo)
{
    if(registrationNo.startsWith("CY"))
    {
      return true
    }
    else
    {
      return false;
    }
  }
  console.log(isFromBellville("CY"))
  console.log(isFromBellville("FS"))