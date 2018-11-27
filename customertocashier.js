function queueTime(customers, n)
{
var temp;
  if (customers.length == 0)
  {
    return 0;
  }
  var my_array = new Array(n).fill(0);
  my_array[n-1] = customers[0];
for(i=1;i<customers.length;i++)
  {
    my_array[0] += customers[i];
    temp =0;
    while (my_array[temp]>my_array[temp+1])
    {
      var a = my_array[temp];
        my_array[temp] = my_array[temp+1];
        my_array[temp+1] = a;
        temp++;
    }
  }
 return (my_array[n-1]);
}
